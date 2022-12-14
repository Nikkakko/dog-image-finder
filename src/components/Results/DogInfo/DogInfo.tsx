import { useAppSelector } from '../../../app/store';
import { Container } from './doginfo-styles';

const DogInfo = () => {
  const { imageResults, breed, subBreed } = useAppSelector(state => state.dog);

  function capitalizeBreed(string: string) {
    return string.replace(/(?:^|\s)\S/g, function (a) {
      return a.toUpperCase();
    });
  }

  const renderTitle = () => {
    if (breed !== 'all' && subBreed !== 'all' && imageResults > 0)
      return (
        <span>
          {capitalizeBreed(breed)} - {capitalizeBreed(subBreed)}
        </span>
      );
    if (breed !== 'all' && subBreed === 'all' && imageResults > 0)
      return <span>{capitalizeBreed(breed)} </span>;
    return null;
  };

  return (
    <Container>
      <>
        {renderTitle()}

        <p>
          {imageResults} {imageResults === 1 ? 'result' : 'results'}
        </p>
      </>
    </Container>
  );
};

export default DogInfo;
