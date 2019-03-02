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
      open: false,
      view: 'category',
      parent: ''
    }
    this.handleAdd = this.handleAdd.bind(this)
  }

  handleAdd() {
    var { parent, title, view } = this.state
    if(parent && title) {
      this.props.createCatalogPage(view, parent, title)
      this.setState({ open: false })
    }
  }
  
  render() {
    const { 
      classes, state: { 
        catalog, catalog: { items = [] }
      }
    } = this.props

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
            <SelectField
              value={this.state.view}
              items={[{id: 'lot', title: 'Лот'}, {id: 'category', title: 'Категория'}]}
              upProp={value => this.setState({ view: value, parent: '' })}
              label="Лот или категория" {...this.props} />
            <SelectField
              value={this.state.parent}
              items={this.state.view == 'category'
                ? items.filter(item => 
                    (item.parent == 8 || item.id == 8)
                    && (!catalog[item.id] 
                          || catalog[item.id].itemsType == 'category'))
                : items.filter(item =>
                    item.view == 'category'
                    && (!catalog[item.id] 
                          || catalog[item.id].itemsType == 'lot'))
              }
              upProp={value => this.setState({ parent: value })}
              label="Категория" {...this.props} />
            <TextField fullWidth
              onChange={({target}) => this.setState({ title: target.value })}
              label="Название" />
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