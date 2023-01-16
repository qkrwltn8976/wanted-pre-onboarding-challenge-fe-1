import * as React from "react";
import { useLocation } from "react-router-dom";
import { AUTH } from "../../../constants/path.constant";
import { IChildrenProps } from "../../../types/childrenProps";
import LayoutView from "./Views/LayoutView";

export interface ILayoutProps extends IChildrenProps {
  isAuthPage: boolean;
}

const Layout = ({ children }: IChildrenProps) => {
  const { pathname } = useLocation();
  const isAuthPage = pathname.includes(AUTH.DEFAULT);

  const LayoutProps = { children, isAuthPage };
  return <LayoutView {...LayoutProps} />;
};

export default Layout;
