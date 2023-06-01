// @ts-nocheck
import { FC } from "react";
import { Map as MapGL, Source, Layer } from "react-map-gl";

import { MAP_TOKEN } from "constants/mapToken";

import { MapCard } from "components/MapCard";
import { useGetCard, useOrderTaxi } from "api/queries";
import { OrderTaxiForm } from "forms";

export const Map: FC = () => {
  const { status, data, error, refetch, isSuccess } = useGetCard();

  const { mutate, isLoading, data: route } = useOrderTaxi();

  const handleOrderTaxi = (addresses) => {
    mutate(addresses);
  };

  const geojson = {
    type: "FeatureCollection",
    features: [
      {
        type: "Feature",
        geometry: { type: "LineString", coordinates: route?.data },
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

  return (
    <>
      <MapGL
        initialViewState={{
          longitude: 30.272182,
          latitude: 59.800652,
          zoom: 12,
        }}
        style={{ height: "100vh" }}
        mapStyle="mapbox://styles/mapbox/streets-v9"
        mapboxAccessToken={MAP_TOKEN}
      >
        {route?.data ? (
          <Source id="my-data" type="geojson" data={geojson}>
            <Layer {...layerStyle} />
          </Source>
        ) : (
          ""
        )}
      </MapGL>
      {isSuccess ? (
        <OrderTaxiForm handleOrderTaxi={handleOrderTaxi} />
      ) : (
        <MapCard />
      )}
    </>
  );
};
