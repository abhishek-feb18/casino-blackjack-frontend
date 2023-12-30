import Drawer from "@mui/material/Drawer";
import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import MailIcon from "@mui/icons-material/Mail";
import LogoutIcon from "@mui/icons-material/Logout";
import AssignmentIcon from "@mui/icons-material/Assignment";
import QueryStatsIcon from "@mui/icons-material/QueryStats";

const drawerWidth = 240;
const primaryNavigationList = ["Sign Up", "Sign In", "Play Now!", "Buy Chips"];
const secondaryNavigationList = ["How to play", "Stats", "Logout"];
const iconMap: {
    [key: string]: JSX.Element;
} = {
    "Sign Up": <AssignmentIcon sx={{ color: "antiquewhite" }} />,
    "Sign In": <AssignmentIcon sx={{ color: "antiquewhite" }} />,
    "Play Now!": <AssignmentIcon sx={{ color: "antiquewhite" }} />,
    "Buy Chips": <AssignmentIcon sx={{ color: "antiquewhite" }} />,
    "How to play": <AssignmentIcon sx={{ color: "antiquewhite" }} />,
    Stats: <QueryStatsIcon sx={{ color: "antiquewhite" }} />,
    Logout: <LogoutIcon sx={{ color: "antiquewhite" }} />,
};

export default function LeftNavigationPanel() {
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
                "& .MuiDrawer-paper": {
                    width: drawerWidth,
                    boxSizing: "border-box",
                },
            }}
            variant="permanent"
            anchor="left"
        >
            <Toolbar sx={{ backgroundColor: "black" }} />
            <Divider />
            <List>
                {primaryNavigationList.map((text, index) => (
                    <ListItem key={text} disablePadding>
                        <ListItemButton>
                            <ListItemIcon>{iconMap[text]}</ListItemIcon>
                            <ListItemText
                                primary={text}
                                sx={{ color: "antiquewhite" }}
                            />
                        </ListItemButton>
                    </ListItem>
                ))}
            </List>
            <Divider sx={{ borderColor: "antiquewhite" }} />
            <List>
                {secondaryNavigationList.map((text, index) => (
                    <ListItem key={text} disablePadding>
                        <ListItemButton>
                            <ListItemIcon>{iconMap[text]}</ListItemIcon>
                            <ListItemText
                                primary={text}
                                sx={{ color: "antiquewhite" }}
                            />
                        </ListItemButton>
                    </ListItem>
                ))}
            </List>
        </Drawer>
    );
}
