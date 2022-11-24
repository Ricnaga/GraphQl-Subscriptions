import React from "react";
import { Route, Routes } from "react-router-dom";
import { Hello } from "../pages/Hello";
import { LazyQueries } from "../pages/LazyQueries";
import { Mutations } from "../pages/Mutations";
import { Queries } from "../pages/Queries";
import { Subscriptions } from "../pages/Subscriptions";
import {
  HELLO,
  LAZYQUERIES,
  MUTATIONS,
  QUERIES,
  SUBSCRIPTIONS,
} from "./route-paths";

export function RoutesPages() {
  return (
    <Routes>
      <Route path={HELLO} element={<Hello />} />
      <Route path={SUBSCRIPTIONS} element={<Subscriptions />} />
      <Route path={MUTATIONS} element={<Mutations />} />
      <Route path={QUERIES} element={<Queries />} />
      <Route path={LAZYQUERIES} element={<LazyQueries />} />
    </Routes>
  );
}
