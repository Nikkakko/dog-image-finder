import { useAppDispatch } from '../app/store';
import {
  setBreed,
  setNumber,
  setImages,
  setIsLoading,
  setSubBreed,
} from '../features/dogSlice';
import { AppDispatch } from '../app/store';

export const renderBreed = (value: string, dispatch: AppDispatch) => {
  dispatch(setBreed(value));
  dispatch(setSubBreed('all'));
};

export const renderSubBreed = (value: string, dispatch: AppDispatch) => {
  dispatch(setSubBreed(value));
};

export const renderNumber = (value: string, dispatch: AppDispatch) => {
  dispatch(setNumber(value));
};
