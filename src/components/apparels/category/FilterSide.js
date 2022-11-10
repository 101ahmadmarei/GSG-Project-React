import React, { useState } from "react";
import Button from "@mui/material/Button";
import style from "./FilterSide.module.css";
import List from "@mui/material/List";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Collapse from "@mui/material/Collapse";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import ExpandLess from "@mui/icons-material/ExpandLess";
import ExpandMore from "@mui/icons-material/ExpandMore";
import StarBorder from "@mui/icons-material/StarBorder";

const FilterSide = ({ categories, onFilter }) => {
  const [open, setOpen] = useState(false);
  const handleClick = () => {
    setOpen(!open);
  };
  return (
    <div className={style.filterSide}>
      <header>
        <h4 style={{ fontSize: 12 }}>Filters</h4>
        <Button
          variant="text"
          sx={{ color: "RGB(255, 96, 8)", fontSize: 12 }}
          onClick={() => onFilter()}
        >
          Reset
        </Button>
      </header>
      <aside>
        <ListItemButton onClick={handleClick}>
          <ListItemIcon>
            <InboxIcon />
          </ListItemIcon>
          <ListItemText primary="Apparels" />
          {open ? <ExpandLess /> : <ExpandMore />}
        </ListItemButton>
        <Collapse in={open} timeout="auto" unmountOnExit>
          <List component="div" disablePadding>
            {categories.map((category, i) => (
              <ListItemButton
                key={i}
                sx={{ pl: 4 }}
                onClick={() => onFilter(category)}
              >
                <ListItemIcon>
                  <StarBorder sx={{ color: "red" }} />
                </ListItemIcon>
                <ListItemText
                  primary={category.toUpperCase()}
                  primaryTypographyProps={{ fontSize: 12 }}
                />
              </ListItemButton>
            ))}
          </List>
        </Collapse>
      </aside>
    </div>
  );
};

export default FilterSide;
