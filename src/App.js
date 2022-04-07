import { useState } from "react";
import "./App.css";

const questions = [
  {
    text: "Is the car silent when you turn the key?",
    yes: "corroded",
    no: "clicking",
  },
  {
    text: "Are the battery terminals corroded?",
    yes: "clean",
    no: "cables",
    id: "corroded",
  },
  {
    text: "Does the car make a clicking noise?",
    yes: "battery",
    no: "crank",
    id: "clicking",
  },
  {
    text: "Does the car crank up but fail to start?",
    yes: "spark",
    no: "engine",
    id: "crank",
  },
  {
    text: "Does the engine start and then die?",
    yes: "injection",
    no: "answer",
    id: "engine",
  },
  {
    text: "No more questions here.",
    id: "answer",
  },
  {
    text: "Does your car have fuel injection?",
    yes: "choke",
    no: "service",
    id: "injection",
  },
  { text: "Clean terminals and try starting again.", id: "clean" },
  { text: "Replace cables and try again.", id: "cables" },
  { text: "Replace the battery.", id: "battery" },
  { text: "Check spark plug connections.", id: "spark" },
  { text: "Get it in for service.", id: "service" },
  { text: "Check to ensure the choke is opening and closing.", id: "choke" },
];

function App() {
  const [answer, setAnswer] = useState(questions[0]);
  const [toggle, setToggle] = useState(false);

  function handleClick(decision) {
    if (decision === true) {
      const getAdviceY = questions.find(
        (question) => question.id === answer.yes
      );
      setAnswer(getAdviceY);
      const getOtherAdvice = !getAdviceY.hasOwnProperty("yes");
      if (getOtherAdvice) {
        setToggle(true);
      }
    }

    if (decision === false) {
      const getAdviceN = questions.find(
        (question) => question.id === answer.no
      );
      setAnswer(getAdviceN);
      const getOtherAdvice = getAdviceN.hasOwnProperty("no");
      if (!getOtherAdvice) {
        setToggle(true);
      }
    }
  }

  return (
    <div className="App">
      <h2 id="top-q">{answer.text}</h2>
      <div className="container">
        <div className="side">
          <button id="left" disabled={toggle} onClick={() => handleClick(true)}>
            Yes
          </button>
        </div>
        <div className="side">
          <button id="right" disabled={toggle}onClick={() => handleClick(false)}>
            No
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
