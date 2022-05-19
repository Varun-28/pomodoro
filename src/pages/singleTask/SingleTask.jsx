import React from "react";
import { Link, useParams } from "react-router-dom";
import { useTitle } from "../../utils/useTitle";
import { getTask } from "../../utils/updateStorage.js";
import { usePomodoroFunctions } from "./usePomodoroFunctions";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import "./singleTask.css";

function SingleTask() {
  const { taskId } = useParams();
  const taskData = getTask();
  const { title, description, minutes } = taskData.find(
    (task) => task.id === taskId
  );
  const {
    clockState,
    secondsLeft,
    minutesLeft,
    percentValue,
    pauseHandler,
    restartHandler,
    handleStart,
  } = usePomodoroFunctions(minutes);

  useTitle(`${minutesLeft}:${secondsLeft} ⏰ | TASKY`);

  return (
    <main className="p-4 single-task-page">
      <section className="mb-4 flex gap-4">
        <Link to="/task">
          <button className="hero-btn px-4 py-2">
            <i className="fas fa-arrow-left"></i> Back To Tasks
          </button>
        </Link>
        <Link to="/">
          <button className="hero-btn px-4 py-2">
            <i className="fas fa-home"></i> Home
          </button>
        </Link>
      </section>
      <section className="single-task-container">
        <div className="flex flex-col items-center justify-center">
          <div className="pomoclock-bar my-4">
            <CircularProgressbar
              value={percentValue}
              text={`${minutesLeft}m:${secondsLeft}s`}
              counterClockwise={true}
              styles={buildStyles({
                rotation: 0,
                strokeLinecap: "butt",
                textSize: "1rem",
                pathTransitionDuration: 0.5,
                pathColor: "#E71466",
                textColor: "#00898F",
                trailColor: "rgba(231, 20, 102, 0.2)",
                backgroundColor: "#000000",
              })}
            />
          </div>

          <div className="clock-btn flex gap-4 my-4">
            <button
              className="btn btn-start"
              onClick={handleStart}
              disabled={clockState.isStarted}
            >
              <i className="fa-solid fa-circle-play"></i> <span>Start</span>
            </button>

            <button
              className="btn btn-pause"
              onClick={pauseHandler}
              disabled={!clockState.isStarted}
            >
              <i
                className={`${
                  clockState.isPaused
                    ? "fa-solid fa-circle-pause"
                    : "fas fa-stop-circle"
                }`}
              ></i>
              <span>{clockState.isPaused ? "Resume" : "Pause"}</span>
            </button>

            <button className="btn btn-reset" onClick={restartHandler}>
              Reset
            </button>
          </div>
        </div>
        <div className="flex flex-col items-center justify-center">
          <h3 className="text-3xl underline">{title}</h3>
          <p className="text-lg">{description}</p>
        </div>
      </section>
    </main>
  );
}

export { SingleTask };
