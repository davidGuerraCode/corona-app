import { useState, useEffect } from 'react';

const useStats = url => {
  const [stats, setStats] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState();

  useEffect(() => {
    const fetchData = async () => {
      try {
        // console.log('Fetching data');
        setLoading(true);
        setError();
        const data = await fetch(url);
        const jsonData = await data.json();

        setStats(jsonData);
        setLoading(false);
      } catch (error) {
        setError(error);
      }
    };

    fetchData();
  }, [url]);

  return { stats, loading, error };
};

export default useStats;
