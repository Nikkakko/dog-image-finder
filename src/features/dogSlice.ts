import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import {
  fetchDogData,
  fetchBreedImages,
  fetchSubBreedData,
  fetchSubBreedImages,
} from '../lib/api';

// Define a type for the slice state
interface dogState {
  breed: string;
  breedList: string[];

  subBreed: string;
  subBreedList: string[];

  images: string[];

  number: string;
  imageResults: number | string[];
  error: boolean;
  isLoading: boolean;
}

// Define the initial state using that type
const initialState: dogState = {
  breed: 'all',
  breedList: [],
  subBreedList: [],
  images: [],
  subBreed: 'all',
  number: '1',
  imageResults: 0,
  error: false,
  isLoading: false,
};

export const dogSlice = createSlice({
  name: 'dog',
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    setIsLoading: state => {
      state.isLoading = true;
    },

    setImages: (state, action: PayloadAction<string[]>) => {
      state.images = action.payload;
    },

    setBreed: (state, action: PayloadAction<string>) => {
      state.breed = action.payload;
    },

    setSubBreed: (state, action: PayloadAction<string>) => {
      state.subBreed = action.payload;
    },

    setNumber: (state, action: PayloadAction<string>) => {
      state.number = action.payload;
    },

    setIsLoadingFalse: state => {
      state.isLoading = false;
    },
    setError: state => {
      state.error = true;
    },

    setErrorFalse: state => {
      state.error = false;
    },

    setReset: state => {
      state.breed = 'all';
      state.subBreed = 'all';
      state.breedList = [];
      state.subBreedList = [];
      state.images = [];
      state.number = '1';
      state.imageResults = 0;
      state.error = false;
      state.isLoading = false;
    },
  },

  extraReducers: builder => {
    //fetch dog data
    builder.addCase(fetchDogData.pending, state => {
      state.error = false;
    });

    builder.addCase(
      fetchDogData.fulfilled,
      (state, action: PayloadAction<{ message: string[] }>) => {
        const { message } = action.payload;
        state.breedList = Object.keys(message);
      }
    );
    builder.addCase(fetchDogData.rejected, state => {
      state.error = true;
    });

    //fetch fetchSubBreedData
    builder.addCase(fetchSubBreedData.pending, state => {
      state.error = false;
    });
    builder.addCase(
      fetchSubBreedData.fulfilled,
      (state, action: PayloadAction<{ message: string[] }>) => {
        const { message } = action.payload;
        state.subBreedList = message;
      }
    );
    builder.addCase(fetchSubBreedData.rejected, state => {
      state.error = true;
    });

    // fetch fetchBreedImages
    builder.addCase(fetchBreedImages.pending, state => {
      state.error = false;
    });

    builder.addCase(
      fetchBreedImages.fulfilled,
      (state, action: PayloadAction<{ message: string[] }>) => {
        const { message } = action.payload;
        state.images = message;
        state.imageResults = message.length;
      }
    );
    builder.addCase(fetchBreedImages.rejected, state => {
      state.error = true;
    });

    // fetch fetchSubBreedImages
    builder.addCase(fetchSubBreedImages.pending, state => {
      state.error = false;
    });

    builder.addCase(
      fetchSubBreedImages.fulfilled,
      (state, action: PayloadAction<{ message: string[] }>) => {
        const { message } = action.payload;
        state.images = message;
        state.imageResults = message.length;
      }
    );
    builder.addCase(fetchSubBreedImages.rejected, state => {
      state.error = true;
    });
  },
});

export const {
  setIsLoading,
  setNumber,
  setIsLoadingFalse,
  setImages,
  setBreed,
  setSubBreed,
  setReset,
  setError,
} = dogSlice.actions;

// Other code such as selectors can use the imported `RootState` type

export default dogSlice.reducer;
