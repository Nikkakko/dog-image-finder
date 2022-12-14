import { useEffect } from 'react';
import { useAppSelector } from '../../app/store';
import DogImages from './DogImages/DogImages';
import DogInfo from './DogInfo/DogInfo';
import { Container } from './result-styles';

const Results = () => {
  const { images, breed } = useAppSelector(state => state.dog);

  return (
    <Container>
      <h1>Gallery</h1>
      <DogInfo />
      {images.length > 0 && <DogImages />}
    </Container>
  );
};

export default Results;
