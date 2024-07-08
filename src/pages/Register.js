import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  Box,
  Button,
  FormControl,
  FormLabel,
  Input,
  Heading,
} from "@chakra-ui/react";
import { registerUser } from "../api/fetch";

const Register = () => {
  const [username, setUsername] = useState(""); // State for username
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const userData = { username, email, password };

    try {
      const response = await registerUser(userData);
      console.log("Register response:", response.data);

      if (response.data.success) {
        navigate("/");
      } else {
        alert(response.data.error);
      }
    } catch (error) {
      console.error("Error registering in:", error.response?.data);
      alert("An error occurred while registering. Please try again.");
    }
  }

    


  return (
    <Box
      maxW='sm'
      mx='auto'
      mt={10}
      p={5}
      borderWidth={1}
      borderRadius='lg'
      boxShadow='lg'
    >
      <Heading as='h1' size='lg' textAlign='center' mb={5}>
        Register
      </Heading>

      <FormControl id='username' mb={4}>
        <FormLabel>Username</FormLabel>
        <Input
          type='text'
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
      </FormControl>

      <FormControl id='email' mb={4}>
        <FormLabel>Email address</FormLabel>
        <Input
          type='email'
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </FormControl>

      <FormControl id='password' mb={4}>
        <FormLabel>Password</FormLabel>
        <Input
          type='password'
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </FormControl>

      <Button colorScheme='teal' size='md' width='full' onClick={handleSubmit}>
        Register
      </Button>
    </Box>
  );
};

export default Register;
