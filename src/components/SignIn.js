import React from 'react';
import { Box, Button, FormControl, FormLabel, Input, Heading } from '@chakra-ui/react';
import { Link } from 'react-router-dom';

const SignIn = () => {
  return (
    <Box maxW="sm" mx="auto" mt={10} p={5} borderWidth={1} borderRadius="lg" boxShadow="lg">
      <Heading as="h1" size="lg" textAlign="center" mb={5}>Sign In</Heading>
      <FormControl id="email" mb={4}>
        <FormLabel>Email address</FormLabel>
        <Input type="email" />
      </FormControl>
      <FormControl id="password" mb={4}>
        <FormLabel>Password</FormLabel>
        <Input type="password" />
      </FormControl>
      <Button colorScheme="teal" size="md" width="full" mb={4}>
        Sign In
      </Button>
      <Box textAlign="center">
        <Link to="/register">
          <Button colorScheme="teal" variant="link">
            Register
          </Button>
        </Link>
      </Box>
    </Box>
  );
};

export default SignIn;
