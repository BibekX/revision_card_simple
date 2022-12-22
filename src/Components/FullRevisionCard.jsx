import React, { useState } from "react";

export default function FullRevisionCard() {
  const [data, setData] = useState([
    { name: "HTML", vote: 2 },
    { name: "CSS", vote: 1 },
    { name: "JavaScript", vote: 4 },
  ]);
  const [inputValue, setInputValue] = useState("");

  function increment(index) {
    setData((prevValue) => {
      let copyData = [...prevValue];
      copyData[index].vote++;
      return copyData;
    });
  }

  function decrement(index) {
    setData((prevValue) => {
      let copyData = [...prevValue];
      copyData[index].vote--;
      return copyData;
    });
  }

  function deleteItem(index) {
    setData((prevValue) => {
      let copyData = [...prevValue];
      copyData.splice(index, 1);
      return copyData;
    });
  }

  return (
    <div>
      {data.map((object, index) => (
        <div className="card" key={index}>
          <h1>{object.name}</h1>
          <h3>{object.vote}</h3>
          <button onClick={() => increment(index)}>+</button>
          <button onClick={() => decrement(index)}>-</button>

          <button onClick={() => deleteItem(index)}>Delete</button>
        </div>
      ))}
      <input
        type="text"
        placeholder="title"
        onChange={(event) => {
          setInputValue(event.target.value);
        }}
        value={inputValue}
      />
      <button
        onClick={() => {
          setData((prevValue) => [...prevValue, { name: inputValue, vote: 0 }]);
          setInputValue("");
        }}
      >
        Add Item
      </button>
    </div>
  );
}
