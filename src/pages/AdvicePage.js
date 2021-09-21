import { Route, Switch, useRouteMatch } from "react-router-dom";
import Present from "../components/Present";
import GiveAdvice from "../components/GiveAdvice";

const AdvicePage = () => {
  let match = useRouteMatch();

  console.log("match", match);

  return (
    <>
      <Switch>
        <Route path={match.path}>
          <Present />
        </Route>

        <Route path={match.path}>
          <GiveAdvice />
        </Route>
      </Switch>
    </>
  );
};

export default AdvicePage;
