import { Box } from "@mui/material";
import { Outlet } from "react-router-dom";

import LeftNavigationPanel, { drawerWidth } from "./LeftNavigationPanel";
import AppHeader from "./AppHeader";

interface IAppLayoutProps {
  isLogged: Boolean;
  setIsLogged: Function;
}

export default function AppLayout({ isLogged, setIsLogged }: IAppLayoutProps) {
  return (
    <Box
      component="div"
      height="100vh"
      display="grid"
      gridTemplateColumns={`${drawerWidth}px 1fr`}
      gridTemplateRows="auto 1fr"
    >
      <AppHeader />
      <LeftNavigationPanel isLogged={isLogged} setIsLogged={setIsLogged} />
      <Box bgcolor="seagreen">
        <Outlet />
      </Box>
    </Box>
  );
}
