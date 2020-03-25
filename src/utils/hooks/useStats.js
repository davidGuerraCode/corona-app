import { useState, useEffect } from 'react';

const useStats = (url = {}) => {
  const [stats, setStats] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);

        const data = await fetch(url);
        const jsonData = await data.json();

        setStats(jsonData);
        setLoading(false);
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, [url]);

  return { stats, loading };
};

export default useStats;
