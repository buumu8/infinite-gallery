import React from "react";
import { ImageContainer } from "./components/image-container/image-container.component";
import Scrollable from "./components/scrollable/scrollable.component";
import ErrorBoundary from "./components/error-boundary/error-boundary.component";
import "./App.scss";

function App() {
  return (
    <div className="App">
      <Scrollable>
        {" "}
        <h1 className="title">Infinity Gallery</h1>
        <ErrorBoundary>
          <ImageContainer />
        </ErrorBoundary>
        <div className="footer">
          All right reserved &copy; {new Date().getFullYear()}. Jettapol
          Tuetrakul
        </div>
      </Scrollable>
    </div>
  );
}

export default App;
