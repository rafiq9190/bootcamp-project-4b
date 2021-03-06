import React from "react";
import { FaGithub, FaArrowRight, FaAngleUp } from "react-icons/fa";

export default function Footer() {
  return (
    <footer
      style={{
        background:
          "linear-gradient(90deg, rgba(65,161,255,1) 0%, rgba(54,123,241,1) 100%)",
        color: "white",
        padding: "3rem 3rem",
        borderRadius: "5px 5px 0px 0px",
      }}
    >
      <div style={{ flex: 1 }}>
        <h2>Hello World!</h2>
        <p>
          Developed by  <FaArrowRight />
        </p>
      </div>

      <div>
        <a
          style={{ color: "white" }}
          href="https://github.com/rafiq9190/bootcamp-project-4b"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaGithub style={{ fontSize: "3rem" }} />
        </a>
        <a style={{ color: "white" }} href="#header">
          <FaAngleUp style={{ marginLeft: "10px", fontSize: "3rem" }} />
        </a>
      </div>
    </footer>
  );
}
