import React from "react";
import { useState } from "react";
import './App.css';
import AddIcon from '@material-ui/icons/Add';
import DeleteIcon from '@material-ui/icons/Delete';
import EditOutlinedIcon from '@material-ui/icons/EditOutlined';

const TodoList = () =>{
    const [val, setval] = useState("");
    const [list, setlist] = useState([]);
    const [edittext, setedittext]= useState(true);
    const [editval, setedival]= useState("");

  const plusClick = () => {  
      if(!val){

      }
      else if(val && !edittext){
            setlist(()=>{
                return (
                    list.map((elem)=>{
                        if( elem.id == editval){
                            return {...elem, name:val};
                        }
                        return elem;
                    })
                    
                )
                
            })
            setedittext(true);
            setedival("");
            setval("");
      }
      else{
        const eleObj= {id : new Date().getTime().toString() , name: val}
        setlist((prevVal) => {
          return [...prevVal, eleObj];
       });
       setval("");
      }

  }
  const removeList = (ind) => {  
      setlist((prevVal) => {
         return (
          prevVal.filter((ele)=> {
            return ind!= ele.id;
          })
         );
      });  
      // console.log(ind);
  }

  const editList = (id) =>{
    const editVal= list.find((ele)=>{
        return id == ele.id;
    })
    setedittext(false);
    setedival(id);
    setval(editVal.name);
  }

  const DelAll = () => {  
      setlist([]);  

  }
  
  return (

      <div className='contain'>
          <div className='todoDiv mx-auto align-middle'>
            <h1 >TodoList</h1>
            <div className="d-flex inp_div border px-2 ">
              <input type="text" placeholder="Enter text" className='inputF border-0 position-relative' name="inName" value={val} onChange={(e)=>setval(e.target.value)}/>
              {
                edittext? <AddIcon className='plus p-1 me-1 my-1 position-absolute top-0 end-0' onClick={plusClick}/>: <EditOutlinedIcon className="py-2 addList" onClick={plusClick}/>
              }
            </div>
            <ul className="ps-0">
            {list.map((currEle)=>{
              return (
                <>
                <li className="d-flex justify-content-between border p-1 mt-2 lists align-items-center" key={currEle.id}> 
                  <span className="ps-1">{currEle.name}</span>  
                  <span className="mb-1">
                      <EditOutlinedIcon className="editList me-1 " onClick={()=>editList(currEle.id)}/>
                      <DeleteIcon className='minicon px-1' onClick={()=> removeList(currEle.id)}/>
                  </span>
                  
              </li>
                </>
              );
            })}   
            </ul>
            <div>
                <button className= { list.length==0? "btn btn-outline-light py-1 px-2" : "btn btn-outline-light py-1 px-2 activ"} onClick={DelAll}>Delete all </button>
            </div>
          </div>
      </div>
    
  );
}

export default TodoList;