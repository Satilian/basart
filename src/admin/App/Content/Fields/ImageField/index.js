import React, { Component } from 'react'
import { withStyles } from '@material-ui/core/styles'
import AddButton from './AddButton'
import Preview from './Preview'

const styles = {
  imageRoot: {
    display: 'flex'
  }
}

const ImageField = ({ classes, images, itemId, uploadImage, delImage }) => (
	<div className={classes.imageRoot}>
    <div>
      {images.map(img => 
        <Preview key={img} name={img} id={itemId} delImage={delImage} />
      )}
    </div>
    <AddButton uploadImage={uploadImage} />
  </div>
)

export default withStyles(styles)(ImageField)