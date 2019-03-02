import React from 'react'
import Button from '@material-ui/core/Button'
import AddIcon from '@material-ui/icons/Add'
import Tooltip from '@material-ui/core/Tooltip'
import Dialog from '@material-ui/core/Dialog'
import DialogActions from '@material-ui/core/DialogActions'
import DialogContent from '@material-ui/core/DialogContent'
import DialogTitle from '@material-ui/core/DialogTitle'
import TextField from '@material-ui/core/TextField'
import { SelectField } from '../../Fields'

export default class FormDialog extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      open: false
    }
    this.handleAdd = this.handleAdd.bind(this)
  }

  handleAdd() {
    var { title, num } = this.state
    if(title && num) {
      this.props.createAuctionPage(title, num)
      this.setState({ open: false })
    }
  }
  
  render() {
    const { classes } = this.props

    return (
      <div className={classes.addButtonWrapper}>
        <Tooltip title="Добавить">
          <Button variant="fab" color="primary" 
            aria-label="Add" 
            className={classes.addButton}
            onClick={() => this.setState({ open: true })}>
            <AddIcon />
          </Button>
        </Tooltip>
        <Dialog
          open={this.state.open}
          onClose={() => this.setState({ open: false })}
          aria-labelledby="form-dialog-title"
        >
          <DialogTitle id="form-dialog-title">Добавление</DialogTitle>
          <DialogContent>
            <TextField fullWidth
              onChange={({target}) => this.setState({ title: target.value })}
              label="Название аукциона" />
            <TextField fullWidth
              onChange={({target}) => this.setState({ num: target.value })}
              label="№ аукциона" />
          </DialogContent>
          <DialogActions>
            <Button onClick={() => this.setState({ open: false })} color="primary">
              Отмена
            </Button>
            <Button onClick={this.handleAdd} color="primary">
              Добавить
            </Button>
          </DialogActions>
        </Dialog>
      </div>
    )
  }
}