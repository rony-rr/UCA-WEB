import { useState } from "react";
import { ButtonGerardo } from "./components/Button";
import { data } from "./data";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);
  const [dataSet, setDataSet] = useState([]);

  const OpPlus = () => {
    setCount(count + 1);
  };

  return (
    <>
      <ButtonGerardo
        countValue={count}
        fnChange={OpPlus}
        dataSet={dataSet}
        setDataSet={setDataSet}
        data={data}
      />
    </>
  );
}

export default App;
