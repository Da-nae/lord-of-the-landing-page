import './App.css'
import Header from "./components/Header.jsx";
import CanvasContainer from "./components/CanvasContainer.jsx";

export default function App() {

  return (
    <div className={"app"}>
      <Header />
      <CanvasContainer />
    </div>
  )
}