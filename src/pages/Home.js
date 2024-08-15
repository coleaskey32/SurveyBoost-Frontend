import React, { useState, useEffect } from 'react';
import { Box, SimpleGrid, Button } from '@chakra-ui/react';
import { fetchSurveyData, updateStartSurvey, fetchQuestion, updateAnswer } from '../api/fetch';
import Navbar from '../components/Navbar';
import QuestionBox from '../components/QuestionBox';
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
    {
      id: 2,
      name: 'Swag_Bucks',
      surveysCompleted: 0,
      totalEarnings: 0,
      isConnected: false,
    },
    // Add more survey sites here as needed
  ]);

  const [isSurveyRunning, setIsSurveyRunning] = useState(false); // New state for tracking survey status
  const [currentQuestion, setCurrentQuestion] = useState(null);

  // Pulls information about survey site in boxes
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

  // Pulls information about Questions 
  useEffect(() => {
    let pollingInterval = null;

    const pollForQuestions = async () => {
      if (isSurveyRunning && currentQuestion === null) {
        try {
          const question = await fetchQuestion(); // Ensure this function is defined to fetch the next question
          if (question) {
            console.log("question: ", question);
            setCurrentQuestion(question);
          }
        } catch (error) {
          console.error('Error fetching question:', error);
        }
      }
    };

    if (isSurveyRunning) {
      // Start polling every 1 second if there is no current question
      pollingInterval = setInterval(pollForQuestions, 1000); // Poll every 1 second
    } else {
      // Stop polling
      if (pollingInterval) {
        clearInterval(pollingInterval);
      }
    }
    return () => {
      if (pollingInterval) {
        clearInterval(pollingInterval);
      }
    };
  }, [isSurveyRunning, currentQuestion]);

  const handleStartStopSurvey = async () => {
    // Toggle the survey status and update the button text
    const newSurveyStatus = !isSurveyRunning;
    setIsSurveyRunning(newSurveyStatus);
    await updateStartSurvey(newSurveyStatus); // Pass the new status to updateStartSurvey
  };

  const handleSubmitQuestion = async (answer, question_id) => {
    // Handle the question submission
    updateAnswer(answer, question_id);
    console.log('Submitted answer:', answer, question_id);
    // Clear the current question and continue
    setCurrentQuestion(null);
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
          onClick={handleStartStopSurvey} // Bind the function to the button
        >
          {isSurveyRunning ? 'Stop Surveys' : 'Start Surveys'}
        </Button>
      </Box>

      {currentQuestion && (
        <QuestionBox
          question={currentQuestion}
          onSubmit={handleSubmitQuestion}
        />
      )}

    </Box>
  );
};

export default Home;
