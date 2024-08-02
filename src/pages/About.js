import React from 'react';
import { Box, Heading, Text, Stack, Image } from '@chakra-ui/react';
import Navbar from '../components/Navbar';

const About = () => {
  return (
    <Box maxW="800px" mx="auto" mt={10} p={5}>
      <Navbar />

      <Heading as="h1" size="xl" mb={5} textAlign="center">
        About Us
      </Heading>

      <Stack spacing={8}>
        <Box textAlign="center">
          <Image
            src="https://via.placeholder.com/600x300" // Replace with your image URL
            alt="About Us"
            borderRadius="md"
            mb={5}
          />
          <Text fontSize="lg">
            We are a team dedicated to helping you find the best survey
            opportunities and maximizing your earnings.
          </Text>
        </Box>

        <Box>
          <Heading as="h2" size="lg" mb={4}>
            Our Mission
          </Heading>
          <Text fontSize="lg" mb={4}>
            Our mission is to provide a platform that simplifies the
            survey-taking process, making it easier for users to find and
            complete surveys. We strive to offer an intuitive and user-friendly
            experience, ensuring that our users can easily manage their survey
            activities and maximize their earnings.
          </Text>

          <Heading as="h2" size="lg" mb={4}>
            Our Team
          </Heading>
          <Text fontSize="lg">
            Our team consists of dedicated professionals with a passion for
            technology and user experience. We work tirelessly to enhance our
            platform and provide the best possible service to our users.
          </Text>
        </Box>

        <Box textAlign="center">
          <Heading as="h2" size="lg" mb={4}>
            Contact Us
          </Heading>
          <Text fontSize="lg" mb={4}>
            If you have any questions or feedback, feel free to reach out to us
            at:
          </Text>
          <Text fontSize="lg" fontWeight="bold">
            support@surveyboost.com
          </Text>
        </Box>
      </Stack>
    </Box>
  );
};

export default About;
