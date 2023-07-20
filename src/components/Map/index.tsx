import { FC, useState, useEffect } from "react";

import { MapCard, SuccessOrderCard, CardLoader, MapGL } from "components";
import { useGetCard, useOrderTaxi } from "api/queries";
import { OrderTaxiForm } from "forms";
import { Card } from "ui";

import * as S from "./styles";

type IModalType = "default" | "order" | "success" | "loading";

export const Map: FC = () => {
  const { data, isSuccess } = useGetCard();
  const [modal, setModal] = useState<IModalType>("loading");

  useEffect(() => {
    if (data?.cardName) {
      setModal("order");
    }
    if (data?.error) {
      setModal("default");
    }
  }, [data]);

  const { mutate, data: route } = useOrderTaxi();

  const handleOrderTaxi = async (addresses) => {
    await mutate(addresses);
    if (isSuccess) {
      setModal("success");
    }
  };

  const handleSuccessOrder = () => setModal("order");

  return (
    <>
      <MapGL coords={route?.data} />
      <S.Container>
        <Card>
          {
            {
              loading: <CardLoader />,
              default: <MapCard />,
              order: <OrderTaxiForm handleOrderTaxi={handleOrderTaxi} />,
              success: (
                <SuccessOrderCard makeAnotherOrder={handleSuccessOrder} />
              ),
            }[modal]
          }
        </Card>
      </S.Container>
    </>
  );
};
