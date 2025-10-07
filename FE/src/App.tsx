import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

const ListItem = (props) => {
  const { element } = props;
  return (
    <div id={`data_${element.id}`}>
      <div
        style={
          element.isActive
            ? {
                backgroundColor: "rgba(64, 204, 57, 1)",
                width: "100%",
                height: 20,
              }
            : {
                backgroundColor: "rgba(190, 13, 13, 1)",
                width: "100%",
                height: 20,
              }
        }
      />
      <p>{element.name}</p>
      <p>{element.gender}</p>
      <p>{element.age}</p>
      <img src={element.picture} />
    </div>
  );
};

function App() {
  const [dataSet, setDataSet] = useState([]);

  const extract = async () => {
    const res = await fetch("http://localhost:3001/findUsers");
    const parsedRes = await res.json();

    setDataSet(parsedRes);
  };

  const LIST = dataSet.length
    ? dataSet.map((el) => {
        return <ListItem element={el} />;
      })
    : null;

  return (
    <>
      <h1>List de elementos</h1>
      <section>{LIST}</section>
      <div className="card">
        <button onClick={extract}>Recuperar datos</button>
      </div>
    </>
  );
}

export default App;
