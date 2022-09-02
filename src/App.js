import Router from "./Router";
import {AnimatePresence} from "framer-motion";
import Globalstyle from './styles/GlobalStyle';

function App() {
  return (
    <AnimatePresence>
      <Globalstyle />
      <Router />
    </AnimatePresence>
  );
}

export default App;
