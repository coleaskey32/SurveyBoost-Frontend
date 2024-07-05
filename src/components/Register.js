import React from 'react';
import { Box, Button, FormControl, FormLabel, Input, Heading } from '@chakra-ui/react';

const Register = () => {
  return (
    <Box maxW="sm" mx="auto" mt={10} p={5} borderWidth={1} borderRadius="lg" boxShadow="lg">
      <Heading as="h1" size="lg" textAlign="center" mb={5}>Register</Heading>
      <FormControl id="email" mb={4}>
        <FormLabel>Email address</FormLabel>
        <Input type="email" />
      </FormControl>
      <FormControl id="password" mb={4}>
        <FormLabel>Password</FormLabel>
        <Input type="password" />
      </FormControl>
      <FormControl id="confirmPassword" mb={4}>
        <FormLabel>Confirm Password</FormLabel>
        <Input type="password" />
      </FormControl>
      <Button colorScheme="teal" size="md" width="full">
        Register
      </Button>
    </Box>
  );
};

export default Register;
