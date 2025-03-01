// import Header from "./components/Header";
// import Main from "./components/Main";

import { useEffect, useState } from "react";

export default function App() {
  const [starWarsData, setStarWarsData] = useState(null);
  const [count, setCount] = useState(1);

  useEffect(() => {
    console.log('rendered');
    fetch(`https://swapi.dev/api/people/${count}`)
      .then((res) => res.json())
      .then((data) => setStarWarsData(data))
      .catch((error) => console.error("Error fetching data:", error));
  }, [count]);

  return (
    <div>
      <p>count is {count}</p>
      <button onClick={() => setCount((old) => old + 1)}>Add</button>
      {starWarsData ? (
        <pre>{JSON.stringify(starWarsData, null, 2)}</pre>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}
