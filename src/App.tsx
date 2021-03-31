import React from 'react';
import { createUseStyles } from 'react-jss';
import { QueryClient, QueryClientProvider } from 'react-query'
import AppRouter from './AppRouter';
import { fontStyles, resetStyles } from './styles';

const queryClient = new QueryClient()

const useStyles = createUseStyles(() => ({
  '@global': {
    ...fontStyles,
    ...resetStyles,
  },
}));

function App() {
  useStyles();

  return (
    <QueryClientProvider client={queryClient}>
      <AppRouter />
    </QueryClientProvider>
  );
}

export default App;
