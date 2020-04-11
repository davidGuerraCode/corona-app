import { useEffect, useRef } from 'react';
import { useMachine } from '@xstate/react';
import { fetchMachine } from '../machines';

const useStatsMachineFetch = (url) => {
  const [current, send] = useMachine(fetchMachine);
  console.log('Current Machine State from hook', current);
  const isMounted = useRef(null);

  useEffect(() => {
    isMounted.current = true;

    send({ type: 'FETCH', url });

    return () => {
      isMounted.current = false;
    };
  }, [url, current.context]);

  return { current };
};

export default useStatsMachineFetch;
