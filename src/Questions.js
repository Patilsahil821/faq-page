import React, { useState } from "react"
import arrowicon from "./images/icon-arrow-down.svg"
import "./css/question.css"

function Questions({ question, answer }) {
  const [click, setClick] = useState(false)
  function handleClick(e) {
    e.preventDefault()
    setClick(!click)
  }

  return (
    <div className="questions">
      <div
        onClick={handleClick}
        style={{
          fontWeight: click === true ? "bold" : "",
          color: click === true ? "hsl(14, 88%, 65%)" : ""
        }}
        className="question"
      >
        {question}
      </div>
      {click === true && <p className="answer">{answer}</p>}
      <img
        style={{
          transform: click === true ? "rotate(-180deg)" : "rotate(0deg)"
        }}
        onClick={handleClick}
        src={arrowicon}
        className="arrow-icon"
        alt="arrow icon"
      ></img>
    </div>
  )
}

export default Questions
