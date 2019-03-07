import { stringify } from 'query-string'

const apiUrl = '/админ'

export default (type, resource, params = {}) => {
	let url = '';
	const options = { 
		headers : { 'Content-Type': 'application/json' },
		credentials: 'include'
	}

	switch (type) {
		case 'GET_LIST':
			var query = {}
			query.filter = params.filter?JSON.stringify(params.filter):undefined
			url = `${apiUrl}/${resource}?${stringify(query)}`
			break
		case 'GET_ONE':
			url = `${apiUrl}/${resource}/${params.id}`
			break
		case 'CREATE':
			url = `${apiUrl}/${resource}`
			options.method = 'POST'
			options.body = JSON.stringify(params.data)
			break
		case 'UPDATE':
			url = `${apiUrl}/${resource}/${params.id}`
			options.method = 'PUT'
			options.body = JSON.stringify(params.data)
			break
		case 'DELETE':
			url = `${apiUrl}/${resource}/${params.id}`
			options.method = 'DELETE'
			break
		case 'DELETE_MANY':
			var query = {
				filter: JSON.stringify({ id: params.ids }),
			}
			url = `${apiUrl}/${resource}?${stringify(query)}`
			options.method = 'DELETE'
			break
		case 'GET_MANY': {
			var query = {
				filter: JSON.stringify({ id: params.ids }),
			}
			url = `${apiUrl}/${resource}?${stringify(query)}`
			break
		}
		default:
			throw new Error(`Unsupported Data Provider request type ${type}`)
	}

	return fetch(url, options)
}