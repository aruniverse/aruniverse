import Container from '../components/Container';

const Error = ({ statusCode }) => {
  return (
    <Container>
      <h1>Error {statusCode}</h1>
      <p>Page not found</p>
    </Container>
  );
};

export default Error;
