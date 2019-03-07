import React from 'react'
import { withStyles } from '@material-ui/core/styles'
import IconButton from '@material-ui/core/IconButton'
import Tooltip from '@material-ui/core/Tooltip'
import AddAPhoto from '@material-ui/icons/AddAPhoto'
import DeleteForever from '@material-ui/icons/DeleteForever'

const styles = {
  input: {
    display: 'none'
  },
  butWrapper: {
    margin: '.5rem',
    lineHeight: '5rem',
    width: '5rem',
    textAlign: 'center',
    cursor: 'pointer',
    border: '1px solid #ddd',
    borderRadius: '3px',
    float:'left',
    position: 'relative'
  },
  button: {
  	width: 78,
  	height: 78,
  	borderRadius: 0
  },
  butIcon: {
  	fontSize: 78
  },

  imgWrapper: {
    margin: '.5rem',
    maxWidth: '448px',
    position: 'relative',
    float: 'left',
  },
  image: {
    width: '100%'
  },
  imgButton: {
  	position: 'absolute',
  	left: -10,
  	top: -10
  },
  imgIcon: {
    color: 'red'
  }
}

const ImageField = props => {
	var { classes, id, image = false, onLoad, onDelet, input } = props

	return (
		<div>
			{image
				? (<div className={classes.imgWrapper}>
				    <img className={classes.image} src={`/img/module/${id}/thumb_${image}`} />
				    <Tooltip title="Удалить фото">
					    <IconButton 
					    	className={classes.imgButton}
					    	onClick={() => onDelet(image)}
					    >
					    	<DeleteForever className={classes.imgIcon} />
					    </IconButton>
				    </Tooltip>
				  </div>)
				: (<div className={classes.butWrapper}>
				    <input
				      onChange={({target}) => onLoad(target.files[0])}
				      ref={node => input = node} 
				      className={classes.input}
				      accept="image/*"
				      type="file"/>
				    <Tooltip title="Добавить фото">
				      <IconButton
				        className={classes.button} 
				        onClick={() => input.click()}
				      >
				        <AddAPhoto className={classes.butIcon}  />
				      </IconButton>
				     </Tooltip>
				  </div>)
			}
		</div>
	)
}

export default withStyles(styles)(ImageField)