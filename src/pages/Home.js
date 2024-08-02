import React, { useState, useEffect } from 'react';
import { Box, Heading, Text, SimpleGrid, Button } from '@chakra-ui/react';
import SurveySiteBox from '../components/SurveySiteBox';
import { fetchSurveyData, updateStartSurvey } from '../api/fetch';
import Navbar from '../components/Navbar';

const Home = () => {
  const [surveySites, setSurveySites] = useState([
    {
      id: 1,
      name: 'Survey Junkie',
      surveysCompleted: 5,
      totalEarnings: 10,
      isConnected: false,
    },
    {
      id: 2,
      name: 'Swag_Bucks',
      surveysCompleted: 0,
      totalEarnings: 0,
      isConnected: false,
    },
    // Add more survey sites here as needed
  ]);

  useEffect(() => {
    // Fetch earnings when the component mounts
    const fetchEarnings = async () => {
      const survey_data = await fetchSurveyData(); // Ensure this function is defined and works as expected
      if (survey_data) {
        console.log('SURVEEEY: ', survey_data);
        // Update state or handle earnings data
        setSurveySites((prevSites) =>
          prevSites.map((site) => {
            const earningsSite = survey_data.find(
              (data) => data.survey_site === site.name
            );
            return earningsSite
              ? {
                  ...site,
                  totalEarnings: earningsSite.balance,
                  isConnected: true,
                }
              : site;
          })
        );
      }
    };
    fetchEarnings();
  }, []); // Empty dependency array ensures this runs once when component mounts

  const handleStartSurvey = () => {
    updateStartSurvey(true); // or pass `false` to stop surveys
  };

  return (
    <Box maxW="1200px" mx="auto" mt={10} p={5} borderRadius="md" boxShadow="md">
      <Navbar />

      <SimpleGrid
        columns={{ base: 1, md: 2, lg: 3 }}
        spacing={5}
        alignItems="center"
        justifyContent="center"
        pt={5}
      >
        {surveySites.map((site) => (
          <SurveySiteBox
            key={site.id} // Add a key prop for React to track elements
            siteName={site.name}
            surveysCompleted={site.surveysCompleted}
            totalEarnings={site.totalEarnings}
            isConnected={site.isConnected}
          />
        ))}
      </SimpleGrid>

      <Box mt={10} textAlign="right">
        <Button
          size="lg"
          colorScheme="blue"
          variant="solid"
          borderRadius="full"
          px={6}
          py={4}
          onClick={handleStartSurvey} // Bind the function to the button
        >
          Start Surveys
        </Button>
      </Box>
    </Box>
  );
};

export default Home;
