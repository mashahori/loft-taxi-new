import { FC } from "react";
import { Map as MapGL } from "react-map-gl";

import { MAP_TOKEN } from "constants/mapToken";

import { MapCard } from "components/MapCard";
import { useGetCard } from "api/queries";
import { OrderTaxiForm } from "forms";

export const Map: FC = () => {
  const { status, data, error, refetch, isSuccess } = useGetCard();

  return (
    <>
      <MapGL
        initialViewState={{
          longitude: 24.938379,
          latitude: 60.169857,
          zoom: 12,
        }}
        style={{ height: "100vh" }}
        mapStyle="mapbox://styles/mapbox/streets-v9"
        mapboxAccessToken={MAP_TOKEN}
      />
      {isSuccess ? <OrderTaxiForm /> : <MapCard />}
    </>
  );
};
