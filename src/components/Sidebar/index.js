import React, { useState } from "react";
import { Link } from "react-router-dom";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import Collapse from "@mui/material/Collapse";
import ListItemIcon from "@mui/material/ListItemIcon";
import {
  ExpandLess,
  ExpandMore,
  Store,
  ShoppingBasket,
  Layers,
  People,
  SupportAgent,
  CreditCard,
  Assignment,
  Report,
  Receipt,
  BusinessCenter,
} from "@mui/icons-material";

// Define the structure of the menu items including nested dropdowns
const menuItems = [
  {
    name: "Product Management",
    icon: <BusinessCenter />,
    children: [
      { name: "Product List", icon: <></> },
      { name: "Stock Management", icon: <></> },
      { name: "Add New Product", icon: <></> },
    ],
  },
  {
    name: "Ecommerce Management Center",
    icon: <BusinessCenter />,
    children: [
      { name: "Shop Parameter Config", icon: <Layers /> },
      { name: "Order Email Content Config", icon: <Assignment /> },
      { name: "PLatform Message", icon: <Assignment /> },
      { name: "Hot Keywords", icon: <Assignment /> },
    ],
  },
  {
    name: "Shop Decoration",
    icon: <Store />,
    children: [
      { name: "Advertising Management", icon: <ShoppingBasket /> },
      { name: "Product Category Config", icon: <ShoppingBasket /> },
      { name: "Slide Pic Config", icon: <ShoppingBasket /> },
      { name: "Menu Management", icon: <ShoppingBasket /> },
      { name: "Show Category Config", icon: <ShoppingBasket /> },
      { name: "Store details", icon: <ShoppingBasket /> },
      { name: "Decoration Drawing", icon: <ShoppingBasket /> },
      { name: "Browse Category Management", icon: <ShoppingBasket /> },
    ],
  },
  {
    name: "Base Data Config",
    icon: <Store />,
    children: [{ name: "Global System Parameters", icon: <ShoppingBasket /> }],
  },
  {
    name: "Catalog Management",
    icon: <Store />,
    children: [{ name: "Sales Catalog Management", icon: <ShoppingBasket /> }],
  },
  {
    name: "Partner Management",
    icon: <People />,
    children: [
      { name: "Customer Survey", icon: <Assignment /> },
      { name: "Customer Management", icon: <People /> },
    ],
  },
  {
    name: "Customer Service Management",
    icon: <SupportAgent />,
    children: [
      { name: "Customer service", icon: <Assignment /> },
      { name: "Commodity information", icon: <Assignment /> },
    ],
  },
  {
    name: "Credit Management",
    icon: <CreditCard />,
    children: [{ name: "Payment Term", icon: <Assignment /> }],
  },
  {
    name: "Order Management",
    icon: <Receipt />,
    children: [
      { name: "After Sale Order", icon: <Assignment /> },
      { name: "Direct Order", icon: <Assignment /> },
      { name: "Order List", icon: <Assignment /> },
    ],
  },
  { name: "Report Management", icon: <Report />, children: [] },
  {
    name: "Invoice Management",
    icon: <Receipt />,
    children: [
      { name: "Invoice Audit", icon: <Assignment /> },
      { name: "Tax Billing Management", icon: <Assignment /> },
    ],
  },
  {
    name: "Odoo ERP",
    icon: <Layers />,
    children: [
      { name: "Харилцагчид", icon: <Assignment /> },
      { name: "Борлуулагч & харилцагч", icon: <Assignment /> },
      { name: "Борлуулагчид", icon: <Assignment /> },
      { name: "Order List", icon: <Assignment /> },
      { name: "Product", icon: <Assignment /> },
      { name: "Pricelist Үнийн хүснэгт", icon: <Assignment /> },
      { name: "Category", icon: <Assignment /> },
      { name: "Агуулах", icon: <Assignment /> },
      { name: "Config", icon: <Assignment /> },
    ],
  },
];

function Sidebar() {
  const [open, setOpen] = useState({});

  const handleClick = (name) => {
    setOpen((prevOpen) => ({
      ...prevOpen,
      [name]: !prevOpen[name],
    }));
  };
  return (
    <Drawer
      sx={{
        width: 240,
        "& .MuiDrawer-paper": {
          width: 240,
          position: "relative",
          boxSizing: "border-box",
          backgroundColor: "#333",
          color: "white",
          display: "flex",
          flexDirection: "column",
          justifyContent: "top",
          alignItems: "center",
          "::-webkit-scrollbar": {
            display: "none",
          },
          scrollbarWidth: "none",
          msOverflowStyle: "none",
        },
      }}
      variant="permanent"
      anchor="left"
    >
      <List
        sx={{
          width: "100%",
          ".MuiListItemButton-root": {
            justifyContent: "flex-start", // Align text to the start
          },
          ".MuiListItemIcon-root": {
            minWidth: "30px", // Adjust icon container size
          },
          ".MuiListItemText-primary": {
            fontSize: "0.875rem", // Adjust text size
          },
          ".MuiSvgIcon-root": {
            fontSize: "1.2rem", // Adjust icon size
          },
        }}
      >
        {menuItems.map((item) => (
          <React.Fragment key={item.name}>
            <ListItemButton
              onClick={() => handleClick(item.name)}
              sx={{
                "& .MuiListItemText-primary": { fontSize: "0.85rem" }, // Smaller font size for top-level items
                "& .MuiListItemIcon-root": { minWidth: "30px" }, // Smaller icon container
                "& .MuiSvgIcon-root": { fontSize: "1.4rem" }, // Smaller icon size
              }}
            >
              <ListItemIcon>{item.icon}</ListItemIcon>
              <ListItemText primary={item.name} />
              {item.children.length > 0 &&
                (open[item.name] ? <ExpandLess /> : <ExpandMore />)}
            </ListItemButton>
            <Collapse in={open[item.name]} timeout="auto" unmountOnExit>
              <List component="div" disablePadding>
                {item.children.map((childItem) => (
                  <ListItemButton
                    key={childItem.name}
                    sx={{
                      pl: 4,
                      "& .MuiListItemText-primary": { fontSize: "0.675rem" }, // Even smaller font size for child items
                      "& .MuiListItemIcon-root": { minWidth: "24px" }, // Even smaller icon container for child items
                      "& .MuiSvgIcon-root": { fontSize: "0.875rem" }, // Even smaller icon size for child items
                    }}
                    component={Link}
                    to={`/${childItem.name.replace(/\s+/g, "-").toLowerCase()}`}
                  >
                    <ListItemIcon>{childItem.icon}</ListItemIcon>
                    <ListItemText primary={childItem.name} />
                  </ListItemButton>
                ))}
              </List>
            </Collapse>
          </React.Fragment>
        ))}
      </List>
    </Drawer>
  );
}

export default Sidebar;
