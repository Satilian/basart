import React from 'react'
import Catalog from './Catalog'
import Auctions from './Auctions'
import Modules from './Modules'

class List extends React.Component {
	componentDidMount() {
  	this.props.fetchCatalog()
  	this.props.fetchModules()
  }

	render() {
		const { classes, state: { view } } = this.props
		
		return (
			<div className={classes.list}>
				{view == 'catalog'?<Catalog {...this.props} />:null}
				{view == 'modules'?<Modules {...this.props} />:null}
			</div>
		)
	}
}

export default List