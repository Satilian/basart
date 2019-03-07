import React from 'react'
import ModList from './ModList'
import Carousel from './Carousel'
import TopLots from './TopLots'
import NewLots from './NewLots'
import FooterMod from './FooterMod'

const Module = props => {
	const {
		classes, 
		state: {
			modules: { content: { 
				module: { view }
			}}
		}
	} = props

	return (
		<div>
			{view == 'list'?<ModList {...props} />:null}
			{view == 'carousel'?<Carousel {...props} />:null}
			{view == 'top_lots'?<TopLots {...props} />:null}
			{view == 'new_lots'?<NewLots {...props} />:null}
			{view == 'footer_mod'?<FooterMod {...props} />:null}
		</div>
	)
}

export default Module