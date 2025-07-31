import { createRoot } from "react-dom/client";
import "./index.css";
import Squares from "./components/Squares.tsx";

createRoot(document.getElementById("root")!).render(
  <Squares
    speed={0.5}
    squareSize={40}
    direction="diagonal" // up, down, left, right, diagonal
    borderColor="#271E37"
    hoverFillColor="#222"
  />
);
