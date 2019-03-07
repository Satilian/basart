import React from 'react'
import ListSubheader from '@material-ui/core/ListSubheader'
import List from '@material-ui/core/List'
import CardBattons from '../CardBattons'
import Item from './Item'

const ModList = props => {
	const {
		classes, 
		state: {
			modules: { content: { item: { data, title }}}
		}
	} = props

	return (
		<List component="nav" subheader={
   		<ListSubheader component="div" className={classes.subheader}>
   			{title}
   			<div className={classes.modListButton}>
					<CardBattons {...props} />
				</div>
   		</ListSubheader>
 		}>
      {data.map((item, i) => {
      	item.id = i
      	return (<Item key={i} item={item} {...props} />)
      })}
    </List>
	)
}

export default ModList