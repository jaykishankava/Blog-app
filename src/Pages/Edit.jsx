import React, { useEffect, useState } from 'react'
import Header from '../Component/Header'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useLocation, useNavigate } from 'react-router-dom';
import './Edit.css'
const Edit = () => {
        const [title,setTitle]=useState("")
        const [content,setContent]=useState("")
        const [dep,setDep]=useState("")
        const navigation=useNavigate()

        let location=useLocation();
        


        const Getdata= () =>{
            let data=JSON.parse(localStorage.getItem('corse')) || [];
            if(data){
                return data;
            }else{
                return []
            }
        }
        const [record,setRecord]=useState(Getdata())

        
    
    const handle =(e) =>{
        e.preventDefault()

        if(!title || !content || !dep){
            toast.error("all filed reuired..");
            return false;
        }

        let up=record.map((val)=>{
          if(val.id == location.state.id){
            val.title=title,
            val.content=content,
            val.dep=dep;
          }
          return val;
        })
        

       
        localStorage.setItem('corse',JSON.stringify(up));
        toast.success("suceessfully add Update");

        setTimeout(()=>{
            navigation("/view")
        },1000)
        setTitle('')
        setContent('')
        setDep("")

    }

    useEffect(()=>{
      setTitle(location.state.title);
      setContent(location.state.content);
      setDep(location.state.dep);
    },[location])
    return (
        <div>
            <Header />

            <div className="container mt-5">
                <div className="row">
                    <div className="col-lg-6 mx-auto">
                        
                        <form onSubmit={handle} className= ' bg border  p-3 shadow'>
                        <h3 className='mb-3 text-center'>Edit Blog</h3>
                            <div className="mb-3">
                                <label htmlFor="exampleInputEmail1" className="form-label">Task Title</label>
                                <input type="text" className="form-control" onChange={(e) => setTitle(e.target.value)} value={title}  />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="exampleInputEmail1" className="form-label">Content</label>
                                <input type="text" className="form-control" onChange={(e) => setContent(e.target.value)} value={content}  />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="exampleInputPassword1" className="form-label">Task Description</label>
                                <input type="text" className="form-control" onChange={(e) => setDep(e.target.value)} value={dep}  />
                            </div>
                            
                            <button type="submit" className="btn btn-success mx-auto d-block mt-4">Update</button>
                        </form>

                    </div>
                </div>
            </div>
            <ToastContainer
            position="top-right"
            autoClose={1000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
            theme="light"
            transition: Bounce
            />

        </div>
    )
}

export default Edit
