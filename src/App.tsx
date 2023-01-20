import CalcProvider from "./context/CalcContext";
import Main from "./pages/Main";
import GlobalStyle from "./styles/global";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.min.css";

function App() {
  return (
    <>
      <GlobalStyle />
      <ToastContainer />
      <CalcProvider>
        <Main />
      </CalcProvider>
    </>
  );
}

export default App;
