import axios from 'axios';
import { startSurveyWebSocket } from './websocket';

export const registerUser = async (userData) => {
  const response = await axios.post(
    'http://127.0.0.1:8000/api/users/register/',
    userData,
    {
      headers: {
        'Content-Type': 'application/json',
      },
    }
  );
  return response;
};

export const signInUser = async (userData) => {
  const response = await axios.post(
    'http://127.0.0.1:8000/api/users/signin/',
    userData,
    {
      headers: {
        'Content-Type': 'application/json',
      },
    }
  );
  const { user_id } = response.data;
  localStorage.setItem('user_id', user_id);
  console.log('user_id: ', user_id);
  return response;
};

export const fetchSurveyData = async () => {
  const userId = localStorage.getItem('user_id');

  if (!userId) {
    console.error('User ID not found in local storage.');
    return null; // or handle this case as needed
  }

  try {
    const response = await axios.get(
      `http://127.0.0.1:8000/api/surveys/user/`,
      {
        params: {
          user_id: userId,
        },
        headers: {
          'Content-Type': 'application/json',
        },
      }
    );

    return response.data;
  } catch (error) {
    console.error('Error fetching earnings:', error);
    return null; // Return null or an appropriate default value
  }
};

export const updateStartSurvey = (state) => {
  const userId = localStorage.getItem('user_id');

  if (userId) {
    startSurveyWebSocket(userId, state);
  } else {
    console.error('User ID not found in local storage.');
  }
};
