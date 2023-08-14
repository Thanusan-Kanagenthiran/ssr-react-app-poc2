import React from "react";
import Posts from "./components/Posts";

const AppServer = () => {
  const names = ["John", "Jane", "Jack"];

  return (
    <div>
      <h1>React SSR</h1>
      <img
        src="logo.svg"
        className="App-logo"
        alt="logo"
        width="200"
        height="200"
      />
      <ul>
        {names.map((name) => (
          <li key={name}>{name}</li>
        ))}
      </ul>

      <Posts />
    </div>
  );
};

export default AppServer;
