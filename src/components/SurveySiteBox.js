import React from 'react';
import { Box, Button, Heading, Text } from '@chakra-ui/react';

const SurveySiteBox = ({ siteName, surveysCompleted, totalEarnings, onConnect, isConnected }) => {
  return (
    <Box
      maxW='sm'
      mx='auto'
      mt={5}
      p={5}
      borderWidth={1}
      borderRadius='lg'
      boxShadow='lg'
    >
      <Heading as='h2' size='md' mb={4}>
        {siteName}
      </Heading>
      {isConnected ? (
        <>
          <Text mb={2}>Surveys Completed Today: {surveysCompleted}</Text>
          <Text>Total Earnings Today: ${totalEarnings}</Text>
        </>
      ) : (
        <Button colorScheme='teal' size='md' onClick={onConnect}>
          Connect 
        </Button>
      )}
    </Box>
  );
};

export default SurveySiteBox;
