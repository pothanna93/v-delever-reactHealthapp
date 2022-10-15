import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Component } from "react";
import React from "react";
import ValueContext from "./Context/ValueContext";

import DoctorsPage from "./components/DoctorsPage";
import MedicinesPage from "./components/MedicinesPage";
import LabTests from "./components/LabTests";
import HomePage from "./components/HomePage";
import Header from "./components/Header";
import "./App.css";

class App extends Component {
  state = {
    listItems: [],
  };

  onClickSlotBook = (product) => {
    this.setState((prevState) => ({
      listItems: [...prevState.listItems, product],
    }));
  };

  render() {
    const { listItems } = this.state;

    return (
      <React.Fragment>
        <BrowserRouter>
          <ValueContext.Provider
            value={{
              listItems,
              onClickSlotBook: this.onClickSlotBook,
            }}
          >
            <Routes>
              <Route exact path="/" element={<HomePage />}></Route>
              <Route
                exact
                path="/consultation"
                element={<DoctorsPage />}
              ></Route>
              <Route
                exact
                path="/medicines"
                element={<MedicinesPage />}
              ></Route>
              <Route exact path="/labs" element={<LabTests />}></Route>
            </Routes>
          </ValueContext.Provider>
        </BrowserRouter>
      </React.Fragment>
    );
  }
}

export default App;
