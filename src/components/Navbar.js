import React from 'react';
import { Box, Flex, Heading, Link, Spacer, Button } from '@chakra-ui/react';
import { Link as RouterLink } from 'react-router-dom';

const Navbar = () => {
  return (
    <Box bg="teal.500" color="white" px={4} py={3}>
      <Flex align="center" maxW="1200px" mx="auto">
        <Heading as="h1" size="lg">
          <Link as={RouterLink} to="/" color="white">
            SurveyBoost
          </Link>
        </Heading>
        <Spacer />
        <Flex>
          <Button
            as={RouterLink}
            to="/home"
            variant="link"
            color="white"
            mx={2}
          >
            Home
          </Button>
          <Button
            as={RouterLink}
            to="/subscription"
            variant="link"
            color="white"
            mx={2}
          >
            Subscription
          </Button>
          <Button
            as={RouterLink}
            to="/about"
            variant="link"
            color="white"
            mx={2}
          >
            About
          </Button>
        </Flex>
      </Flex>
    </Box>
  );
};

export default Navbar;
