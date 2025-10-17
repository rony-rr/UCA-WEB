import { useEffect } from "react";

export const ButtonGerardo = (props) => {
  const { countValue, fnChange, dataSet, data, setDataSet } = props;

  function onPress() {
    if (fnChange) {
      fnChange();
      return;
    }

    alert("No hay nada por hacer!");
  }

  useEffect(() => {
    if (countValue > 1) {
      setDataSet([...dataSet, ...data]);
    }
  }, [countValue]);

  console.log({ dataSet });

  return (
    <button
      onClick={onPress}
    >{`Este botón ha sido presionado: ${countValue}`}</button>
  );
};
