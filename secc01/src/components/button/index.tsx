import { useEffect } from "react";

export const Button = (props) => {
  const { FuncionOp, dataSet, contador, FuncionCh } = props;

  useEffect(() => {
    if (contador > 1) {
      FuncionCh();
    }
  }, [contador]);

  const OnPress = () => {
    if (FuncionOp) {
      FuncionOp();
    }

    console.log({ dataSet });
  };

  const readableText = () => {
    return props.labelText ?? "";
  };

  return <button onClick={OnPress}>{readableText()}</button>;
};
