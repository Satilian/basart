import React from 'react'
import Category from './Category'
import Lot from './Lot'
import CardBattons from '../CardBattons'

const Card = props => {
	const { classes, state, 
		state: { catalog, 
			catalog: {
				items: category = [],
				content: { item: { id, view }},
				[id]: { itemsType } = {}
			},
			auctions: { items: auctions = []}
		}
	} = props

	return (
		<div className={classes.content}>
			<CardBattons {...props} />
			{view == 'category'
				? <Category {...props}
					disabled={itemsType == 'category'}
					category={category.filter(item =>
						(item.parent == 8 || item.id == 8)
						&& item.id != id
						&& (!catalog[item.id] 
									|| catalog[item.id].itemsType == 'category')
					)} />
				: null}
			{view == 'lot'
				? <Lot {...props}
					category={category.filter(item =>
						item.view == 'category'
						&& (!catalog[item.id] 
									|| catalog[item.id].itemsType == 'lot')
					)}
					auctions={auctions} />
				: null}
		</div>
	)
}

export default Card