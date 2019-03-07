import React from 'react'
import { withStyles } from '@material-ui/core/styles'
import IconButton from '@material-ui/core/IconButton'
import Tooltip from '@material-ui/core/Tooltip'
import DeleteForever from '@material-ui/icons/DeleteForever'

const styles = {
	wrapper: {
    margin: '.5rem',
    maxHeight: '5rem',
    position: 'relative',
    float: 'left',
  },
  image: {
    height: '100%'
  },
  button: {
  	position: 'absolute',
  	left: -10,
  	top: -10
  },
  icon: {
    color: 'red'
  }
}

const Preview = ({ classes, name, id, delImage }) => (
	<div className={classes.wrapper}>
    <img className={classes.image} src={`/img/lots/${id}/${name}`} title={name} />
    <Tooltip title="Удалить фото">
	    <IconButton 
	    	className={classes.button}
	    	onClick={() => delImage(name)}
	    >
	    	<DeleteForever className={classes.icon} />
	    </IconButton>
    </Tooltip>
  </div>
)

export default withStyles(styles)(Preview)