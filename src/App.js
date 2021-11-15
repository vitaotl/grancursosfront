import "./App.css";
import { ContextProvider } from "./context/context";

import Main from "./pages/Main";

function App() {
  return (
    <ContextProvider>
      <Main />
    </ContextProvider>
  );
}

export default App;
