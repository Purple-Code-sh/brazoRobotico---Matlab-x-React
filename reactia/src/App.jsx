import Plotly from "./Plotly";
import AnglesBars from "./components/AnglesBars";
import "./App.css";

function App() {
  return (
    <div className="h-screen flex">
      <div
        id="panel"
        className="flex-auto h-screen bg-shBase-darker px-14 py-3"
      >
        <AnglesBars></AnglesBars>
      </div>
      <div className="w-fit bg-shBase-dark h-screen p-2">
        <div className="block">
          <Plotly></Plotly>
        </div>
        <div className=" bg-shBase-light w-4/5 h-32 block m-auto"></div>
      </div>
    </div>
  );
}

export default App;
