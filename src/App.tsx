import "./App.css";
import Donut from "./components/Donut/Donut";

function App() {
  return (
    <div>
      <Donut size="small" percent={100} direction="down" difference={-3} />
      <Donut size="regular" percent={75} direction="down" difference={15} />
      <Donut size="regular" percent={50} direction="down" difference={-3} />
      <Donut size="small" percent={25} direction="down" difference={0} />
    </div>
  );
}

export default App;
