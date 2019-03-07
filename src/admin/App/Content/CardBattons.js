import React from 'react'
import DeleteIcon from '@material-ui/icons/Close'
import IconButton from '@material-ui/core/IconButton'
import Tooltip from '@material-ui/core/Tooltip'

const CardBattons = props => {

	const { classes, state, setList } = props

	return (
		<div className={classes.CardBattons}>
			<Tooltip title="Закрыть">
	      <IconButton onClick={() => setList(state.view)}>
	        <DeleteIcon />
	      </IconButton>
	    </Tooltip>
	   </div>
	)
}

export default CardBattons