import React,{useState} from 'react'
import { List, ListItem, ListItemText, Button, Modal} from '@material-ui/core'
import db from './firebase'
import Todos from './firebase';
import {makeStyles} from '@material-ui/core/styles';

const useStyles =makeStyles((theme) =>({
      paper: {
          width:400,
          boxShadow: theme.shadows[5],
          position:'absolute',
          padding: theme.spacing(2,4,3),
          backgroundColor:theme.palette.backgroundColor.paper,
          border:'2px solid #000',
      },
}));

function Wall(props) {
 /* const classes = useStyles();
    const [open, setOpen] = useState(false);
       
    const handleOpen = ()=> {
       setOpen(true);
    };*/    
     
    return(
  <React.Fragment>
        <Modal /*open={open} onClose={e => setOpen(false)}*/>
          <div>
            <h1>open</h1>
             <button /*onClick={e=> setOpen(false)}*/></button>
          </div>
        </Modal>
         <List className="sup">
                        <ListItem >
                           <ListItemText primary="Task" secondary={props.text}/>
                        </ListItem>
                    </List>
       
        </React.Fragment>
    );
               
};

export default Wall
