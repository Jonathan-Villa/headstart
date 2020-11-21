import * as React from "react"
import {IconButton, ListItemText, ListItem, List, Drawer} from "@material-ui/core"
import {Menu} from "@material-ui/icons"
import {useState} from "react"
import { Link } from "@reach/router"
import {makeStyles} from "@material-ui/core/styles"

const useStyles = makeStyles({
    list:{
        width: 250,
    },
    linkText: {
      textDecoration: 'none',
      textTransform: 'uppercase',
      color: 'black',
      
    },
  });

const SideDrawer = ({navLinks}) => {
    const classes = useStyles();

    const [state, setState] = useState ({right: false})
    const toggleDrawer =(anchor, open) => (event) => {
        if(
            event.type === "keydown" && (event.key === "Tab" || event.key === "Shift")
        ){
            return
        }
        setState({[anchor]: open})
    };
    const SideDrawerList = anchor => (
        <div className={classes.list} role = "presentation" onClick={toggleDrawer(anchor, false)} onKeyDown={toggleDrawer(anchor, false)}>
            <List component="nav">
                {navLinks.map(({title, path}) => (
                    <Link to={path} key={title} className = {classes.linkText}>
                        <ListItem button>
                            <ListItemText primary ={title}/>
                        </ListItem>
                    </Link>
                ))}
            </List>
        </div>
    )
  return(
      <React.Fragment>
          <IconButton edge = "start" aria-label="menu" onClick ={toggleDrawer("right", true)}>
              <Menu fontSize ="large" style ={{color: 'white' }} />
          </IconButton>
          <Drawer anchor ="right" open ={state.right} onOpen={toggleDrawer("right", true)} onClose={toggleDrawer("right", false)}>
              {SideDrawerList("right")}
          </Drawer>
      </React.Fragment>
  )
}
export default SideDrawer;