import React from 'react'
import { List, ListItem, ListItemText } from '@material-ui/core'

function Wall(props) {
    return (
       <List className="sup">
           <ListItem >
              <ListItemText primary="Task" secondary={props.text}/>
           </ListItem>
       </List>
    )
}

export default Wall
