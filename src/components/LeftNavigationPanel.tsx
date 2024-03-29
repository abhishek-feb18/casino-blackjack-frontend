import Drawer from "@mui/material/Drawer";
import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import LogoutIcon from "@mui/icons-material/Logout";
import AssignmentIcon from "@mui/icons-material/Assignment";
import QueryStatsIcon from "@mui/icons-material/QueryStats";
import PaidIcon from "@mui/icons-material/Paid";
import FlightTakeoffIcon from "@mui/icons-material/FlightTakeoff";
import LoginIcon from "@mui/icons-material/Login";
import AppRegistrationIcon from "@mui/icons-material/AppRegistration";
import { useNavigate } from "react-router-dom";
import { ROUTES } from "src/utils/constants";

export const drawerWidth = 240;
const iconMap: {
  [key: string]: JSX.Element;
} = {
  "Sign Up": <AppRegistrationIcon sx={{ color: "antiquewhite" }} />,
  "Sign In": <LoginIcon sx={{ color: "antiquewhite" }} />,
  "Play Now!": <FlightTakeoffIcon sx={{ color: "antiquewhite" }} />,
  "Buy Chips": <PaidIcon sx={{ color: "antiquewhite" }} />,
  "How to play": <AssignmentIcon sx={{ color: "antiquewhite" }} />,
  Stats: <QueryStatsIcon sx={{ color: "antiquewhite" }} />,
  Logout: <LogoutIcon sx={{ color: "antiquewhite" }} />,
};

interface INavigationPanelProps {
  isLogged: Boolean;
  setIsLogged: Function;
}

export default function LeftNavigationPanel({
  isLogged,
  setIsLogged,
}: INavigationPanelProps) {
  const navigate = useNavigate();
  const primaryNavigationList = isLogged
    ? ["Play Now!", "Buy Chips"]
    : ["Sign Up", "Sign In"];
  const secondaryNavigationList = isLogged
    ? ["How to play", "Stats", "Logout"]
    : ["How to play", "Stats"];
  function handleNavigationButtonsClick(target: any) {
    if (target.textContent === "Logout") {
      setIsLogged(false);
      navigate(ROUTES.HOMEPAGE);
    } else if (target.textContent === "Sign In") {
      navigate(ROUTES.LOGIN);
    } else if (target.textContent === "Sign Up") {
      navigate(ROUTES.SIGNUP);
    }
  }

  return (
    <Drawer
      PaperProps={{
        sx: {
          backgroundColor: "#088038",
        },
      }}
      sx={{
        width: drawerWidth,
        flexShrink: 0,
        gridRow: "1 / -1",
        gridColumn: "1",
        display: "flex",
        flexDirection: "column",
        "& .MuiDrawer-paper": {
          width: drawerWidth,
          boxSizing: "border-box",
        },
      }}
      variant="permanent"
      anchor="left"
    >
      <Toolbar sx={{ height: "5rem" }} />
      <Divider />
      <List>
        {primaryNavigationList.map((text, index) => (
          <ListItem key={text} disablePadding>
            <ListItemButton
              onClick={(event) => handleNavigationButtonsClick(event.target)}
            >
              <ListItemIcon>{iconMap[text]}</ListItemIcon>
              <ListItemText primary={text} sx={{ color: "antiquewhite" }} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
      <Divider sx={{ borderColor: "antiquewhite" }} />
      <List>
        {secondaryNavigationList.map((text, index) => (
          <ListItem key={text} disablePadding>
            <ListItemButton
              onClick={(event) => handleNavigationButtonsClick(event.target)}
            >
              <ListItemIcon>{iconMap[text]}</ListItemIcon>
              <ListItemText primary={text} sx={{ color: "antiquewhite" }} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Drawer>
  );
}
