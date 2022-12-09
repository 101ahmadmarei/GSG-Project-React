import React, { useState } from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import Rating from "@mui/material/Rating";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import useHttp from "../../../hooks/use-http";
const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};
const FormComments = ({ open, setOpen }) => {
  const handleClose = () => setOpen(false);
  const [value, setValue] = useState(2);
  const [review, setReview] = useState("");

  const handleReview = (event) => {
    console.log(value, review);
    setReview("");
    setValue(2);
    setOpen(false);
  };
  return (
    <Modal
      open={open}
      onClose={handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box sx={style}>
        <Typography id="modal-modal-description" sx={{ mt: 2 }}>
          Rate this product and write a review to help others make a decision to
          buy it. Your review will be posted on the site after it is approved by
          the administrator. Thank you!
        </Typography>
        <Rating
          name="simple-controlled"
          value={value}
          onChange={(event, newValue) => {
            setValue(newValue);
          }}
          size="large"
        />

        <TextField
          id="outlined-textarea"
          label="Write a review here ..."
          multiline
          rows={4}
          value={review}
          onChange={(event) => setReview(event.target.value)}
          //   defaultValue="Default Value"
          sx={{ display: "block" }}
          fullWidth
        />
        <Button
          variant="outlined"
          sx={{ mt: 2, ml: 2 }}
          onClick={() => setOpen(false)}
        >
          {" "}
          Cancel
        </Button>
        <Button
          variant="contained"
          sx={{ mt: 2, ml: 2 }}
          onClick={handleReview}
        >
          {" "}
          Submit
        </Button>
      </Box>
    </Modal>
  );
};

export default FormComments;
