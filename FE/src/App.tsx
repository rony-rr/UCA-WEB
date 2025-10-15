import { useMemo, useState } from "react";
import "./App.css";

const ListItem = (props) => {
  console.log({ props });
  const { element } = props;
  return (
    <div
      id={`data_${element.id}`}
      style={{
        borderBottom: "solid 1px #2e1ebaff",
        marginBottom: 10,
      }}
    >
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

  const extractData = async () => {
    const res = await fetch("http://localhost:3001/findUsers");
    const parsedRes = await res.json();
    if (!parsedRes.status) return;

    setDataSet(parsedRes.data);
  };

  const LIST = useMemo(() => {
    return dataSet.length > 0
      ? dataSet.map((el) => <ListItem element={el} />)
      : null;
  }, [dataSet]);

  return (
    <>
      <h1>Lista de elementos</h1>
      <section
        style={{
          display: "flex",
          flexDirection: "column",
          width: "100%",
          height: "25vh",
          overflowY: "scroll",
          border: "solid 2px #dacdcdff",
          borderRadius: 5,
          padding: 5,
        }}
      >
        {LIST}
      </section>
      <div className="card">
        <button onClick={extractData}>Recuperar datos</button>
      </div>
    </>
  );
}

export default App;
