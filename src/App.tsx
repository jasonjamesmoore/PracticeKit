import '@mantine/core/styles.css';
import { MantineProvider } from '@mantine/core';
import { Router } from './platform/Router';
import { theme } from './theme';


export default function App() {
  
  return (
    <MantineProvider theme={theme}>
      <Router />
    </MantineProvider>
  );
}
