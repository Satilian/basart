import React from 'react'
import ListItem from '@material-ui/core/ListItem'
import ListItemText from '@material-ui/core/ListItemText'
import Input from '@material-ui/core/Input'
import DelBatton from '../DelBatton'

const Item = props => {

  const { 
    classes, state, setCard,
    item: { id, parent, title }
  } = props

  return (
  	<div>
  		<ListItem button className={classes.nested}>
        <ListItemText inset
        	primary={title} 
        	onClick={() => setCard(state.view, id, parent)}
        />
        <DelBatton {...props} />
      </ListItem>
    </div>
  )
}

export default Item