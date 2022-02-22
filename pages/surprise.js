import { useEffect } from 'react';
import confetti from 'https://cdn.skypack.dev/canvas-confetti';
import Container from '../components/Container';

const Surprise = () => {
  useEffect(() => {
    confetti({
      particleCount: 150,
      spread: 180,
    });
  }, []);

  return (
    <Container>
      <div>
        {"You found the easter egg! Congratulations! You're a true fan"}
      </div>
    </Container>
  );
};

export default Surprise;
