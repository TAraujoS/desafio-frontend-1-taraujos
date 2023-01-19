import CalcProvider from "./context/CalcContext";
import Home from "./pages/Home";
import "./styles/global.css";
function App() {
  return (
    <>
      <CalcProvider>
        <Home />
      </CalcProvider>
    </>
  );
}

export default App;
