import React from 'react'
import List from '@material-ui/core/List'
import Collapse from '@material-ui/core/Collapse'
import ParentItem from './ParentItem'
import Item from './Item'

const InsertedList = props => {

	const { classes, state,
		item: { id }, dispatch,
		state: { [state.view]: { [id]: { items, open }}} 
	} = props

	return (
		<Collapse in={open} 
			timeout="auto" 
			unmountOnExit 
			className={classes.collapse}
		>
			<List component="div">
				{Object.keys(items).map(key => (
					items[key].view == 'category'
						? <ParentItem {...props} key={items[key].id} item={items[key]} />
						: <Item {...props} key={items[key].id} item={items[key]} />
				))}
			</List>
		</Collapse>
	)
}


export default InsertedList