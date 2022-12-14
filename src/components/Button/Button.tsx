import { useAppDispatch, useAppSelector } from '../../app/store';
import { setImages, setIsLoading, setReset, setError } from '../../features/dogSlice';
import { fetchBreedImages, fetchSubBreedImages } from '../../lib/api';
import { FetchButton, ResetButton } from './button-styled';

const Button = () => {
  const dispatch = useAppDispatch();
  const { error, breed, subBreed, number, imageResults, images } = useAppSelector(
    state => state.dog
  );

  console.log(subBreed);

  const handleReset = () => {
    dispatch(setReset());
  };

  const handleFetch = () => {
    // e.preventDefault();

    if (breed === 'all') {
      dispatch(setError());
    }

    if (breed !== 'all' && subBreed === 'all') {
      dispatch(fetchBreedImages({ breed, number }));
    }

    if (breed !== 'all' && subBreed !== 'all') {
      dispatch(fetchSubBreedImages({ breed, subBreed, number }));
    }
  };

  return (
    <>
      <FetchButton onClick={handleFetch}>Search Dogs</FetchButton>
      <ResetButton onClick={handleReset}>Reset</ResetButton>
    </>
  );
};

export default Button;
