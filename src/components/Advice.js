import React, { useState } from "react";
import { Button } from "antd";
import { SearchOutlined } from "@ant-design/icons";

const Advice = ({ advice, isLoading, changeAdvice }) => {
  const [advices, setAdvices] = useState([]);

  const handleFavorite = () => {
    if (advices === []) {
      setAdvices(advices);
    } else {
      setAdvices([...advices, advice]);
    }
  };

  const handleRemoveAdv = (index) => {
    setAdvices((prevState) => {
      return prevState.filter((task, i) => i !== index);
    });
  };

  console.log("Advices", advices);

  return (
    <div className="ant-row">
      <div className="ant-col">
        <h1 className="align">Consejo del día</h1>

        {isLoading ? (
          <h3 className="margin">Cargando...</h3>
        ) : (
          <h2 className="margin">{advice}</h2>
        )}

        <td>
          <Button
            className="spaces_2"
            type="primary"
            onClick={() => handleFavorite()}
          >
            Marcar como favorito
          </Button>
        </td>
        <td>
          <Button
            type="primary"
            className={`button ${isLoading ? "d-none" : ""}`}
            onClick={changeAdvice}
            icon={<SearchOutlined />}
          >
            Siguiente consejo
          </Button>
        </td>
      </div>

      <div className="ant-col">
        <div>
          <h1 className="align">Consejos favoritos</h1>
        </div>
        <div>
          <table>
            <tbody>
              {advices.map((task, index) => {
                if (task) {
                  return (
                    <tr key={index}>
                      <td>{task}</td>
                      <td>
                        <Button
                          type="primary"
                          className="spaces"
                          onClick={() => handleRemoveAdv(index)}
                        >
                          Eliminar
                        </Button>
                      </td>
                    </tr>
                  );
                }
                else {
                  return(<p>Error</p>);
                }
              })}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Advice;
