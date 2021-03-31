import React from 'react';
import { createUseStyles } from 'react-jss';
import AppRouter from './AppRouter';
import { fontStyles, resetStyles } from './styles';

const useStyles = createUseStyles(() => ({
  '@global': {
    ...fontStyles,
    ...resetStyles,
  },
}));

function App() {
  useStyles();

  return (
    <>
      <AppRouter />
    </>
  );
}

export default App;
