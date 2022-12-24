import React from 'react'
import { useState } from 'react';
function Mytodo() {
    const[input,setInput]=useState("");
    const[list,setList]=useState([]);

    const inputfun=(event)=>{
      setInput(event.target.value);
    };

    const add =()=>{
        setList([...list,input]);
        setInput("");
    }
    const delete_task =(id)=>{
      const narr= list.filter((val,idx)=>{
        return id!=idx && val;
      });
      setList(narr);
        };
        
        
        const top=(id)=>{
            const narr=list.filter((x,idx)=>{
                return id!=idx && x;
            });
            setList([list[id], ...narr]);
        };

        const edit=(val)=>{
            console.log(val);
            setInput(val);
            const arr=list.filter((item)=> item!=val);
            setList(arr);
        }
        const [datess, setdatess] = useState(0);
        function dates(){
            const cd= new Date();
            const dd=cd.getDate();
            var mm=cd.getMonth();
            const arr=["January","February","March","April","May","June","July","August","September","October","November","December"];
            const yy=cd.getFullYear();
            setdatess(arr[mm]+" "+dd+","+yy);
        }
      
    React.useEffect(() => {
      dates()
    }, []);
    
  return (
    <div className='main'>
    <div className='container'>
        <div className='heading'>
        <h1 className='head'>{datess}</h1>
        </div>
    <input type="text" placeholder='        Add Task' className='task' onChange={inputfun} value={input}></input>
    <button onClick={add} className="add_btn">+</button>

    <div>
        <ol>
        { list 
        && list.map((val,index)=> {
            return (
            <div className='listbox'><li className='list_style'>
            <button className='del' onClick={()=>{delete_task(index)}} key={index} id={index}>X</button>
            <button className='top' onClick={()=>{top(index);}}>🔝</button>
            <button className='edit' onClick={()=>{edit(val);}}>🖋️</button>
            {val}
            </li>
            </div>
    
             )}
             )} 
    </ol>
        </div>

        {/* <div>{
            list && list.map((x,index)=>{
                return(<div className='list' key={index} onclick={()=>{top(index);}}>{x}</div>);
            })
            }

        </div> */}
     </div> 
    </div>
    );
}    


export default Mytodo