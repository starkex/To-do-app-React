import React from 'react'
import { List, ListItem, ListItemText, Button, Modal } from '@material-ui/core'
import db from './firebase'
import Todos from './firebase';

function Wall(props) {
    const [open, setOpen] = useState(false);
       
    const handleOpen = ()=> {
       setOpen(true);
    };    
      const handleClose =() =>{
          setOpen(false);
      };
        return () => {
            
           };
    }, [input])
    return(
  <React.Fragment>
        <Modal open={open} onClose={e => setOpen(false)}></Modal>
         <List className="sup">
                        <ListItem >
                           <ListItemText primary="Task" secondary={props.text}/>
                        </ListItem>
                    </List>
        <button onClick={e => Edit }></button>
        </React.Fragment>
    );
               
}

export default Wall
