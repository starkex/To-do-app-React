import React from 'react'
import { List, ListItem, ListItemText, Button } from '@material-ui/core'
import db from './firebase'

function Wall(props) {
    return(
  
         <List className="sup">
                        <ListItem >
                           <ListItemText primary="Task" secondary={props.text}/>
                        </ListItem>
                    </List>
        
    );
                
               
}
/*    <React.Fragment>
<Button onClick={event => {db.collection('todos').doc(props.todos.id).delete()}}> Delete</Button>
        </React.Fragment>
*/
        export default Wall
