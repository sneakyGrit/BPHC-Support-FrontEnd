import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
// import { getProblems } from "./actions/problems";
import { Route, Switch } from "react-router-dom";
import useStyles from "./App.styles";
import Sidebar from "./components/Sidebar/Sidebar";

//Pages
import Notices from "./components/MainView/Notices/Notices";
import Account from "./components/MainView/Page/Account";
import Complaint from "./components/MainView/Complaints/Form";
import History from "./components/MainView/Complaints/Complaints";
import Login from "./components/Auth/Login";
import Header from "./components/Header/Header";
import AddNotices from "./components/Admin/AddNotices/AddNotices";
import { fetchProblems } from "./redux/problemActions";
function App() {
  const classes = useStyles();

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchProblems());
  }, [dispatch]);

  return (
    <div className={classes.App}>
      <Switch>
        <Route exact path="/about">
          <Sidebar type="student" />
          <div className={classes.MainView}>
            <Header />
            <AddNotices />
          </div>
        </Route>
        <Route exact path="/login">
          <div className={classes.Login}>
            <Login />
          </div>
        </Route>
        <Route exact path="/history">
          <Sidebar type="student" />
          <div className={classes.MainView}>
            <Header title="History" />
            <History />
          </div>
        </Route>
        <Route exact path="/profile">
          <Sidebar type="student" />
          <div className={classes.MainView}>
            <Header title="Profile" />
            <Account />
          </div>
        </Route>
        <Route exact path="/complaint">
          <Sidebar type="student" />
          <div className={classes.MainView}>
            <Header title="Complaint" />
            <Complaint />
          </div>
        </Route>
        <Route exact path="/">
          <Sidebar type="student" />
          <div className={classes.MainView}>
            <Header title="Notices" />
            <Notices />
          </div>
        </Route>
        <Route exact path="/admin">
          <Sidebar type="admin" />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
