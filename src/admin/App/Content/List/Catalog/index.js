import React from 'react'
import ListSubheader from '@material-ui/core/ListSubheader'
import List from '@material-ui/core/List'
import ParentItem from './ParentItem'
import AddDialog from './AddDialog'

const Catalog = props => {
	const { 
		classes, 
		state: { 
			catalog: { 8: {items = {}} = {} }
		}
	} = props

	return (
		<div>
			<List component="div" subheader={
				<ListSubheader component="div" className={classes.subheader}>
					Список категорий и лотов
					<AddDialog {...props} />
				</ListSubheader>
			}>
				{Object.keys(items).map(key =>
					<ParentItem {...props} key={items[key].id} item={items[key]} />)}
		  </List>
	  </div>
	)
}

export default Catalog