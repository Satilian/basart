import React from 'react'
import Tooltip from '@material-ui/core/Tooltip'
import IconButton from '@material-ui/core/IconButton'
import DeleteIcon from '@material-ui/icons/Delete'

const DelBatton = props => {

	const { classes, item, deletePage, state: { view } } = props

	return (
		<Tooltip title="Удалить">
      <IconButton 
      	className={classes.delButton} 
      	onClick={() => deletePage(item.id, item.view, view)}
      	aria-label="Удалить">
        <DeleteIcon />
      </IconButton>
    </Tooltip>
	)
}

export default DelBatton