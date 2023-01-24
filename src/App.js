import { useState } from "react";
import "./App.css";

function App() {
  const styles = {
    "flex-direction": "row",
    "justify-content": "center",
    "align-items": "stretch",
  };

  const { values, setValues } = useState(styles)

  const updateProperties = (e, property) => {
    const newValues ={...values}
    newValues[property]= e.target.value
    setValues(newValues);
  }

  return (
    <div>
      <h1>Flexbox magic</h1>
      {JSON.stringify(values)}
      <div className="demo-wrapper">
        <div className="demo-container">
          <div className="item one">one</div>
          <div className="item two">two</div>
          <div className="item three">three</div>
          <div className="item four">four</div>
          <div className="item five">five</div>
          <div className="y axis">cross axis</div>
          <div className="x axis">primary axis</div>
        </div>
      </div>

      <article>
        <span>Flex direction:</span>
        <select
          onChange={(e) => {
            updateProperties(e, "flex-direction");
          }}
        >
          <option value="row">Row</option>
          <option value="row-reverse">Row-Reverse</option>
          <option value="column">Column</option>
          <option value="column-reverse">Column-Reverse</option>
        </select>
      </article>

      <article>
        <span>Justify Content:</span>
        <select
          onChange={(e) => {
            updateProperties(e, "justify-content");
          }}>
          <option value="center">Center</option>
          <option value="start">Start</option>
          <option value="space-between">Space-Between</option>
          <option value="space-around">Space-Around</option>
          <option value="space-evenly">Space-Evenly</option>
        </select>
      </article>

      <article>
        <span>Align Items</span>
        <select
          onChange={(e) => {
            updateProperties(e, "align-items");
          }}>
          <option value="stretch">Stretch</option>
          <option value="start">Start</option>
          <option value="center">Center</option>
          <option value="end">End</option>
        </select>
      </article>
    </div>
  );
}

export default App;
