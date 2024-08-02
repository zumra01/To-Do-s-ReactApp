import React, { useState } from 'react';
// import Style from './Todos.css'


function Todo(props) {
let[todo,settodo]=useState(" ")
let[arr,setarr]=useState([])
let[mode,setmode]=useState("create")
let [editing,setEditing] = useState(-1)

const adds=(e)=>{
    e.preventDefault();
    e.target.reset();
    console.log(todo);
    
    if(mode=== "create"){

      let obj = {todo}
      arr.push(obj)

      setarr([...arr])
      settodo("")
    }
    
    let obj={
      todo:todo,
    }
    arr.push(obj);
    console.log(arr);

    setarr([...arr]);
}
const edits=(ind)=>{
  console.log("edit");
  setEditing(ind)
  settodo(arr[ind].todo)
  setmode("update")
}
const deletes=(ind)=>{
  console.log("deletes",ind);
  let deleted =arr.filter((e,i)=>{
    if(i!==ind){
      return e;
    }
  });
  console.log(deleted);
  setarr(deleted);
}


    return (
        <div>
          <form onSubmit={adds}>
            <h1>To-Do</h1>
            <label htmlFor="text" > ADD TASK:</label><br/> <br/>  
             <input type="text" name="todo"  onChange={(e)=>{settodo(e.target.value)}} /><br/><br/>  
             <button type='submit' value="submit" >{mode==="create"?"ADD":"UPDATE"}</button>
          </form>


         <table className='table table-dark table-striped mx-4 container' > 
            <thead>
                <tr>
                  <th>LIST</th>
                </tr>
            </thead>
   {
     arr.map((e,i)=>{
       return(
        <tbody>
            <tr>
                <td>{e.todo}</td>
                </tr>
                <tr>
               <td>
                <button onClick={edits} className='btn btn-primary me-4'>edit</button>
                <button onClick={()=>deletes(i)} className='btn btn-danger'>Delete</button>
               </td>
      </tr>
        </tbody>
       )
     })
   }



         </table>





        </div>
    );
}

export default Todo;