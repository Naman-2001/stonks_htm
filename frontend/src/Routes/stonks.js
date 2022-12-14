import React from "react";
import { Route, Switch } from "react-router-dom";
import Navbar from "../components/Navbar";
import Companies from "../Screens/Companies";
import Home from "../Screens/Home";
import HomeSearch from "../Screens/HomeSearch";
import Login from "../Screens/Login";
import StockInfo from "../Screens/StockInfo";
import ProofConcept from "../Screens/ProofConcept";
import Report from "../Screens/Report";
import Signup from "../Screens/Signup";
import Simulation from "../Screens/Simulation";

const Stonks = () => {
  return (
    <div>
      <Navbar />
      <Switch>
        <Route path="/stonks/stonk_news" component={Home} />
        <Route exact path="/stonks" component={Home} />
        <Route exact path="/" component={Home} />
        <Route path="/stonks/search/:entity" component={HomeSearch} />
        <Route exact path="/stonks/companies" component={Companies} />

        <Route path="/stonks/report" component={Report} />
        <Route path="/stonks/proofofconcept" component={ProofConcept} />
        <Route path="/stonks/stock_info/:company" component={StockInfo} />
        <Route path="/stonks/simulation" component={Simulation} />
      </Switch>
    </div>
  );
};

export default Stonks;
