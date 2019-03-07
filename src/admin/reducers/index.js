export default function rootReducer(state, action) {
  var nextState = Object.assign({}, state)
  
  switch(action.type) {
  	case 'SET_LIST':
  		nextState.view = action.view
      nextState[action.view].content.view = 'list'
  		break

  	case 'SET_CARD':
      let {resource, id, parent} = action
      if(resource == 'catalog') {
        var item = nextState.catalog[parent].items[id]
        nextState.catalog.content = { view: 'catalog',  item }
      }
      if(resource == 'auctions') {
        var item = nextState.auctions[id]
  		  nextState.auctions.content = { view: 'auction', item }
      }
      if(resource == 'modules') {
        var item = nextState.modules[id]
        nextState.modules.content = { 
          view: 'module',
          module: { view: 'list' }, 
          item
        }
      }
  		break

    case 'SET_MOD_VIEW':
      var { view, item } = action
      nextState.modules.content.module = { view, item }
      break

    case 'UPDATE_MODULE':
      var { id, key, value } = action
      nextState.modules.content.module.item[key] = value
      break

  	case 'TOGGLE_LIST':
  		var { id, resource } = action
      if(item = nextState[resource][id])
  		  item.open = !item.open
  		break

    case 'DELETE_PAGE':
      var { id, resource } = action, current,
      res = nextState[resource]
      res.items.forEach((item, i) => {
        if(item.id == id) current = res.items.splice(i, 1)[0]
      })
      if(res[id]) delete res[id]
      else {
        delete res[current.parent].items[id]
        if(!Object.keys(res[current.parent].items).length)
          delete res[current.parent]
      }
      break

    case 'CREATE_ITEM':
      var { item, resource } = action
      if(resource == 'catalog') {
        if(!nextState.catalog[item.parent])
          nextState.catalog[item.parent] = { 
            itemsType: item.view,
            open: false,
            items: {}
          }
        nextState.catalog[item.parent].items[item.id] = item
      }
      if(resource == 'auctions')
        nextState.auctions[item.id] = item
      nextState[resource].items.push(item)
      break

    case 'FETCH_AUCTIONS':
      nextState.auctions = Object.assign(
        { items: action.items }, action.map,
        nextState.auctions
      )
      break

    case 'FETCH_CATALOG':
      var { items, map } = action
      nextState.catalog = Object.assign(map, {items}, nextState.catalog)
      break

    case 'FETCH_MODULES':
      var { items, map } = action
      nextState.modules = Object.assign(map, {items}, nextState.modules)
      break

    case 'UPDATE_AUCTION':
      var { key, value, id } = action
      var cat = nextState.auctions
      var item = cat.content.item
      if(item[key]) item[key] = value
      else item.auction[key] = value
      break

    case 'UPDATE_CATALOG':
      var { key, value, id } = action
      var cat = nextState.catalog
      var item = cat.content.item
      if(key == 'parent') {
        delete cat[item.parent].items[item.id]
        if(!Object.keys(cat[item.parent].items).length)
          delete cat[item.parent]
        if(!cat[value]) cat[value] = { open: false, items: {} }
        cat[value].itemsType = item.view
        cat[value].items[item.id] = item
      }
      if(item[key]) item[key] = value
      else item.lot[key] = value
      break

    default: return state
  }
  //console.log(action.type, nextState)
  return nextState
}