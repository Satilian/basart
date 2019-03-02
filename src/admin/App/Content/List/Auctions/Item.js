import React from 'react'
import ListItem from '@material-ui/core/ListItem'
import ListItemText from '@material-ui/core/ListItemText'
import Input from '@material-ui/core/Input'
import DelBatton from '../DelBatton'

const Item = props => {

  const { 
    classes, state, setCard,
    item: { id, title, auction: { num } }
  } = props

  return (
  	<div>
  		<ListItem button className={classes.nested}>
        <ListItemText
        	primary={`№ ${num} | ${title}`} 
        	onClick={() => setCard(state.view, id)}
        />
        <DelBatton {...props} />
      </ListItem>
    </div>
  )
}

export default Item