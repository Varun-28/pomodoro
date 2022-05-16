import { Route, Routes } from "react-router-dom";
import { Home, Task, SingleTask } from "./pages/Pages";
import { Footer, NotFound } from "./components/Components.jsx";
import "./App.css";

function App() {
  return (
    <div className="App min-h-screen flex flex-col">
      <main className="grow">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/task" element={<Task />} />
          <Route path="/task/:taskId" element={<SingleTask />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
}

export default App;
