import { AppBar, Toolbar, Typography } from "@mui/material";

export default function AppHeader() {
  return (
    <AppBar
      position="static"
      sx={{
        zIndex: (theme) => theme.zIndex.drawer + 1,
        backgroundColor: "#154F07",
        display: "flex",
        gridColumn: "1 / -1",
        height: "5rem",
        gridRow: "1",
      }}
    >
      <Toolbar sx={{ justifyContent: "center", height: "5rem" }}>
        <Typography
          variant="h1"
          noWrap
          component="div"
          fontSize={48}
          paddingTop={"5px"}
          sx={{
            fontFamily: '"Carattere", cursive',
            fontWeight: "900",
            color: "red",
          }}
        >
          <span style={{ fontSize: 32 }}>❤️ ♠️</span>
          <span
            style={{
              fontFamily: '"Carattere", cursive',
              fontWeight: "900",
              color: "antiquewhite",
              padding: "0px 30px",
            }}
          >
            Blackjack
          </span>
          <span style={{ fontSize: 32 }}>♣️ ♦️</span>
        </Typography>
      </Toolbar>
    </AppBar>
  );
}
