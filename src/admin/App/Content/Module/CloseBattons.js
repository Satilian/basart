import React from 'react'
import DeleteIcon from '@material-ui/icons/Close'
import IconButton from '@material-ui/core/IconButton'
import Tooltip from '@material-ui/core/Tooltip'

const CloseBattons = props => {

	const { classes, state, setModView } = props

	return (
		<div className={classes.CardBattons}>
			<Tooltip title="Закрыть">
	      <IconButton onClick={() => setModView('list')}>
	        <DeleteIcon />
	      </IconButton>
	    </Tooltip>
	   </div>
	)
}

export default CloseBattons