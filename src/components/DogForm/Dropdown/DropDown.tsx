import { Container, DropdownContainer, ErrorText } from './dropdown-styles';

interface Props {
  showError?: boolean;
  title: string;
  children: React.ReactNode;
}

const DropDown = ({ title, children, showError }: Props) => {
  return (
    <Container>
      <h5>{title}</h5>
      <DropdownContainer showError={showError}>{children}</DropdownContainer>
      {showError && <ErrorText>Please choose a breed above</ErrorText>}
    </Container>
  );
};

export default DropDown;
