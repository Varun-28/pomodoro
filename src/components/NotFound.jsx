import React from "react";
import { Link } from "react-router-dom";
import pageNotFound from "../assets/pageNotFound.png";
import "../styles/components.css"

function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center my-4">
      <img
        className="w-4/5 md:w-2/5"
        src={pageNotFound}
        alt="page-not-found"
      />
      <Link to="/">
        <button className="btn-primary py-2 px-4">Go Back Home</button>
      </Link>
    </div>
  );
}

export { NotFound };
