import React from 'react'
import Paper from '@material-ui/core/Paper'
import List from './List'
import Catalog from './Catalog'
import Auction from './Auction'
import Module from './Module'

const Content = props => {

	const { classes, state, state: {[state.view]: { content: { view } }} } = props

	return (
		<Paper className={classes.contentPaper}>
			{view == 'list'?<List {...props} />:null}
			{view == 'catalog'?<Catalog {...props} />:null}
			{view == 'auction'?<Auction {...props} />:null}
			{view == 'module'?<Module {...props} />:null}
		</Paper>
	)
}

export default Content