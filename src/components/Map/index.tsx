// @ts-nocheck
import { FC, Suspense, useState, useEffect } from "react";
import {
  Map as MapGL,
  Source,
  Layer,
  NavigationControl,
  ScaleControl,
  useMap,
} from "react-map-gl";

import { MAP_TOKEN } from "constants/mapToken";

import { MapCard, SuccessOrderCard, CardLoader } from "components";
import { useGetCard, useOrderTaxi } from "api/queries";
import { OrderTaxiForm } from "forms";

type IModalType = "default" | "order" | "success" | "loading";

export const Map: FC = () => {
  const { status, data, error, refetch, isSuccess, isLoading } = useGetCard();
  const [modal, setModal] = useState<IModalType>("loading");

  useEffect(() => {
    if (data?.cardName) {
      setModal("order");
    }
  }, [data]);

  const { mutate, data: route } = useOrderTaxi();

  const handleOrderTaxi = async (addresses) => {
    await mutate(addresses);
    if (isSuccess) {
      setModal("success");
    }
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
          longitude: 30.316273,
          latitude: 59.940578,
          zoom: 11,
        }}
        style={{ height: "calc(100vh - 150px" }}
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
      {
        {
          loading: <CardLoader />,
          default: <MapCard />,
          order: <OrderTaxiForm handleOrderTaxi={handleOrderTaxi} />,
          success: (
            <SuccessOrderCard makeAnotherOrder={() => setModal("order")} />
          ),
        }[modal]
      }
    </>
  );
};
