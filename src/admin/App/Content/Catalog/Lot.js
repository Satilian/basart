import React from 'react'
import { DataField, SelectField, ImageField } from '../Fields'

const Lot = props => {

	const { 
		updateCatalog, uploadImage, delImage,
		state, category, auctions,
		state: { [state.view]: {
			content: {
				item: { 
					id, parent, view, title, 
					keywords, description, lot
				}
			}
		}}
	} = props

	return (
		<div>
			<ImageField 
				images={lot.image} 
				itemId={id}
				uploadImage={image => uploadImage('lot', 'image', image, id)}
				delImage={image => delImage('lot', 'image', image, id)}
			/>
			<SelectField 
				value={parent}
				items={category}
				upProp={value => updateCatalog('page', 'parent', value, id)}
				label="Категория" {...props} />
			<DataField 
				value={lot.lot}
				upProp={value => updateCatalog('lot', 'lot', value, id)}
				label="№ Лота" {...props} />
			<DataField 
				value={title}
				upProp={value => updateCatalog('page', 'title', value, id)}
				label="Название" {...props} />
			<DataField 
				value={lot.avtor}
				upProp={value => updateCatalog('lot', 'avtor', value, id)}
				label="Автор"{...props} />
			<DataField 
				value={lot.technika}
				upProp={value => updateCatalog('lot', 'technika', value, id)}
				label="Техника"{...props} />
			<DataField 
				value={lot.year}
				upProp={value => updateCatalog('lot', 'year', value, id)}
				label="Год"{...props} />
			<DataField 
				value={lot.size}
				upProp={value => updateCatalog('lot', 'size', value, id)}
				label="Размер"{...props} />
			<DataField 
				value={lot.price}
				upProp={value => updateCatalog('lot', 'price', value, id)}
				label="Цена"{...props} />
			<DataField 
				value={keywords}
				upProp={value => updateCatalog('page', 'keywords', value, id)}
				label="Поисковые фразы"
				multiline={true} {...props} />
			<DataField 
				value={description}
				upProp={value => updateCatalog('page', 'description', value, id)}
				label="Краткое описание"
				multiline={true} {...props} />
		</div>
	)
}

export default Lot