import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import { faPen,faTrashCan } from '@fortawesome/free-solid-svg-icons'
import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from 'react';
import './App.css';

function App() {
  //task state(list of todos)
  const [toDo,setToDo]= useState([
  ]);

  //temp state
  const [newTask,setNewTask]= useState('');
  const [updateData,setUpdateData]=useState('');

  //function add task
  const addTask =()=>{
    if(newTask){
         let num = toDo.length + 1; 
    let newEntry = { id: num, title: newTask }
    console.log(newEntry)
    setToDo([...toDo, newEntry])
    setNewTask(''); 
    }

  }

  //function delete task
  const deleteTask =(id)=>{
    let newTasks= toDo.filter(task=>task.id !== id);
    setToDo(newTasks)
  }

   //function cancelupdate task
  const cancelupdateTask =()=>{
 
      setUpdateData('');
    
}

   //function update task
   const updateTask = () => {
    let filterRecords = [...toDo].filter( task => task.id !== updateData.id );
    let updatedObject = [...filterRecords, updateData]
    setToDo(updatedObject);
    setUpdateData('');
  }


  //function change task for update
  const changeUpdateTask=(e)=>{
    let newEntry={
      id:updateData.id,
      title:e.target.value
    }
    setUpdateData(newEntry);
  }


  return (
    <div className="container App">
{updateData && updateData ? (
  <>
  {/* updatetask */}
     
  <div className="row">
        <div className="col">
          <input 
            value={ updateData && updateData.title }
            onChange={ (e) => changeUpdateTask(e)}
            className="form-control form-control-lg"
          />
        </div>
        <div className="col-auto">
          <button
            onClick={updateTask}
            className="btn btn-lg btn-success mr-20"
          >Update</button>
          <button
            onClick={cancelupdateTask}
            className="btn btn-lg btn-warning"
          >Cancel</button>
        </div>
      </div>
<br></br>
  </>
) : (
<>
 {/* addtask */}
 <div className="row">
        <div className="col">
          <input 
            value={newTask}
            onChange={ (e) => setNewTask(e.target.value)}
            className="form-control form-control-lg"
          />
        </div>
        <div className="col-auto">
          <button
            onClick={addTask}
            className="btn btn-lg btn-success"
          >Add Task</button>
        </div>
      </div>
</>)}
         
     
      
      <h2 className='title'>Todo List ReactJs</h2>
       
       {/* display todo */}
       {toDo?.length ? "" : "no tasks"}

       {toDo?.map((task,index)=>{
         return( 
         <div key={task.id}>
            <div className='col bg'>
              <div>   
                <span className='taskNum'>{index+1}</span>
                <span className='taskText'>{task.title}</span>
              </div>
              <div className='iconsWrap'>
                <span title='edit' onClick={()=>setUpdateData(
                {  id:task.id,title:task.title}
                )}>
                  <FontAwesomeIcon icon={faPen}/>
                </span>
                <span title='del' onClick={()=> deleteTask(task.id)}>
                <FontAwesomeIcon icon={faTrashCan}/>
                </span>
              </div>
           


            </div>
           
         </div>)
       })}

    </div>
  );
}

export default App;
