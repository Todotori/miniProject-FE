import Router from './Router';
import { AnimatePresence } from 'framer-motion';
import Globalstyle from './pages/styles/GlobalStyle.js';

function App() {
  return (
    <AnimatePresence>
      <Globalstyle />
      <Router />
    </AnimatePresence>
  );
}

export default App;
