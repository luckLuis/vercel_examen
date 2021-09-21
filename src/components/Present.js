import React, { useEffect, useState } from "react";
import "../styles/App.css";
import { SearchOutlined } from "@ant-design/icons";
import { Button, Form, Input } from "antd";

function Present() {
  const [adviceList, setAdviceList] = useState([]);
  const [search, setSearch] = useState("");
  const [searchWord, setSearchWord] = useState("True");

  const url = `https://api.adviceslip.com/advice/search/${search}`;

  const getAdvice = async () => {
    try {
      const response = await fetch(url);
      const data = await response.json();
      if (!data.message) {
        setAdviceList(data.slips);
        setSearchWord("True");
      } else {
        setSearchWord("False");
      }
    } catch (error) {
      console.error(error);
    }
  };

  const onInputChange = (e) => {
    setSearch(e.target.value);
    console.log("response", e);
  };

  useEffect(() => {
    getAdvice();
  });

  console.log("datos", adviceList);

  if (adviceList === null) {
    return "Cargando datos...";
  }

  function checkResponse(data) {
    if (searchWord === "True") {
      return (
        <div>
          <table>
            <tbody>
              {data.map((task, index) => {
                if (task) {
                  return (
                    <tr key={index}>
                      <td>{task.advice}</td>
                      <td>
                        <Button type="primary" className="spaces">
                          Marcar como favorito
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
      );
    }
    return <p>Intenta con otra palabra</p>;
  }

  return (
    <div align="center">
      <h1 align="right" className="tam">
        Buscador de consejos
      </h1>

      <Form.Item
        className="aux"
        label="Palabra clave"
        name="clave"
        rules={[{ required: true, message: "Ingrese una palabra!" }]}
      >
        <Input type="text" value={search} onChange={onInputChange} />
        <div className="space">
          <Button type="primary" onClick={getAdvice} icon={<SearchOutlined />}>
            Buscar
          </Button>
        </div>
      </Form.Item>
      <div className="margin">{checkResponse(adviceList)}</div>
    </div>
  );
}

export default Present;
