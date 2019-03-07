import React from 'react'
import MAppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button'
import IconButton from '@material-ui/core/IconButton'
import MenuIcon from '@material-ui/icons/Menu'

const AppBar = props => {
  const { classes } = props
  return (
    <div className={classes.root}>
      <MAppBar position="static">
        <Toolbar>
          <IconButton className={classes.menuButton} color="inherit" aria-label="Menu">
            <MenuIcon />
          </IconButton>
          <Typography variant="title" color="inherit" className={classes.flex}>
            Панель администратора
          </Typography>
          <a href="/" className={classes.link}>
          	<Button color="inherit">Перейти на сайт</Button>
          </a>
        </Toolbar>
      </MAppBar>
    </div>
  )
}

export default AppBar