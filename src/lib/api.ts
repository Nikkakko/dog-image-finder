import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from './axios';

export const fetchDogData = createAsyncThunk('dog/fetchDogData', async () => {
  try {
    const response = await axios.get('/breeds/list/all');
    return response?.data;
  } catch (error) {
    if (error instanceof Error) {
      console.log(error, 'error message');
    } else {
      console.log('unknown error', error);
    }
  }
});

// Fetch the Sub breeds
export const fetchSubBreedData = createAsyncThunk(
  'dog/fetchSubBreedData',
  async (breed: string) => {
    try {
      const response = await axios.get(`/breed/${breed}/list`);
      return response?.data;
    } catch (error) {
      if (error instanceof Error) {
        console.log(error, 'error message');
      } else {
        console.log('unknown error', error);
      }
    }
  }
);

// Fetch the images
export const fetchBreedImages = createAsyncThunk(
  'dog/fetchBreedImages',
  async ({ breed, number }: { breed: string; number: string }) => {
    try {
      const response = await axios.get(`/breed/${breed}/images/random/${number}`);
      return response?.data;
    } catch (error) {
      if (error instanceof Error) {
        console.log(error, 'error message');
      } else {
        console.log('unknown error', error);
      }
    }
  }
);

export const fetchSubBreedImages = createAsyncThunk(
  'dog/fetchImages',
  async ({
    breed,
    number,
    subBreed,
  }: {
    breed: string;
    number: string;
    subBreed: string;
  }) => {
    try {
      const response = await axios.get(
        `/breed/${breed}/${subBreed}/images/random/${number}`
      );
      return response?.data;
    } catch (error) {
      if (error instanceof Error) {
        console.log(error, 'error message');
      } else {
        console.log('unknown error', error);
      }
    }
  }
);
