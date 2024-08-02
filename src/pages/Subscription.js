import React from 'react';
import { Box, Heading, Text, Button, Stack } from '@chakra-ui/react';
import Navbar from '../components/Navbar';
const Subscription = () => {
  return (
    <Box maxW="800px" mx="auto" mt={10} p={5}>
      <Navbar />

      <Heading as="h1" size="xl" mb={5} textAlign="center">
        Subscription Plans
      </Heading>

      <Stack spacing={8}>
        <Box
          p={5}
          borderWidth={1}
          borderRadius="md"
          boxShadow="md"
          bg="gray.50"
          textAlign="center"
        >
          <Heading as="h2" size="lg" mb={3}>
            Basic Plan
          </Heading>
          <Text fontSize="xl" mb={4}>
            $10 per month
          </Text>
          <Text mb={4}>
            Includes basic features and access to standard surveys.
          </Text>
          <Button colorScheme="teal" size="lg">
            Subscribe Now
          </Button>
        </Box>

        <Box
          p={5}
          borderWidth={1}
          borderRadius="md"
          boxShadow="md"
          bg="gray.50"
          textAlign="center"
        >
          <Heading as="h2" size="lg" mb={3}>
            Premium Plan
          </Heading>
          <Text fontSize="xl" mb={4}>
            $25 per month
          </Text>
          <Text mb={4}>
            Includes all basic features plus premium surveys and priority
            support.
          </Text>
          <Button colorScheme="teal" size="lg">
            Subscribe Now
          </Button>
        </Box>

        <Box
          p={5}
          borderWidth={1}
          borderRadius="md"
          boxShadow="md"
          bg="gray.50"
          textAlign="center"
        >
          <Heading as="h2" size="lg" mb={3}>
            Enterprise Plan
          </Heading>
          <Text fontSize="xl" mb={4}>
            Custom Pricing
          </Text>
          <Text mb={4}>
            Tailored solutions for large organizations with advanced features
            and dedicated support.
          </Text>
          <Button colorScheme="teal" size="lg">
            Contact Us
          </Button>
        </Box>
      </Stack>
    </Box>
  );
};

export default Subscription;
