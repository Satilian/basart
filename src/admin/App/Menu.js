import React from 'react'
import MenuList from '@material-ui/core/MenuList'
import MenuItem from '@material-ui/core/MenuItem'
import ListItemIcon from '@material-ui/core/ListItemIcon'
import ListItemText from '@material-ui/core/ListItemText'
import DraftsIcon from '@material-ui/icons/Drafts'
import SendIcon from '@material-ui/icons/Send'

const Menu = props => {
  const { classes, state: { view }, setList } = props

  return (
    <MenuList className={classes.menuRoot}>
      <MenuItem className={view == 'catalog'?classes.menuItem:''}>
        <ListItemIcon className={classes.icon}>
          <SendIcon />
        </ListItemIcon>
        <ListItemText 
          classes={{ primary: classes.primary }} 
          inset primary="Категории и лоты" 
          onClick={() => setList('catalog') }
        />
      </MenuItem>
      <MenuItem className={view == 'modules'?classes.menuItem:''}>
        <ListItemIcon className={classes.icon}>
          <DraftsIcon />
        </ListItemIcon>
        <ListItemText 
          classes={{ primary: classes.primary }} 
          inset primary="Модули" 
          onClick={() => setList('modules') }
        />
      </MenuItem>
    </MenuList>
  )
}

export default Menu