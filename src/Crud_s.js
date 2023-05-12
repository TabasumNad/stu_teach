import React, { useRef, useState } from 'react'
import './App.css'

function Crud_s() {
    const list = [
        {
            id: 1, 
            name: "Rakesh Singh",
            std: "7th",
            rollno:"24"
        },
        {
            id: 2, 
            name: "Suresh Reddy",
            std: "8th",
            rollno:"28"
        },
        {
            id: 3, 
            name: "Rakesh Singh",
            std: "8th",
            rollno:"20"
        },
        {
            id: 4, 
            name: "Rajni Naik",
            std: "8th",
            rollno:"21"
        },
    ]
    const [lists, setList] = useState(list)
    const [updateState, setUpdateState] = useState(-1)
    return(
        <div className='crud'>
            <div>
            <h3>Student Details</h3>
            <AddList setList = {setList }/>
            <form onSubmit={handleSubmit}>
            <table>
            <tr>
    <th>Sr.no</th>
    <th>St_Name</th>
    <th>Standard</th>
    <th>RollNo</th>
  </tr>
                {
                    lists.map((current) => (
                        updateState === current.id ? <EditList current={current} lists={lists} setList={setList}/> :
                        
                        <tr> <td>{current.id}</td>
                            <td>{current.name}</td>
                            <td>{current.std}</td>
                            <td>{current.rollno}</td>
                            <td>
                                <button className='edit' onClick={() => handleEdit(current.id)}>Edit</button>
                                </td>
                                <td>

                                <button className='delete' type='button' onClick={() => handleDelete(current.id)}>Delete</button>
                            </td>
                        </tr>
                    ))
                }
            </table>
            </form>
            </div>
        </div>
    )

    function handleEdit(id) {
        setUpdateState(id)
    }
    function handleDelete(id) {
        const newlist = lists.filter((li) => li.id !== id)
        setList(newlist)
    }
    function handleSubmit(event) {
        event.preventDefault()
        // const id = event.target.elements.id.value
        const name = event.target.elements.name.value
        const std = event.target.elements.std.value
        const rollno = event.target.elements.rollno.value
        const newlist = lists.map((li) => (
            li.id === updateState ? {...li, name:name, std: std, rollno:rollno} : li
        ))

        setList(newlist)
        setUpdateState(-1)
    }
}

function EditList({current, lists, setList}) {
    // function handInputid(event) {
    //     const value = event.target.value;
    //     const newlist = lists.map((li) => (
    //         li.id === current.id ? {...li, id :value} : li
    //     ))

    //     setList(newlist)
    // }
    function handInputname(event) {
        const value = event.target.value;
        const newlist = lists.map((li) => (
            li.id === current.id ? {...li, name :value} : li
        ))

        setList(newlist)
    }
    function handInputstd(event) {
        const value = event.target.value;
        const newlist = lists.map((li) => (
            li.id === current.id ? {...li, std :value} : li
        ))

        setList(newlist)
    }
    function handInputrollno(event) {
        const value = event.target.value;
        const newlist = lists.map((li) => (
            li.id === current.id ? {...li, rollno :value} : li
        ))

        setList(newlist)
    }
    return(
        <tr>
            {/* <td><input type="text" onChange={handInputid} name='id' value={current.id}/></td> */}
            <td><input type="text" onChange={handInputname} name='name' value={current.name}/></td>
            <td><input type="text" onChange={handInputstd} name='std' value={current.std}/></td>
            <td><input type="text" onChange={handInputrollno} name='rollno' value={current.rollno}/></td>
            <td><button type='submit'>Update</button></td>
        </tr>
    )
}

 function AddList({setList}) {
    const nameRef = useRef()
    const stdRef = useRef()
    const rollnoRef = useRef()

    function handleSubmit(event) {
        event.preventDefault();
        const name = event.target.elements.name.value;
        const std = event.target.elements.std.value;
        const rollno = event.target.elements.rollno.value;
        const newlist = {
            id: 5,
            name,
            std,
            rollno
        }
        setList((prevList)=> {
            return prevList.concat(newlist)
        })
        nameRef.current.value = ""
        stdRef.current.value = ""
        rollnoRef.current.value = ""
    }
    return(
        <form className='addForm' onSubmit={handleSubmit}>
            <input type="text" name="name" placeholder="Enter Name" ref={nameRef}/>
            <input type="text" name="std" placeholder="Enter std" ref={stdRef}/>
            <input type="text" name="rollno" placeholder="Enter rollno" ref={rollnoRef}/>
            <button type="submit">Add</button>
        </form>
    )
}

export default Crud_s;