import React from "react";
import { Redirect, Route, Switch } from "react-router-dom";
import Add from "./Tabs/Add";

const Tab = ({ data, tabs, places, setPlaces, setPlaceIndex }) => {
  return (
    <Switch>
      {tabs.map((tab) => {
        const Component = tab[1];
        return (
          <Route key={tab[0]} path={`/${tab[0]}`}>
            <Component data={data} />
          </Route>
        );
      })}
      <Route path="/Add">
        <Add
          places={places}
          setPlaces={setPlaces}
          setPlaceIndex={setPlaceIndex}
        />
      </Route>
      <Route path="*">
        <Redirect to={tabs[0][0]} />
      </Route>
    </Switch>
  );
};

export default Tab;
