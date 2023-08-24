import { useState } from "react";

export default function App() {
  const [price, setPrice] = useState(" ");
  const [percentage1, setPercentage1] = useState("");
  const [percentage2, setPercentage2] = useState("");
  const tip = price * ((percentage1 + percentage2) / 2 / 100);

  function handleReset() {
    setPrice("");
    setPercentage1("0");
    setPercentage2("0");
  }
  return (
    <div className="App">
      <Bill price={price} onChange={setPrice} />
      <Service persantage={percentage1} onSelect={setPercentage1}>
        How did you like the Service ?
      </Service>
      <Service persantage={percentage2} onSelect={setPercentage2}>
        How did friend like the service ?
      </Service>

      {price > 0 && (
        <>
          <Result price={price} tip={tip} />
          <Button onReset={handleReset} />
        </>
      )}
    </div>
  );
}

function Bill({ price, onChange }) {
  return (
    <div>
      <p>How much was the bill</p>
      <input
        type="text"
        placeholder="Bill value"
        value={price}
        onChange={(e) => onChange(Number(e.target.value))}
      ></input>
    </div>
  );
}

function Service({ children, persantage, onSelect }) {
  return (
    <div>
      <label>{children}</label>
      <select
        value={persantage}
        onChange={(e) => onSelect(Number(e.target.value))}
      >
        <option value="0">Dissatisfied (0%)</option>
        <option value="5"> It was okay (5%)</option>
        <option value="10">it was good (10%)</option>
        <option value="15">Absolutely amazing!(20%)</option>
      </select>
    </div>
  );
}

function Result({ price, tip }) {
  return (
    <div>
      <h3>
        you pay {price + tip} (${price} +$B {tip})
      </h3>
      ;
    </div>
  );
}
function Button({ onReset }) {
  return <button onClick={onReset}>reset</button>;
}
