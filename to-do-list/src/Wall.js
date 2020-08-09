import React from 'react'
import { List, ListItem, ListItemText, Button } from '@material-ui/core'

function Wall(props) {
    return(
                    <List className="sup">
                        <ListItem >
                           <ListItemText primary="Task" secondary={props.text.doc}/>
                        </ListItem>
                    </List>
                     <Button className = "yo" > Delete </Button>
           )
}

export default Wall
