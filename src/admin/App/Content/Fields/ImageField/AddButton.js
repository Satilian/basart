import React from 'react'
import { withStyles } from '@material-ui/core/styles'
import IconButton from '@material-ui/core/IconButton'
import Tooltip from '@material-ui/core/Tooltip'
import AddAPhoto from '@material-ui/icons/AddAPhoto'

const styles = {
  input: {
    display: 'none'
  },
  wrapper: {
    margin: '.5rem',
    lineHeight: '5rem',
    width: '5rem',
    height: '5rem',
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
  icon: {
  	fontSize: 78
  }
}

const AddButton = ({ classes, uploadImage, input }) => (
  <div className={classes.wrapper}>
    <input
      onChange={({target}) => uploadImage(target.files[0])}
      ref={node => input = node} 
      className={classes.input}
      accept="image/*"
      type="file"/>
    <Tooltip title="Добавить фото">
      <IconButton
        className={classes.button} 
        onClick={() => input.click()}
      >
        <AddAPhoto className={classes.icon}  />
      </IconButton>
     </Tooltip>
  </div>
)

export default withStyles(styles)(AddButton)