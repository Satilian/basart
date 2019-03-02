import React from 'react'
import { DataField, SelectField } from '../Fields'

const Category = props => {

	const { state, updateCatalog, category,
		state: { [state.view]: {
			content: {
				item: { id, parent, view, title, keywords, description }
			}
		}}
	} = props

	return (
		<div>
			<SelectField 
				value={parent}
				items={category}
				upProp={value => updateCatalog('page', 'parent', value, id)}
				label="Категория" {...props} />
			<DataField 
				value={title}
				upProp={value => updateCatalog('page', 'title', value, id)}
				label="Название" {...props} />
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

export default Category