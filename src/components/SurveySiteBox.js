import React from 'react';
import { Box, Button, Heading, Text } from '@chakra-ui/react';

const SurveySiteBox = ({
  siteName,
  surveysCompleted,
  totalEarnings,
  isConnected,
}) => {
  return (
    <Box
      width="300px" // Fixed width for consistent sizing
      height="200px" // Fixed height for consistent sizing
      p={5}
      borderWidth={1}
      borderRadius="lg"
      boxShadow="lg"
      display="flex"
      flexDirection="column"
      alignItems="center"
      justifyContent="center"
      bg="gray.100" // Background color for better visibility
    >
      <Heading as="h2" size="md" mb={4} textAlign="center">
        {siteName}
      </Heading>
      {isConnected ? (
        <>
          <Text mb={2} textAlign="center">
            Surveys Completed Today: {surveysCompleted}
          </Text>
          <Text textAlign="center">Total Earnings Today: ${totalEarnings}</Text>
        </>
      ) : (
        <>
          <Button>Connect on Google Extension</Button>
        </>
      )}
    </Box>
  );
};

export default SurveySiteBox;
