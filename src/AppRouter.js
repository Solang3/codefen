import { Route } from 'react-router-dom'
import React from 'react';
import Dashboard from "./components/Dashboard";

export default function AppRouter() {
  return (
    <main>
        <Route exact path='/' component={Dashboard}/>
    </main>
  );
}