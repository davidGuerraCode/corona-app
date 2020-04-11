import { Machine, assign } from 'xstate';

const fetchData = async (url) => {
  const jsonData = await fetch(url);
  const data = await jsonData.json();

  return data;
};

const fetchMachine = Machine({
  id: 'fetch',
  initial: 'idle',
  context: {
    data: {},
    error: null,
    retries: 0,
  },
  states: {
    idle: {
      on: {
        FETCH: 'loading',
      },
    },
    loading: {
      invoke: {
        id: 'fetchData',
        src: (_context, event) => fetchData(event.url),
        onDone: {
          target: 'success',
          actions: assign((ctx, event) => {
            return { ...ctx, data: event.data };
          }),
        },
        onError: {
          target: 'failure',
          actions: assign((ctx, event) => {
            return { ...ctx, error: event.data };
          }),
        },
      },
    },
    success: {
      type: 'final',
    },
    failure: {
      on: {
        RETRY: {
          target: 'loading',
          actions: assign((context, _event) => {
            return {
              ...context,
              retries: context.retries + 1,
            };
          }),
        },
      },
    },
  },
});

export default fetchMachine;
