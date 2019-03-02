import React from 'react'
import ListItem from '@material-ui/core/ListItem'
import ListItemText from '@material-ui/core/ListItemText'

const Item = props => {

  const { 
    classes, state, setCard,
    item: { id, title }
  } = props

  return (
  	<div>
  		<ListItem button className={classes.nested}>
        <ListItemText
        	primary={title} 
        	onClick={() => setCard(state.view, id)}
        />
      </ListItem>
    </div>
  )
}

export default Item