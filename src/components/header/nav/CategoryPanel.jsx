import React from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import Button from "@mui/material/Button";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import GridViewOutlinedIcon from "@mui/icons-material/GridViewOutlined";
import "./CategoryPanel.css";

// Import category icons (as image files)
import Category1 from "../../../assets/images/category-1.svg";
import Category2 from "../../../assets/images/category-2.svg";
import Category3 from "../../../assets/images/category-3.svg";
import Category4 from "../../../assets/images/category-4.svg";
import Category5 from "../../../assets/images/category-5.svg";
import Category6 from "../../../assets/images/category-6.svg";
import Category7 from "../../../assets/images/category-7.svg";
import Category8 from "../../../assets/images/category-8.svg";
import Category9 from "../../../assets/images/category-9.svg";
import Category10 from "../../../assets/images/category-10.svg";

const CategoryPanel = () => {
  const [open, setOpen] = React.useState(false);

  const toggleDrawer = (newOpen) => () => {
    setOpen(newOpen);
  };

  const DrawerList = (
    <Box sx={{ width: 250 }} role="presentation" onClick={toggleDrawer(false)}>
      <List>
        {[
          { name: "Milks And Dairies", icon: Category6 },
          { name: "Clothing & Beauty", icon: Category3 },
          { name: "Pet Foods & Toy", icon: Category4 },
          { name: "Bread and Juice", icon: Category2 },
          { name: "Fast Food", icon: Category5 },
          { name: "Drinks", icon: Category6 },
        ].map((item) => (
          <ListItem key={item.name} disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <img src={item.icon} alt="Category Icon" style={{ width: 24, height: 24 }} />
              </ListItemIcon>
              <ListItemText primary={item.name} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
      <Divider />
      <List>
        {[
          { name: "Baking Material", icon: Category1 },
          { name: "Fresh Fruit", icon: Category7 },
          { name: "Pantry Staples", icon: Category9 },
          { name: "Fresh Seafood", icon: Category10 },
          { name: "Vegetables", icon: Category8 },
        ].map((item) => (
          <ListItem key={item.name} disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <img src={item.icon} alt="Category Icon" style={{ width: 24, height: 24 }} />
              </ListItemIcon>
              <ListItemText primary={item.name} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <div>
      <Button onClick={toggleDrawer(true)} className="bg-g text-white catTab">
        <GridViewOutlinedIcon /> &nbsp;&nbsp;
        <strong>Browse All Categories</strong>
      </Button>
      <Drawer open={open} onClose={toggleDrawer(false)}>
        {DrawerList}
      </Drawer>
    </div>
  );
};

export default CategoryPanel;
