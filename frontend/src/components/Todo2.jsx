import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'



const Todo2 = () => {

const [title,setTitle]=useState("")
const [description,setDescription]=useState("")
const [todo,setTodo]=useState([])

 
const handlesumbit=async(e)=>{

    e.preventDefault()
try {
    const response = await fetch('http://localhost:8000/api/todos2',{
        method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({title,description})

       
    })
     if(response.ok){
         const newtodo=await response.json()
         setTodo([...todo,newtodo])
         setTitle('')
         setDescription('')

        }

    
} catch (error) {
    console.log('mistake in todo')
}
}

useEffect(()=>{
    show()
},[])

const show =async ()=>{
   await fetch('http://localhost:8000/api/todos2')
    .then((res)=> res.json())
    .then((res)=>setTodo(res))
}

const handledelete= async(id)=>{
    const res = await fetch(`http://localhost:8000/api/todos2/${id}`,{
        method:'DELETE'
    })
    if(res.ok){
        setTodo(todo.filter((item)=>item._id !== id))

    }else{
     console.log('mistake in delete')
    }

}

  return (
    <div>

<h1>Todos2</h1>

    <form  onSubmit={handlesumbit}> 
        <input type='text' name='title' value={title} onChange={(e)=>setTitle(e.target.value)}/><br></br>
        <input type='description' name='description' value={description}  onChange={(e)=>setDescription(e.target.value)}/>
       <button type='sumbit'>sumbit</button>
       
    </form>

    <ul>
        {
            todo.map((todos2,index)=><li key={index}>{todos2.title}:{todos2.description}
            
                 <button onClick={()=>handledelete(todos2._id)} >delete</button>
        
            </li>)
        
            
        }
       

    </ul>
      
    </div>
  )
}

export default Todo2











// import React, { useEffect, useState } from 'react'

// const Todo2 = () => {
//     const [file,setFile]=useState({title:"",description:""})
//     const [todo,setTodo]=useState([])


//   const handlesumbit=async(e)=>{

//     e.preventDefault()
//     try {
//         const res= await fetch('http://localhost:8000/api/todos2',{
//         method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({file})
         
//         })
//         if(res.ok) {
//           const neww={file}
//           setTodo([...todo,neww])
//           setFile("")  
//         } else {
//             console.log(res,"misstake in todo")
//         }
//     } catch (error) {
//         console.log(error)
//     }

//   }
//  useEffect(()=>{
//     show()
//  },[])

//     const show=async()=>{
//        await fetch('http://localhost:8000/api/todos2')
//        .then((res)=>res.json())
//        .then((data)=>setTodo(data))
//     }


//     const handledelete=async(id)=>{
//       const dele= await fetch(`http://localhost:8000/api/todos2/${id}`,{
//         method:"DELETE"
//       })
//       if (dele.ok) {
//         setTodo(todo.filter((item)=>item._id !== id))
        
//       } else {
//         console.log(dele,"misstake")
//       }
//     }

//   return (
//     <div>
//         <form  onSubmit={handlesumbit}>
//             <input type='text' value={file.title} name='title' onChange={(e)=>setFile(e.target.value)} /><br>
//             </br>
//             <input type='text' value={file.description} name='descriptiom' onChange={(e)=>setFile(e.target.value)} />
//             <button type='sumbit'>sumbit</button>
//         </form>
//         <ul>
//             {
//                 todo.map((todoss)=><li>{todoss.file}:{todoss.file}
//                 <div>
//                 <button onClick={()=>handledelete(todoss._id)}>delete</button>

//                 </div>
                
//                 </li>)
//             }

//         </ul>

//     </div>
//   )
// }

// export default Todo2




// import React, { useRef } from "react";

// function InputFocusExample() {
//   const inputRef = useRef(null);

//   const handleFocus = () => {
//     inputRef.current.focus(); // Input directly focus aagum
//   };


//   return (
//     <div>
//       <input ref={inputRef} type="text" placeholder="Type here..." />
//       <button onClick={handleFocus}>Focus Input</button>
//     </div>
//   );
// }




//  import React from 'react'
// import { useMemo } from 'react'
// import { useState } from 'react'
 
//  const Todo2 = () => {
//   const [focus,Setfocus]=useState(0)


//    const handle =useMemo(()=>{
//     for(let i=1;i<1000000;i++){}
//     return focus-1
//    },[focus])
//    console.log(focus,'focus......')
//      console.log(handle,'handle......')
//    return (
//      <div>
//       <h1>handle:{handle}</h1>
//       <h1>Focus:{focus}</h1>
//       <button  onClick={()=>Setfocus(f=>f+1)}>click</button> 
//      </div>
//    )
//  }
 
//  export default Todo2
 




// export default InputFocusExample;

// import React, { useState, useMemo } from "react";

// function UseMemoExample() {
//   const [count, setCount] = useState(0);

//   const numbers = [10, 5, 30, 1, 20];

//   // useMemo → sortedNumbers repeat aagama irukum
//   const sortedNumbers = useMemo(() => {
//     console.log("Sorting...");
//     return [...numbers].sort((a, b) => a - b);
//   }, []);
//     console.log("Component Render Aagiduchu!");

//   return (
//     <div style={{ padding: 20 }}>
//       <h2>useMemo Example</h2>

//       <p>Sorted Numbers: {sortedNumbers.join(", ")}</p>

//       <button onClick={() => setCount(count + 1)}>
//         Re-render ({count})
//       </button>
//     </div>
//   );
// }

// export default UseMemoExample;



// import React, { useState, useRef, useEffect } from "react";

// function RenderCounter() {
//   const [count, setCount] = useState(0);
//   const renderCount = useRef(1);

//   useEffect(() => {
//     renderCount.current++;
//     console.log("Rendered:", renderCount.current, "times");
//   });

//   return (
//     <div style={{ padding: 20 }}>
//       <h2>Render Counter Example</h2>

//       <p>Count: {count}</p>
//       <p>Total Renders: {renderCount.current}</p>

//       <button onClick={() => setCount(count + 1)}>Increase</button>
//     </div>
//   );
// }

// export default RenderCounter;




// function Testt() {
//   console.log("👀 Render Start!");

//   useEffect(() => {
//     console.log("✨ Effect after Render");
//   });

//   return <h2>Hello</h2>;
// }
// export default Testt


// import React, { useEffect, useState } from "react";

// const FetchUsers = () => {
//   const [users, setUsers] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);

//   useEffect(() => {
//     let isMounted = true; // helps for cleanup

//     const fetchData = async () => {
//       try {
//         const res = await fetch("https://jsonplaceholder.typicode.com/users");
//         if (!res.ok) throw new Error("API Error");

//         const data = await res.json();

//         if (isMounted) {
//           setUsers(data);
//           setLoading(false);
//         }
//       } catch (err) {
//         if (isMounted) {
//           setError("Something went wrong");
//           setLoading(false);
//         }
//       }
//     };

//     fetchData();

//     // Cleanup function
//     return () => {
//       isMounted = false;
//       console.log("Component unmounted - cleanup done");
//     };
//   }, []);

//   // UI
//   if (loading) return <h2>Loading...</h2>;
//   if (error) return <h2>{error}</h2>;

//   return (
//     <div>
//       <h1>User List:</h1>
//       {users.map((user) => (
//         <h3 key={user.id}>- {user.name}</h3>
//       ))}
//     </div>
//   );
// };

// export default FetchUsers;


 