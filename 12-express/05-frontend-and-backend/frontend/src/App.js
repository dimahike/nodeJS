import "./App.css";
import { useEffect, useState } from "react";

function App() {
  const [person, setPerson] = useState();

  useEffect(() => {
    fetch("http://127.0.0.1:5005")
      .then((res) => res.json())
      .then((data) => setPerson(data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className="App">
      {person && (
        <>
          <h1>{person.name}</h1>
          <h2>{person.isInstructor ? "Instructor" : "Student"}</h2>
        </>
      )}
    </div>
  );
}

export default App;
