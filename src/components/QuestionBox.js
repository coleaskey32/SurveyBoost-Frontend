import React, { useState } from 'react';
import { Box, Button, Input, Stack, Text } from '@chakra-ui/react';

const QuestionBox = ({ question, onSubmit }) => {
  const [answer, setAnswer] = useState('');

  // Access the nested question object
  const questionData = question?.question;

  const handleSubmit = () => {
    if (answer.trim()) {
      onSubmit(answer, questionData.question_id);
      setAnswer(''); // Clear the answer after submission
    } else {
      // Handle empty answer case
      console.error('Answer cannot be empty');
    }
  };



  return (
    <Box
      p={5}
      borderWidth="1px"
      borderRadius="md"
      boxShadow="md"
      bg="white"
      mb={4}
    >
      <Text fontSize="lg" mb={4}>
        {questionData?.question_text || 'No question available'}
      </Text>
      
      {/* Conditionally render options if the question has them */}
      {questionData?.options && questionData.options.length > 0 && (
        <Stack spacing={3} mb={4}>
          {questionData.options.map((option) => (
            <Button
              key={option.value}
              onClick={() => setAnswer(option.value)}
              variant="outline"
            >
              {option.label}
            </Button>
          ))}
        </Stack>
      )}

      {/* Render an input field for text questions */}
      {!questionData?.options && (
        <Input
          value={answer}
          onChange={(e) => setAnswer(e.target.value)}
          placeholder="Your answer"
          mb={4}
        />
      )}

      <Button
        colorScheme="blue"
        onClick={handleSubmit}
        isDisabled={!answer.trim()} // Disable button if the answer is empty
      >
        Submit
      </Button>
    </Box>
  );
};

export default QuestionBox;
