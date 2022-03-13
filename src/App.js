import React from "react"
import "./css/app.css"
import bgpatterndesktop from "./images/bpd.svg"
import illustrationbox1 from "./images/ibd.svg"
import illustrationwoman from "./images/iwod.svg"
import Questions from "./Questions"
import data from "./question-answer"
function App() {
  return (
    <main className="main">
      <div className="box">
        <div className="background-images"></div>
        <img
          src={illustrationbox1}
          className="illusion-box"
          alt="background-img"
        ></img>
        {/* question box */}
        <div className="question-container">
          <h2>FAQ</h2>
          {data.map((element, key) => {
            return (
              <Questions question={element.question} answer={element.answer} />
            )
          })}
        </div>
      </div>
    </main>
  )
}

export default App
