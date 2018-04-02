import React, { Component } from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {getQuran} from '../actions';

import Sidebar from '../components/Sidebar';
import Content from '../components/Content';

class App extends Component {
  componentDidMount() {
    this.props.getQuran();
  }

  render() {
    return (
      <div className="App h-100">
        <div className="container h-100">
          <div className="row justify-content-md-center h-100 align-items-center">
            <div className="col-md-8">
              <div className="main">
                <div className="row no-gutters">
                  <Sidebar />
                  <Content />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({getQuran}, dispatch);
}

export default connect(null, mapDispatchToProps)(App);
