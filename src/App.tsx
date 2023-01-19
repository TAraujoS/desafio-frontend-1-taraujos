import CalcProvider from "./context/CalcContext";
import Home from "./pages/Main";
import GlobalStyle from "./styles/global";

function App() {
  return (
    <>
      <GlobalStyle />
      <CalcProvider>
        <Home />
      </CalcProvider>
    </>
  );
}

export default App;
