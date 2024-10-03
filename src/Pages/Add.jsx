import React, { useState } from 'react'
import Header from '../Component/Header'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from 'react-router-dom';
import './Add.css'
const Add = () => {
    const [title, setTitle] = useState("");
    const [content, setContent] = useState("");
    const [dep, setDep] = useState("")
    const navigation = useNavigate();

    const Getdata = () => {
        let data = JSON.parse(localStorage.getItem('corse')) || [];
        if (data) {
            return data;
        } else {
            return [];
        }
    };

    const [record, setRecord] = useState(Getdata());

    const handle = (e) => {
        e.preventDefault();

        if (!title || !dep || !content) {
            toast.error("All fields are required..");
            return false;
        }

        let obj = {
            id: Math.floor(Math.random() * 10000),
            title,
            dep,
            content,
        };

        let old = [...record, obj];
        localStorage.setItem('corse', JSON.stringify(old));
        toast.success("Successfully added Task");

        setTimeout(() => {
            navigation("/view");
        }, 1000);

        setTitle('');
        setDep("");
        setContent("");
    };

    return (
        <div>
            <Header />

            <div className=" container mt-5">
                <div className="row">
                    <div className=" col-lg-6 mx-auto">
                        
                        <form onSubmit={handle} className=' bg border p-3 shadow bg-light'>
                            <h3 className='mb-3 text-center'>Add Blog</h3>
                            <div className="mb-3">
                                <label htmlFor="name" className="form-label">Blog Title</label>
                                <input type="text" className="form-control" onChange={(e) =>  setTitle(e.target.value)} value={title} />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="title" className="form-label">Content</label>
                                <input type="text" className="form-control" onChange={(e) => setContent(e.target.value)} value={content} />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="description" className="form-label">Blog Description</label>
                                <input type="text" className="form-control" onChange={(e) => setDep(e.target.value)} value={dep} />
                            </div>
                            
                            <button type="submit" className="btn btn-success mx-auto d-block mt-4">Submit</button>
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
            />
        </div>
    );
};

export default Add;
