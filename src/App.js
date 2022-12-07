import "./App.css";
import { getCarsInfo } from "./components/data";
import Box from "./components/box";

function App() {
  const data = getCarsInfo();

  return (
    <div className="w-full h-full p-3 bg-[#d4d4d4]">
      <Box data={data} />
    </div>
  );
}

export default App;
