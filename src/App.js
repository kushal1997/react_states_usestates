import { useState } from 'react';
import './App.css';

// ==============================
// State and useState
// ================================

// function App() {
//   const [count,setCount]= useState(0);

//   function handleAdd(){
//     setCount(count+1);
//   }

//   return (
//     <div className="App">
//       <div className="box">
//         <p>{count}</p>
//         <button onClick={handleAdd} className="add">ADD</button>
//         <button onClick={()=>setCount(count-1)} className="sub">SUB</button>
//         <button onClick={()=>setCount(0)} className="reset">Reset</button>
//       </div>
//     </div>
//   );
// }

// export default App;


// ================================
// useState: Array State Value
// ================================

// function App(){
//   const [tasks,setTasks]=useState([
//         {id: 1, name:"Record Videos", completed:false },
//         {id: 2, name:"Listem Music", completed:true},
//         {id: 3, name:"Study", completed:false}
//       ]);
//   return (
//     <div className="App">
//         <h1>Task List</h1>
//         <ul>
//           {tasks.map((task) =>(
//             <li key={task.id}>
//               <span>{task.id} - {task.name}</span>
//               <button>Delete</button>
//             </li>
//           ))}
//         </ul>
//     </div>
//   );
// }
// export default App;


// ================================
// useState: Array setState Value
// ================================
function App(){
  const [tasks,setTasks]=useState([
        {id: 1, name:"Record Videos", completed:false },
        {id: 2, name:"Listem Music", completed:true},
        {id: 3, name:"Study", completed:false}
      ]);
  function handleDelete(id){
    setTasks(tasks.filter(task => id!== task.id));

  }
  return (
    <div className="App">
        <h1>Task List</h1>
        <ul>
          {tasks.map((task) =>(
            <li key={task.id}>
              <span>{task.id} - {task.name}</span>
              <button onClick={()=> handleDelete(task.id)}>Delete</button>
            </li>
          ))}
        </ul>
    </div>
  );
}
export default App;



