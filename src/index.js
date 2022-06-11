import React from 'react';
import ReactDOM from 'react-dom/client';
import reportWebVitals from './reportWebVitals';
import { applyMiddleware, compose, createStore } from "redux";
import { Provider} from "react-redux";
import { createLogger } from 'redux-logger';
import thunk from "redux-thunk";
import { BrowserRouter as Router, Route, Routes, Navigate, Switch } from "react-router-dom";

import "bootstrap/dist/css/bootstrap.css";
import AppRoutes from './AppRoutes';
import AppFccWeather from './FCCWeather/AppFccWeather';
import ReducerRecipe from './RecipeBox/ReducerRecipe';
import { combineReducers } from 'redux';

const saveState = (listRecipes) => {
  console.log(listRecipes)
  try {
    const listRecipesString = JSON.stringify(listRecipes);
    localStorage.setItem('listRecipes', listRecipesString);
  } catch(err) {
    console.log(err);
  }
};

const logger = createLogger({
});

const store = createStore(
  combineReducers({
    recipes: ReducerRecipe
  }),
  compose(
    applyMiddleware(logger, thunk),
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )
);

store.subscribe(() => {
  saveState(store.getState().recipes.listRecipes);
});

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={ store }>
      <AppRoutes />
    </Provider>  
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
