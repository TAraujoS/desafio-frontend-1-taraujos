import CalcProvider from "./context/CalcContext";
import Home from "./components/Home";

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
