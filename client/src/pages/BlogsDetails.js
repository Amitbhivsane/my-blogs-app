import React, { useEffect, useState } from "react";
import { Box, Button, InputLabel, TextField, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import axios from "axios";
import { useParams } from "react-router-dom";

const BlogsDetails = () => {
  const [blog, setBlog] = useState({});
  const [inputs, setinputs] = useState({});
  const id = useParams().id;
  const navigate = useNavigate();

  const getBlogDetails = async () => {
    try {
      const { data } = await axios.get(`/api/v1/blog/get-blog/${id}`);
      if (data?.success) {
        setBlog(data?.success);
        setinputs({
          title: data.blog.title,
          description: data.blog.description,
          image: data.blog.image,
        });
      }
    } catch (error) {
      console.log(error);
    }
  };

  const handelsubmit = async (e) => {
    e.preventDefault();
    // console.log(inputs);
    try {
      const { data } = await axios.put(`/api/v1/blog/update-blog/${id}`, {
        title: inputs.title,
        description: inputs.description,
        image: inputs.image,
        user: id,
      });
      if (data?.success) {
        toast.success("Blog Updated");
        navigate("/my-blogs");
      }
    } catch (error) {
      console.log(error);
    }
  };
  //inputes
  const handelchange = (e) => {
    setinputs((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  useEffect(() => {
    getBlogDetails();
  }, [id]);

  console.log(blog, "dell");
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

          <Button type="submit" color="warning" variant="contained">
            UPDATE
          </Button>
        </Box>
      </form>
    </>
  );
};

export default BlogsDetails;
