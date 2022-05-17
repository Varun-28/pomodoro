import React from "react";
import "../styles/footer.css";

function Footer() {
  return (
    <footer className="pomodoro-footer p-4">
      <p>Made with <i className="fas fa-code"></i> by Varun Verma</p>
      <div className="social-links flex justify-center items-center mt-4 gap-x-4">
        <a
          href="https://twitter.com/VarunVerma2828"
          rel="noopener noreferrer"
          target="_blank"
        >
          <i className="fab fa-twitter-square" title="Twitter"></i>
        </a>
        <a
          href="https://github.com/Varun-28"
          rel="noopener noreferrer"
          target="_blank"
        >
          <i className="fab fa-github-square" title="Github"></i>
        </a>
        <a
          href="https://www.linkedin.com/in/varun-verma-a-budding-engineer/"
          rel="noopener noreferrer"
          target="_blank"
        >
          <i className="fab fa-linkedin" title="LinkedIn"></i>
        </a>
      </div>
    </footer>
  );
}

export { Footer };
