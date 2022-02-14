import "./App.css";
import Donut from "./components/Donut/Donut";

function App() {
  return (
    <div>
      <Donut size="small" percent={100} direction="down" />
      <Donut size="small" percent={75} direction="down" />
      <Donut size="small" percent={50} direction="down" />
      <Donut size="small" percent={25} direction="down" />
    </div>
  );
}

export default App;
