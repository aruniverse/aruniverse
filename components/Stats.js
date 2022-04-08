import { useState, useEffect } from 'react';
export const Stats = ({ pkg }) => {
  const [downloads, setDownloads] = useState(null);
  const [stargazers, setStargazers] = useState(null);
  useEffect(() => {
    const fetchStats = () => {
      fetch(`https://api.npmjs.org/downloads/point/last-week/${pkg}`)
        .then((result) => result.json())
        .then((data) => setDownloads(data.downloads));
      fetch(`https://api.github.com/repos/aruniverse/${pkg}/stargazers`)
        .then((result) => result.json())
        .then((data) => setStargazers(data.length));
    };
    fetchStats();
  }, [pkg]);
  if (!downloads || !stargazers) return <p>Fetching stats...</p>;
  return (
    <div>
      <p>{downloads} weekly downloads</p>
      <p>{stargazers} GitHub stargazers</p>
    </div>
  );
};
