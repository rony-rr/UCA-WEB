import { useState } from "react";
import "./App.css";
import { Button } from "./components/button";
import { data } from "./data";

function App() {
  const [count, setCount] = useState(0);
  const [data2, setData2] = useState(data);

  function PostOp() {
    setCount(count + 1);
  }

  const ChangeArray = () => {
    const arrTmp = data2;
    setData2([...arrTmp, ...arrTmp]);
  };

  return (
    <>
      <Button
        contador={count}
        labelText={`Veces que se presiono el botón de conteo: ${count}`}
        FuncionOp={() => PostOp()}
        dataSet={data2}
        FuncionCh={ChangeArray}
      />
    </>
  );
}

export default App;
