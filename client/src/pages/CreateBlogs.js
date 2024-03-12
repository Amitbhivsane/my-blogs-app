import React, { useState } from "react";
import { Box, Button, InputLabel, TextField, Typography } from "@mui/material";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

const CreateBlogs = () => {
  const navigate = useNavigate();
  const id = localStorage.getItem("userId");
  const [inputs, setinputs] = useState({
    title: "",
    description: "",
    image: "",
  });
  //inputes
  const handelchange = (e) => {
    setinputs((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  const handelsubmit = async (e) => {
    e.preventDefault();
    // console.log(inputs);
    try {
      const { data } = await axios.post(`/api/v1/blog/create-blog`, {
        title: inputs.title,
        description: inputs.description,
        image: inputs.image,
        user: id,
      });
      if (data?.success) {
        toast.success("Blog Created");
        navigate("/my-blogs");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <form onSubmit={handelsubmit}>
        <Box
          border={3}
          borderRadius={10}
          padding={3}
          margin="auto"
          boxShadow={"10px"}
          width={"50%"}
          display={"flex"}
          flexDirection={"column"}
          marginTop={"30px"}
        >
          <Typography
            variant="h4"
            textAlign={"center"}
            padding={3}
            color={"gray"}
          >
            Create A Posts
          </Typography>

          <InputLabel
            sx={{ mt: 1, mt: 2, fontSize: "24px", fontWeight: "bold" }}
          >
            Title:
          </InputLabel>
          <TextField
            name="title"
            value={inputs.title}
            onChange={handelchange}
            variant="outlined"
            margin="normal"
            required
          ></TextField>
          <InputLabel
            sx={{ mt: 1, mt: 2, fontSize: "24px", fontWeight: "bold" }}
          >
            Description:
          </InputLabel>
          <TextField
            name="description"
            value={inputs.description}
            onChange={handelchange}
            variant="outlined"
            margin="normal"
            required
          ></TextField>
          <InputLabel
            sx={{ mt: 1, mt: 2, fontSize: "24px", fontWeight: "bold" }}
          >
            Image Url:
          </InputLabel>
          <TextField
            name="image"
            value={inputs.image}
            onChange={handelchange}
            variant="outlined"
            margin="normal"
            required
          ></TextField>

          <Button type="submit" color="primary" variant="contained">
            Submit
          </Button>
        </Box>
      </form>
    </>
  );
};

export default CreateBlogs;
