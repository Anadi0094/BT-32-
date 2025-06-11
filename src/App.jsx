import React, { useRef, useState } from 'react';
 
// function App(){
//   const [count, setCount]=useState(0);
//   useEffect(()=>{
//     console.log("component mounted")
//   },[count]);
//   return (<div>
//     <p> You clicked {count} times.</p>
//     <button onClick={()=>{
//       setCount(count+1)
//     }}>Click Me Please
//     </button>
//   </div>)
// }
// export default App








function App(){
  const inputRef=useRef(null);
  const handlerClick=()=>{
    inputRef.current.focus();
  }
  return(<div>
    <input ref = {inputRef} type='text'
    placeholder = "Type something!!!"/>
    <button onClick={handlerClick}>Click me</button>
  </div>)
}
export default App
