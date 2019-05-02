import React from 'react';
import { Router, Route } from 'react-router-dom';
import { connect } from 'react-redux';
import { history } from '../../helpers';
import { alertActions } from '../../actions'
import Authenticate from '../Authenticate/Authenticate';
import PrivateRoute from '../PrivateRoute/PrivateRoute';
import DashBoard from '../DashBoard/DashBoard';
import { Layout } from 'antd';

import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props);

    const { dispatch } = this.props;
    history.listen((location, action) => {
      // clear alert on location change
      dispatch(alertActions.clear());
    });
  }

  render() {
    const { alert } = this.props;
    return (
      <Layout className="codefen-app">
        {alert.message &&
          <div className={`alert ${alert.type}`}>{alert.message}</div>
        }
        <Router history={history}>
            <PrivateRoute exact path="/" component={DashBoard} />
            <Route path="/authenticate" component={Authenticate} />
        </Router>
      </Layout>
    )
  }
}


function mapStateToProps(state) {
  const { alert } = state;
  return {
      alert
  };
}

const connectedApp = connect(mapStateToProps)(App);
export { connectedApp as App }; 