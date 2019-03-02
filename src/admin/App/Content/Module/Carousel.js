import React from 'react'
import CloseBattons from './CloseBattons'
import { DataField, SelectField } from '../Fields'
import ImageField from './ImageField'

const Carousel = props => {
	const {
		classes, updateMod, addModImage, delModImage,
		state: {
			modules: { content: { item: { id }, module: { item }}}
		}
	} = props

	return (
		<div className={classes.content}>
      <CloseBattons {...props} />
      <ImageField 
      	onLoad={value => addModImage(id, item.id, 'image', value)}
      	onDelet={value => delModImage(id, item.id, 'image', value)}
      	id={id}
      	image={item.image} />
			<DataField 
				value={item.title}
				upProp={value => {if(value) updateMod(id, item.id, 'title', value)}}
				label="Заголовок" {...props} />
			<DataField 
				value={item.text}
				upProp={value => updateMod(id, item.id, 'text', value)}
				label="Текст" {...props} />
			<DataField 
				value={item.link}
				upProp={value => updateMod(id, item.id, 'link', value)}
				label="Ссылка" {...props} />
    </div>
	)
}

export default Carousel