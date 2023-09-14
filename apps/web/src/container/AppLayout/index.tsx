import { useMemo } from "react";
import { Outlet, useLocation } from "react-router-dom";
import { Box, CssBaseline } from "@mui/material";
import AppBar from "ui/AppBar";
import { Sidebar } from "../Sidebar";

interface AppLayoutProps {
  getNavigationBreadcrum: (path: string) => any;
  hideAppBar: (path: string) => boolean;
}

export const AppLayout = ({
  getNavigationBreadcrum,
  hideAppBar,
}: AppLayoutProps): JSX.Element => {
  const { pathname } = useLocation();
  const appbarHidden = useMemo(() => hideAppBar(pathname), [pathname]);

  return (
    <Sidebar>
      <CssBaseline />
      <>
        {!appbarHidden && (
          <AppBar getNavigationBreadcrum={getNavigationBreadcrum} />
        )}
        <Box p="30px">
          <Outlet />
        </Box>
      </>
    </Sidebar>
  );
};

export default AppLayout;
