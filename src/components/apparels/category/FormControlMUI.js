import React, { useState } from "react";
import style from "./Header.module.css";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import RestartAltIcon from "@mui/icons-material/RestartAlt";
import Button from "@mui/material/Button";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
const FormControlMUI = (props) => {
  const [open, setOpen] = useState(false);

  const handleChange = (event) => {
    props.onClick(event.target.value);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleOpen = () => {
    setOpen(true);
  };
  return (
    <div>
      {" "}
      <Button sx={{ mt: 2, color: "black", fontSize: 16 }} onClick={handleOpen}>
        {props.ButtonText}
      </Button>
      <FormControl sx={{ m: 1, minWidth: 120 }}>
        <InputLabel id="demo-controlled-open-select-label">
          {props.InputLabel}
        </InputLabel>

        <Select
          labelId="demo-controlled-open-select-label"
          id="demo-controlled-open-select"
          open={open}
          onClose={handleClose}
          onOpen={handleOpen}
          value={props.currentValue}
          label={props.InputLabel}
          onChange={handleChange}
          // autoWidth
          sx={{ overflowX: "hidden" }}
        >
          <MenuItem value="">
            <em style={{ display: "flex" }}>
              <ListItemIcon>
                <RestartAltIcon sx={{ color: "green" }} />
                <ListItemText
                  primary="Reset"
                  primaryTypographyProps={{ fontSize: 18, color: "green" }}
                />
              </ListItemIcon>
            </em>
          </MenuItem>
          {props.items.map((item) => (
            <MenuItem
              value={item.substring(0, 1).toLowerCase() + item.substring(1)}
            >
              {item}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </div>
  );
};

export default FormControlMUI;
