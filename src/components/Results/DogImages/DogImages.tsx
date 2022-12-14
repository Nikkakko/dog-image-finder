import { useAppSelector } from '../../../app/store';
import { Container, ImageContainer } from './dog-images.styles';

const DogImages = () => {
  const { images } = useAppSelector(state => state.dog);
  return (
    <Container>
      {images?.map((image, index) => (
        <ImageContainer key={index}>
          <img src={image} alt='dog' loading='lazy' />
        </ImageContainer>
      ))}
    </Container>
  );
};

export default DogImages;
