import React, { useState, useEffect } from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import Rating from "@mui/material/Rating";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import useHttp from "../../../hooks/use-http";
import LoadingSpinner from "../../../UI/LoadingSpinner";
import { useParams } from "react-router-dom";
// import LoadingButton from "@mui/lab/LoadingButton";
import SendIcon from "@mui/icons-material/Send";

import classes from "./FormComments.module.css";
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
const FormComments = ({ open, setOpen, onAddedComment }) => {
  const handleClose = () => {
    setOpen(false);
    setFormIsValid(true);
  };
  const [value, setValue] = useState(2);
  const [review, setReview] = useState("");
  const [name, setName] = useState("");
  const [formIsValid, setFormIsValid] = useState(true);
  const params = useParams();
  const { productId } = params;
  const { sendRequest, isLoading } = useHttp(false);
  const submitReview = (event) => {
    event.preventDefault();
    let date = new Date();
    const month = date.toLocaleString("default", { month: "long" });
    const day = date.getDate();
    const year = date.getFullYear();
    date = `on ${month} ${day},${year}`;
    if (name.trim().length === 0) {
      setFormIsValid(false);
      return;
    }
    setFormIsValid(true);
    const comment = { rating: value, review, name, date };
    sendRequest({
      url: `https://gsgstore-e51b4-default-rtdb.firebaseio.com/reviews/${productId}.json`,
      method: "POST",
      body: comment,
      headers: {
        "Content-Type": "application/json",
      },
    });
  };
  useEffect(() => {
    if (!isLoading) {
      setReview("");
      setValue(2);
      setName("");
      setOpen(false);
      onAddedComment();
    }
  }, [isLoading]);

  // if (isLoading) {
  //   return (
  //     <div className={classes.loading}>
  //       <LoadingSpinner />
  //     </div>
  //   );
  // }
  return (
    <Modal
      open={open}
      onClose={handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      {/* <div></div> */}

      <Box sx={style}>
        {isLoading && (
          <div className={classes.loading}>
            <LoadingSpinner />
          </div>
        )}
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
          id="name"
          label="Name..."
          value={name}
          onChange={(event) => setName(event.target.value)}
          //   defaultValue="Default Value"
          sx={{ display: "block" }}
          fullWidth
          margin="dense"
          error={!formIsValid}
          helperText={!formIsValid && "Name is required"}
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
          margin="dense"
          required
        />

        <Button variant="outlined" sx={{ mt: 2, ml: 2 }} onClick={handleClose}>
          Cancel
        </Button>
        <Button
          variant="contained"
          sx={{ mt: 2, ml: 2 }}
          onClick={submitReview}
          type="submit"
        >
          {" "}
          Submit
        </Button>
      </Box>
    </Modal>
  );
};

export default FormComments;
