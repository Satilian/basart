import dataProvider from './dataProvider'

export function toggleList(id, resource) {
	return { type: 'TOGGLE_LIST', id, resource }
}

export function setList(view) {
	return { type: 'SET_LIST', view }
}

export function setCard(resource, id, parent) {
	return { type: 'SET_CARD', resource, id, parent }
}

export function setModView(view, item) {
	return { type: 'SET_MOD_VIEW', view, item }
}

export function delModImage(mod_id, item_id, key, name) {
	return dispatch => {
		fetch(`/file/module?name=${name}&id=${mod_id}`, {
			method:'DELETE',
			credentials: 'include'
		}).then(res => {
			if(res.status == 200)
			  dispatch(updateMod(mod_id, item_id, key, ""))
		})
	}
}

export function addModImage(mod_id, item_id, key, image) {
	return dispatch => {
		var formData = new FormData()
		formData.append('id', mod_id)
		formData.append('image', image)
		fetch('/file/module', {
			method:'POST', 
			body: formData,
			credentials: 'include'
		}).then(res => { 
			if(res.status == 200) 
				dispatch(updateMod(mod_id, item_id, key, image.name))
		})
	}
}

export function updateMod(mod_id, item_id, key, value) {
	return (dispatch, getState) => {
		var dataValue = getState().modules.content.item.data
		.map(item => item)
		dataValue[item_id][key] = value
		dataProvider('UPDATE', 'module', {
			id: mod_id,
			data: { data: dataValue }
		}).then(res => dispatch({
				type: 'UPDATE_MODULE',
				id: mod_id,
				key, value
			}))
	}
}

export function deletePage(id, view, resource) {
	return dispatch => {
		if(view == 'lot') 
			fetch(`/file/imgdir?id=${id}`, {
				method:'DELETE',
				credentials: 'include'
			})
		dataProvider('DELETE', 'page', { id })
		.then(res => dispatch({
				type: 'DELETE_PAGE',
				id, resource
			}))
	}
}

export function createCatalogPage(view, parent, title) {
	return dispatch => {
		dataProvider('CREATE', 'page', { data: { view, parent, title, mods: [4] }})
		.then(res => res.json())
		.then(item => {
			if(item.created){
				if(view == 'lot') dispatch(createLot(item))
				if(view == 'category')
					dispatch({ type: 'CREATE_ITEM', resource: 'catalog', item })
			}
		})
	}
}

function createLot(item) {
	return dispatch => {
		dataProvider('CREATE', 'lot', { data: { id: item.id, image: [] }})
		.then(res => res.json())
		.then(lot => {
			item.lot = lot
			dispatch({ type: 'CREATE_ITEM', resource: 'catalog', item })
		})
	}
}

export function delImage(table, key, name, id) {
	return (dispatch, getState) => {
		fetch(`/file/lot?name=${name}&id=${id}`, {
			method:'DELETE',
			credentials: 'include'
		}).then(res => {
			if(res.status == 200) {
				var value = getState().catalog.content.item.lot.image
				.filter(img => img != name)
			  dispatch(updateCatalog(table, key, value, id))
			}
		})
	}
}

export function uploadImage(table, key, image, id) {
	return (dispatch, getState) => {
		var formData = new FormData()
		formData.append('id', id)
		formData.append('image', image)
		fetch('/file/lot', {
			method:'POST', 
			body: formData,
			credentials: 'include'
		}).then(res => { 
			if(res.status == 200) {
				var value = getState().catalog.content.item.lot.image
				.map(img => img)
				value.push(image.name)
				dispatch(updateCatalog(table, key, value, id))
			}
		})
	}
}

export function updateCatalog(table, key, value, id) {
	return dispatch => {
		dataProvider('UPDATE', table, {id, data: { [key]: value }})
		.then(res => {
			if(res.status == 200)
				dispatch({
					type: 'UPDATE_CATALOG',
					key, value, id
				})
		})
	}
}

export function fetchCatalog() {
	return (dispatch, getState) => {
		if(!getState().catalog.items)
		  dataProvider('GET_LIST', 'page', {
			filter: { view: ['category', 'lot'] }
		  }).then(res => res.json())
			.then(items => dispatch({ 
				type: 'FETCH_CATALOG',
				map: catalogMap(items),
				items 
			}))
	}
}

export function fetchModules() {
	return (dispatch, getState) => {
		if(!getState().modules.items)
		  dataProvider('GET_LIST', 'module')
			.then(res => res.json())
		.then(items => dispatch({
			type: 'FETCH_MODULES',
			map: modulesMap(items),
			items 
		}))
	}
}

const catalogMap = items => {
	items.unshift({id: 8, title: 'Главная категория'})
	var obj = {}
	items.forEach(item => {
		if(item.id == 8) return
		if(!obj[item.parent])
			obj[item.parent] = { 
				itemsType: item.view,
				open: false,
				items: {}
			}
		obj[item.parent].items[item.id] = item
	})
	return obj
}

const modulesMap = items => {
	var obj = {}
	items.forEach(item => {
		obj[item.id] = item
	})
	return obj
}