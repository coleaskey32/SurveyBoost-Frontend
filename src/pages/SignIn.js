import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom"; // Import Link
import {
  Box,
  Button,
  FormControl,
  FormLabel,
  Input,
  Heading,
  Text,
} from "@chakra-ui/react";
import { signInUser } from "../api/fetch"; // Import your API function

const SignIn = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const userData = { username, password };

    try {
      const response = await signInUser(userData);
      console.log("Sign-in response:", response.data);

      if (response.data.success) {
        navigate("/home");
      } else {
        alert(response.data.error);
      }
    } catch (error) {
      console.error("Error signing in:", error.response?.data);
      alert("An error occurred while signing in. Please try again.");
    }
  }

  return (
    <Box
      maxW="sm"
      mx="auto"
      mt={10}
      p={5}
      borderWidth={1}
      borderRadius="lg"
      boxShadow="lg"
    >
      <Heading as="h1" size="lg" textAlign="center" mb={5}>
        Sign In
      </Heading>

      <FormControl id="username" mb={4}>
        <FormLabel>Username</FormLabel>
        <Input
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
      </FormControl>

      <FormControl id="password" mb={4}>
        <FormLabel>Password</FormLabel>
        <Input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </FormControl>

      <Button
        colorScheme="teal"
        size="md"
        width="full"
        onClick={handleSubmit}
        type="submit" // Ensure type="submit" for form submission
      >
        Sign In
      </Button>

      <Text mt={3} textAlign="center">
        Don't have an account?{" "}
        <Link to="/register" color="teal.500">
          Register here
        </Link>
      </Text>
    </Box>
  );
};

export default SignIn;
