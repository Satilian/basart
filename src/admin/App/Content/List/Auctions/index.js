import React from 'react'
import ListSubheader from '@material-ui/core/ListSubheader'
import List from '@material-ui/core/List'
import Item from './Item'
import AddDialog from './AddDialog'

const Auctions = props => {

	const { 
		classes, 
		state: { auctions: { items } = {} } = {}
	} = props

	return (
		<div>
	   	<List component="nav" subheader={
	   		<ListSubheader component="div" className={classes.subheader}>
	   			Список аукционов
   				<AddDialog {...props} />
	   		</ListSubheader>
	 		}>
	      {items.map(item => (
					<Item key={item.id} item={item} {...props} />
				))}
	    </List>
	  </div>
	)
}

export default Auctions