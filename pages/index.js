import Image from 'next/image';
import Container from '../components/Container';

const Home = () => {
  return (
    <Container>
      <div className="flex flex-col-reverse items-start md:flex-row">
        <div className="flex flex-col pr-8">
          <h1 className="mb-1 text-4xl font-bold md:text-5xl">Arun George</h1>
          <h2 className="text-l mb-4 text-gray-700 dark:text-gray-200">
            Software Engineer II at{' '}
            <a
              aria-label="Bentley Systems"
              href="https://www.bentley.com"
              className="font-semibold"
            >
              Bentley Systems
            </a>
          </h2>
          <p className="mb-16 text-gray-600 dark:text-gray-400">
            {
              'A jack of all trades is a master of none, but oftentimes better than a master of one.'
            }
          </p>
        </div>

        <div className="flex flex-1 justify-end">
          <div className="relative mb-8 mr-auto w-[80px] justify-end drop-shadow-xl sm:mb-0 sm:w-[176px]">
            <Image
              alt="Arun George"
              height={400}
              width={400}
              // src="/avatar.jpg"
              // src="/avatar.HEIC"
              src="https://pbs.twimg.com/profile_images/1476601835502903306/ZCNMBtkl.jpg"
              // className="scale-125 hover:translate-y-4 hover:scale-150"
              // className="rounded hover:translate-y-4 hover:scale-125"
              className="rounded-full"
            />
          </div>
        </div>
      </div>
    </Container>
  );
};

export default Home;
