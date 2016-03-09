import React from 'react';
import ReactDOM from 'react-dom';
import { kGlobalConstants } from './GlobalConstants.js';
import { Router, Route, Link, hashHistory } from 'react-router'
import Request from 'superagent';
import LoginPage from './components/login/LoginPage.jsx';
import RegistrationPage from './components/registration/RegistrationPage.jsx';
import RegisterTokenPage from './components/registration/RegisterTokenPage.jsx';
import ResetPasswordTokenPage from './components/forgotPassword/ResetPasswordTokenPage.jsx';
import CompleteRegistrationComponent from './components/registration/ConfirmCodeComponent.jsx';
import ForgotPasswordPage from './components/forgotPassword/ForgotPasswordPage.jsx';
import LandingPage from './components/landing/LandingPage.jsx';
import AddDataPage from './components/addData/AddDataPage.jsx';
import ReviewDataPage from './components/addData/ReviewDataPage.jsx';
import AdminPage from './components/admin/AdminPage.jsx';
import {SetUserData,LogOutUser} from './actions/UserActions.js';
import {UserSession,InitialUserSession} from './stores/UserSession.js';
import { Provider } from 'react-redux'
import { createStore } from 'redux'


let store = createStore(UserSession,InitialUserSession);

const documentLocation = document.getElementById('app');


const checkAdminPermissions = (nextState, replace) => {
  //TODO Add check For Permissions
}

const checkUserPermissions = (nextState, replace) => {
  //TODO Add check For User Permissions
}

const redirectIfLogin = (nextState, replace) => {
   //TODO Add check For User Permissions

}

const debugRoute = (nextState,replace) => {

}


Class App extends React.Component {

    componentDidMount() {
        this.sessionCheckTimer = setInterval(() => {
              this.sendSessionRequest();
        },
        20*1000
      );
      this.sendSessionRequest();
    }

    componentWillUnmount() {
        //ensures timer will unmount
        clearInterval(this.sessionCheckTimer);
    }

    sendSessionRequest(){
    Request.post(kGlobalConstants.API + 'get_status/')
        .withCredentials()
        .send({ 'status': 'awaiting_approval' })
        .end((err, res) => {
            if (err) {
                this['context'].setState({ loaded: true });
            } else {
                let users = res.body.users;
                let userArray = [];

                for (var user of users) {
                    userArray.push(Object.keys(user).map(function(k) { return user[k] }));
                    userArray[userArray.length-1].push(<AdminPageButton name="Approve" newStatus="approved" user={user} context={this} />);
                    userArray[userArray.length-1].push(<AdminPageButton name="Deny" newStatus="denied" user={user} context={this} />);
                }

                this.setState({ users: userArray, loaded: true });
            }
        });

    }

    componentWillUnmout() {
      this.sendSessionRequest()
    }

    render() {
        return (
          <div>{this.props.children}</div>
        );
    }
}

ReactDOM.render((
  <Provider store={store}>
    <Router history={hashHistory}>
        <Route component={App} path="/">
          <Route path="login" component={LoginPage} onEnter={checkAdminPermissions}/>
          <Route path="admin" component={AdminPage} onEnter={checkAdminPermissions}/>
          <Route path="landing" component={LandingPage} />
          <Route path="addData" component={AddDataPage} onEnter={checkUserPermissions} />
          <Route path="reviewData" component={ReviewDataPage} />
          <Route path="reviewData/:subID" component={ReviewDataPage} />
          <Route path="forgotpassword" component={ForgotPasswordPage} />
          <Route path="forgotpassword/:token" component={ResetPasswordTokenPage} />
          <Route path="registration" component={RegistrationPage} />
          <Route path="registration/:token" component={RegisterTokenPage} />
          <Route path="*" component={LoginPage} onEnter={debugRoute}/>
        </route>
    </Router>
  </Provider>
), documentLocation)
