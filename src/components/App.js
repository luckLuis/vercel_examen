import { Row } from "antd";
import "../styles/App.css";
import { BrowserRouter as Router } from "react-router-dom";
import Present from "./Present";
import GiveAdvice from "./GiveAdvice";

function App() {
  return (
    <Router>
      <Row>
        {" "}
        <GiveAdvice />{" "}
      </Row>
      <Row>
        {" "}
        <Present />{" "}
      </Row>
    </Router>
  );
}

export default App;
