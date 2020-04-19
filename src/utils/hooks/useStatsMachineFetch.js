import { useEffect } from 'react';
import { useMachine } from '@xstate/react';
import { fetchMachine } from '../machines';

const useStatsMachineFetch = (url) => {
  const [current, send] = useMachine(fetchMachine);
  console.log('Mounting or updating');

  useEffect(() => {
    send({ type: 'FETCH', url });
  }, [url]);

  return { current };
};

export default useStatsMachineFetch;
