import { Route, Routes } from "react-router-dom";
import { Home } from "./pages/home/Home.jsx";
import { SingleTask } from "./pages/singleTask/SingleTask.jsx";
import "./App.css";
import { Footer } from "./components/Components.jsx";

function App() {
  return (
    <div className="App min-h-screen flex flex-col">
      <main className="grow">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/task/:taskId" element={<SingleTask />} />
        </Routes>
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
}

export default App;
