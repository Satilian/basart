import React from 'react'
import CardBattons from '../CardBattons'
import { DataField, DateField, SelectField } from '../Fields'

const AuctionCard = props => {

	const { 
		classes, state, updateAuction,
		state: { auctions: { content: { item: {
			id, view, title, keywords, description, auction
		}}}}
	 } = props

	return (
		<div className={classes.content}>
			<CardBattons {...props} />
			<div>
				<DataField 
					value={title}
					upProp={value => updateAuction('page', 'title', value, id)}
					label="Название" {...props} />
				<DataField 
					value={auction.num}
					upProp={value => updateAuction('auction', 'num', value, id)}
					label="Номер аукциона" {...props} />
				<DateField 
					value={auction.date}
					upProp={value => updateAuction('auction', 'date', value, id)}
					label="Дата проведения" />
				<SelectField 
					value={view}
					items={[
						{id: 'auctions/single', title: 'В меню'},
						{id: 'auctions/arhiv', title: 'В архиве'}
					]}
					upProp={value => updateAuction('page', 'view', value, id)}
					label="Где показывать" {...props} />
				<DataField 
					value={keywords}
					upProp={value => updateAuction('page', 'keywords', value, id)}
					label="Поисковые фразы"
					multiline={true} {...props} />
				<DataField 
					value={description}
					upProp={value => updateAuction('page', 'description', value, id)}
					label="Краткое описание"
					multiline={true} {...props} />
			</div>
		</div>
	)
}

export default AuctionCard