import { FC } from "react";
import { Outlet } from "react-router-dom";

import { Header } from "components";

export const Dashboard: FC = () => {
  return (
    <>
      <Header />
      <Outlet />
    </>
  );
};
