import React from 'react'
import InputLabel from '@material-ui/core/InputLabel'
import MenuItem from '@material-ui/core/MenuItem'
import FormControl from '@material-ui/core/FormControl'
import Select from '@material-ui/core/Select'

class SelectField extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      value: this.props.value != null?this.props.value:""
    }
    this.handleChange = this.handleChange.bind(this)
  }

  handleChange({target: { value }}) {
    this.setState({value})
    if(value == "") value = null
    this.props.upProp(value)
  }

  render() {
    const { 
      classes, label, canByEmpty,
      items, disabled 
    } = this.props

    return (
      <FormControl className={classes.selectField} disabled={disabled}>
        <InputLabel htmlFor="SelectField">{label}</InputLabel>
        <Select
          autoWidth
          value={this.state.value}
          onChange={this.handleChange}
          inputProps={{ id: 'SelectField' }}
        	MenuProps={{  PaperProps: {
				    style: {  maxHeight: 224 }
				  }}}
        >
          {canByEmpty?(<MenuItem value=""><em>Не выбран</em></MenuItem>):null}
          {items.map(({id, title}) => 
          	<MenuItem key={title} value={id}>{title}</MenuItem>
          )}
        </Select>
      </FormControl>
    )
  }
}

export default SelectField