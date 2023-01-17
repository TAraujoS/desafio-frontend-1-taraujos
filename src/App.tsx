import CalcProvider from "./context/CalcContext";
import Home from "./pages/Home";
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
