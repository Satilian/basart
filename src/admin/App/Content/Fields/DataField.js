import React, { Component } from 'react'
import TextField from '@material-ui/core/TextField'
import IconButton from '@material-ui/core/IconButton'
import InputAdornment from '@material-ui/core/InputAdornment'
import Tooltip from '@material-ui/core/Tooltip'
import Done from '@material-ui/icons/Done'

class DataField extends Component {
  constructor(props) {
    super(props)
    this.state = {
      save: true
    }

    this.handleChange = this.handleChange.bind(this)
  }

  handleChange(save) {
    this.setState({ save })
  }

  render() {
    const { classes, upProp, label, value, multiline } = this.props
    return (
      <form onSubmit={e => {
        e.preventDefault()
        upProp(this.input.value)
        this.handleChange(true)
      }}>
        <TextField
          fullWidth
          multiline={multiline}
          rows={3}
          label={label}
          defaultValue={value}
          className={classes.textField}
          inputRef={node => {this.input = node}}
          onChange={() => this.handleChange(false)}
          InputProps={{endAdornment:
            <InputAdornment position="end">
              <Tooltip title="Сохронить" placement="right">
                <IconButton 
                  className={this.state.save
                    ? classes.dataFieldBattonSave
                    : classes.dataFieldBatton}
                  onClick={() => {
                    upProp(this.input.value)
                    this.handleChange(true)
                  }}>
                  <Done />
                </IconButton>
              </Tooltip>
            </InputAdornment>
          }}
        />
      </form>
    )
  }
}

export default DataField