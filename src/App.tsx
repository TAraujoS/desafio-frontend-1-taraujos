import CalcProvider from "./context/CalcContext";
import Main from "./pages/Main";
import GlobalStyle from "./styles/global";

function App() {
  return (
    <>
      <GlobalStyle />
      <CalcProvider>
        <Main />
      </CalcProvider>
    </>
  );
}

export default App;
