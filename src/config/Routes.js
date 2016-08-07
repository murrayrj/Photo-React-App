import React from "react";
import PhotoListContainer from "../components/PhotoListContainer";
import { Route, IndexRoute } from 'react-router';

const Routes = (
  <Route path="/" component={PhotoListContainer}>
  </Route>
);

export default Routes;