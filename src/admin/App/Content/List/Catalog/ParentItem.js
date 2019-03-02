import React from 'react'
import ListItem from '@material-ui/core/ListItem'
import ListItemText from '@material-ui/core/ListItemText'
import Add from '@material-ui/icons/Add'
import Remove from '@material-ui/icons/Remove'
import InsertedList from './InsertedList'
import DelBatton from '../DelBatton'

const ParentItem = props => { 

  const { 
    classes, state,
    toggleList, setCard,
    item: {id, parent, view, title},
    state: { [state.view]: { [id]: {open = false, items = {}} = {}}} 
  } = props,
  children = !!Object.keys(items).length
  
  return (
  	<div>
      <ListItem button className={classes.nested}>
        {open && children?<Remove onClick={() => toggleList(id, state.view)} />:null}
        {!open && children?<Add onClick={() => toggleList(id, state.view)}  />:null}
        <ListItemText inset 
          classes={{ inset: classes.listItemText }}
          primary={title}
          onClick={() => setCard(state.view, id, parent)}
        />
        {!children?<DelBatton {...props} />:null}
      </ListItem>
      {open?<InsertedList {...props} />:null}
    </div>
  )
}

export default ParentItem