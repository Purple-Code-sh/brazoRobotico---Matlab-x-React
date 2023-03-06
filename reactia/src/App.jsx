import AnglesBars from "./components/AnglesBars";
import PointsSection from "./components/PointsSection";
import Plotly from "./Plotly";
import Coordinates from "./components/Coordinates";
import "./App.css";

function App() {
  return (
    <div className="h-screen flex">
      <div
        id="panel"
        className="flex-auto h-screen bg-shBase-darker px-14 py-3"
      >
        <AnglesBars></AnglesBars>
        <PointsSection></PointsSection>
      </div>
      <div className="w-fit bg-shBase-dark h-screen p-2">
        <div className="block">
          <Plotly></Plotly>
        </div>
        <div className=" bg-shPrimary w-full h-32 block m-auto">
          <Coordinates></Coordinates>
        </div>
      </div>
    </div>
  );
}

export default App;
