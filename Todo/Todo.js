import {useState} from "react";
import '../Todo/Todo.css';
import { FormControl ,OutlinedInput , Paper , TextField ,Input, List, ListItem, ListItemButton, ListItemText} from "@mui/material";
import Button from '@mui/material/Button';
import ClearRoundedIcon from '@mui/icons-material/ClearRounded';
import DeleteIcon from '@mui/icons-material/Delete';

function Todo(){
const [todos,setTodos] = useState([]);
const [inputValue , setInput] = useState("");

const handleInputChange = (e) =>{
        setInput(e.target.value);

}
const handleOnclick = () =>{
   if(inputValue.trim() !== ''){
    const newArr = [...todos, inputValue];
      setTodos(newArr);
      setInput("");
   }
    
}
const handleDeleteTasks = (i) =>{ 
    const del = [...todos];
    del.splice(i,1);
    setTodos(del);
}


return(
    <div className="container">
        
        <h1 className="name">To Do List</h1>
        <br></br>
        <div className="temp">
        {/* <input className="form-control" type="text" placeholder="Enter Task" onChange={handleInputChange}></input> */}
                <TextField 
                className="form-control"
                id="outlined-basic" 
                label="Enter Task" 
                variant="outlined" 
                onChange={handleInputChange}
                value={inputValue} />

        {/* <button className= "btn-primary" type="submit" onClick={handleOnclick}>Submit</button>  */}
        <Button className= "btn" variant="contained" type="submit" onClick={handleOnclick}>Submit</Button>

        </div>
        <div className="list">

        <List>
        {todos.map((v,i) => (
            <ListItem disablePadding>
                <ListItemButton>
                    <ListItemText primary={v}/>
                    {/* <Button variant="contained" type="submit" onClick={()=>{handleDeleteTasks(i)}}>Delete</Button> */}
                    <DeleteIcon type="submit" onClick={()=>{handleDeleteTasks(i)}} />
                    
                </ListItemButton>
            </ListItem>
            
        ))}
       </List>
        </div>
       
    </div>

);
}
export default Todo;