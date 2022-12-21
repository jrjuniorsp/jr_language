import IconButton from "@mui/material/IconButton";
import Toolbar from "@mui/material/Toolbar";
import Drawer from "../../atoms/Drawer";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import Divider from "@mui/material/Divider";
import List from "@mui/material/List";
import { mainListItems } from "./listItems";

type Props = {
  open: boolean;
  callback: () => void;
};

const SidePanel = (props: Props) => {
  return (
    <Drawer variant="permanent" open={props.open} drawerWidth={240}>
      <Toolbar
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "flex-end",
          px: [1],
        }}
      >
        <IconButton onClick={props.callback}>
          <ChevronLeftIcon />
        </IconButton>
      </Toolbar>
      <Divider />
      <List component="nav">{mainListItems}</List>
    </Drawer>
  );
};

export default SidePanel;
