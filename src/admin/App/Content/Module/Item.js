import React from 'react'
import ListItem from '@material-ui/core/ListItem'
import ListItemText from '@material-ui/core/ListItemText'

const Item = props => {

  const { 
    classes, item, setModView,
    state: {
      modules: { content: { item: { view }}}
    }
  } = props

  return (
  	<div>
  		<ListItem button className={classes.nested}>
        <ListItemText
        	primary={item.title} 
        	onClick={() => setModView(view, item)}
        />
      </ListItem>
    </div>
  )
}

export default Item