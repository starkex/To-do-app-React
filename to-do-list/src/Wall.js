import React from 'react'
import { List, ListItem, ListItemText } from '@material-ui/core'

function Wall(props) {
    return (
       <List>
           <ListItem >
              <ListItemText primary="Wall" secondary={props.text}/>
           </ListItem>
       </List>
    )
}

export default Wall
