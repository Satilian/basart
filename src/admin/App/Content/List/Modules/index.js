import React from 'react'
import ListSubheader from '@material-ui/core/ListSubheader'
import List from '@material-ui/core/List'
import Item from './Item'

const Modules = props => {

	const { 
		classes, 
		state: { modules: { items = [] } = {} } = {}
	} = props

	return (
		<div>
	   	<List component="nav" subheader={
	   		<ListSubheader component="div" className={classes.subheader}>
	   			Список модулей
	   		</ListSubheader>
	 		}>
	      {items.map(item => (
					<Item key={item.id} item={item} {...props} />
				))}
	    </List>
	  </div>
	)
}

export default Modules