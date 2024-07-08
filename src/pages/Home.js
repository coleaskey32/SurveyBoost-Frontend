import React, { useState } from "react";
import { Box, Heading, Text } from "@chakra-ui/react";
import SurveySiteBox from '../components/SurveySiteBox';
const Home = () => {
  const [surveySites, setSurveySites] = useState([
    {
      id: 1,
      name: 'Survey Junkie',
      surveysCompleted: 5,
      totalEarnings: 10,
      isConnected: false,
    },
    // Add more survey sites here as needed
  ]);

  const handleConnect = (id) => {
    // Logic to handle connecting to a survey site
    console.log(`Connecting to survey site with id: ${id}`);
    // Example: Update the state to mark the site as connected
    setSurveySites((prevSites) =>
      prevSites.map((site) =>
        site.id === id ? { ...site, isConnected: true } : site
      )
    );
  };
  
  return (
    <Box maxW="xl" mx="auto" mt={10} p={5}>
      <Heading as="h1" size="xl" textAlign="center" mb={5}>
        Welcome to SurveyBoost
      </Heading>

      <Text fontSize="xl" textAlign="center">
        Your go-to platform for surveys!
      </Text>

      <Box>
        <Heading as='h1' size='lg' textAlign='center' my={5}>
          Home
        </Heading>
        {surveySites.map((site) => (
          <SurveySiteBox
            key={site.id}
            siteName={site.name}
            surveysCompleted={site.surveysCompleted}
            totalEarnings={site.totalEarnings}
            isConnected={site.isConnected}
            onConnect={() => handleConnect(site.id)}
          />
        ))}
      </Box>
    
    </Box>
  );
};

export default Home;
