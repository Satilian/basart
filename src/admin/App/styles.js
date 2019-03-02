const styles = theme => ({
  root: {
    flexGrow: 1,
  },
  flex: {
    flex: 1,
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20,
  },
  menuItem: {
    backgroundColor: theme.palette.primary.main,
    '& $primary, & $icon': {
      color: theme.palette.common.white,
    },
  },
  primary: {},
  icon: {},
  menuRoot: {
    float: 'left',
    marginTop: 22
  },
  link: {
    '&:focus': {
      backgroundColor: theme.palette.primary.main,
    },
    color: theme.palette.common.white,
    textDecoration: 'none'
  },
  contentPaper: {
    float: 'left',
    marginTop: 30,
    marginLeft: 30,
  },
  content: {
    padding: '0 24px 24px 24px',
    width: 500
  },
  subheader: {
    fontSize: 20,
  },
  collapse: {
    paddingLeft: theme.spacing.unit * 2,
  },
  nested: {
    paddingTop: 5,
    paddingBottom: 5
  },
  listItemText: {
    '&:first-child': {
      paddingLeft: 40
    }
  },
  CardBattons: {
    textAlign: 'right'
  },
  dataFieldBatton: {
    color: 'red'
  },
  dataFieldBattonSave: {
    color: 'green'
  },
  selectField: {
    margin: theme.spacing.unit,
    display: 'flex'
  },
  addButtonWrapper: {
    float: 'right',
    display: 'inline-block'
  },
  addButton: {
    width: 40,
    height: 40,
    margin: 4,
  },
  list: {
    width: 500
  },
  delButton: {
    color: 'red',
    height: 24
  },
  modListButton: {
    float: 'right'
  }
})

export default styles