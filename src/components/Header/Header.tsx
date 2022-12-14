import { Container, LogoContainer, TitleContainer } from './styles';

const Header = () => {
  return (
    <Container>
      <LogoContainer>
        <img src='https://dog.ceo/img/dog-api-logo.svg' alt='Imran Dog App' />
      </LogoContainer>
      <TitleContainer>
        <h1>Dog Image Finder App</h1>
      </TitleContainer>
    </Container>
  );
};

export default Header;
