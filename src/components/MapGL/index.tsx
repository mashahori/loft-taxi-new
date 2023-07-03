// @ts-nocheck
import { FC, useEffect, useRef } from "react";
import { Map, Source, Layer, MapRef } from "react-map-gl";

import { MAP_TOKEN } from "constants/mapToken";

interface IMapProps {
  coords?: [Number, Number][];
}

export const MapGL: FC<IMapProps> = ({ coords }) => {
  const geojson = {
    type: "FeatureCollection",
    features: [
      {
        type: "Feature",
        geometry: { type: "LineString", coordinates: coords },
      },
    ],
  };

  const layerStyle = {
    id: "point",
    type: "line",
    paint: {
      "line-color": "#ffc617",
      "line-width": 8,
    },
  };

  const mapRef = useRef<MapRef>();

  useEffect(() => {
    if (coords) {
      mapRef.current?.flyTo({ center: coords[0], duration: 2000 });
    }
  }, [coords]);

  return (
    <Map
      ref={mapRef}
      initialViewState={{
        longitude: 30.316273,
        latitude: 59.940578,
        zoom: 12,
      }}
      style={{ height: "calc(100vh - 150px" }}
      mapStyle="mapbox://styles/mapbox/streets-v9"
      mapboxAccessToken={MAP_TOKEN}
    >
      {Boolean(coords) && (
        <Source id="my-data" type="geojson" data={geojson}>
          <Layer {...layerStyle} />
        </Source>
      )}
    </Map>
  );
};
