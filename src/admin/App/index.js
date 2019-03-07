import React from 'react'
import { connect } from 'react-redux'
import { withStyles } from '@material-ui/core/styles'
import CssBaseline from '@material-ui/core/CssBaseline'
import AppBar from './AppBar'
import Menu from './Menu'
import Content from './Content'
import styles from './styles'
import * as actions from '../actions'

const App = props => (
	<React.Fragment>
		<CssBaseline />
		<AppBar {...props} />
    <Menu {...props} />
    <Content {...props} />
 	</React.Fragment>
)

export default connect(
  state => ({ state }),
  dispatch => {
    var obj = {}
    for(let key in actions)
      obj[key] = (...params) => dispatch(actions[key](...params))
    return obj
  }
)(withStyles(styles)(App))