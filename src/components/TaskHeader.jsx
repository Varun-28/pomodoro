import React from "react";

function TaskHeader() {
  return (
    <header className="task-header py-4 px-16 flex flex-col justify-center md:justify-start">
      <h1 className="text-4xl font-semibold mb-2">Welcome back !</h1>
      <h4 className="text-xl">You have 0 task for today. All the best !!</h4>
    </header>
  );
}

export { TaskHeader };
