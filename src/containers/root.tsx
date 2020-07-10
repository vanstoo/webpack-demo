import * as React from 'react'
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom'
import Home from './home'
import 'antd/dist/antd.less'

export default class App extends React.Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route path={`/home`} component={Home} />
          <Redirect from="" to="/home" />
        </Switch>
      </Router>
    )
  }
}
