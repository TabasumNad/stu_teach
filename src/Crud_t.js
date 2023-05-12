import React, { useRef, useState } from 'react'
import './App.css'

function Crud_t() {
    const list = [
        {
            id: 1, 
            name: "Sneha K",
            sub: "Maths",
            classe:"10th"
        },
        {
            id: 2, 
            name: "Ram Singh",
            sub: "English",
            classe:"7th"
        },
        {
            id: 3, 
            name: "John Mathew",
            sub: "Science",
            classe:"8th"
        },
        {
            id: 4, 
            name: "Kiran Rao",
            sub: "Social Science",
            classe:"7th"
        },

    ]
    const [lists, setList] = useState(list)
    const [updateState, setUpdateState] = useState(-1)
    return(
        <div className='crud'>
            <div>
            <h3>Faculties Details</h3>
            <AddList setList = {setList }/>
            <form onSubmit={handleSubmit}>
            <table>
            <tr>
    <th>Sr.no</th>
    <th>Name</th>
    <th>Subject</th>
    <th>Teaches</th>
  </tr>
                {
                    lists.map((current) => (
                        updateState === current.id ? <EditList current={current} lists={lists} setList={setList}/> :
                        
                        <tr> <td>{current.id}</td>
                            <td>{current.name}</td>
                            <td>{current.sub}</td>
                            <td>{current.classe}</td>
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
        const sub = event.target.elements.sub.value
        const classe = event.target.elements.classe.value
        const newlist = lists.map((li) => (
            li.id === updateState ? {...li, name:name, sub: sub, classe:classe} : li
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
            li.id === current.id ? {...li, sub :value} : li
        ))

        setList(newlist)
    }
    function handInputrollno(event) {
        const value = event.target.value;
        const newlist = lists.map((li) => (
            li.id === current.id ? {...li, classe :value} : li
        ))

        setList(newlist)
    }
    return(
        <tr>
            {/* <td><input type="text" onChange={handInputid} name='id' value={current.id}/></td> */}
            <td><input type="text" onChange={handInputname} name='name' value={current.name}/></td>
            <td><input type="text" onChange={handInputstd} name='sub' value={current.sub}/></td>
            <td><input type="text" onChange={handInputrollno} name='classe' value={current.classe}/></td>
            <td><button type='submit'>Update</button></td>
        </tr>
    )
}

 function AddList({setList}) {
    const nameRef = useRef()
    const subRef = useRef()
    const classeRef = useRef()

    function handleSubmit(event) {
        event.preventDefault();
        const name = event.target.elements.name.value;
        const sub = event.target.elements.sub.value;
        const classe = event.target.elements.classe.value;
        const newlist = {
            id: 5,
            name,
            sub,
            classe
        }
        setList((prevList)=> {
            return prevList.concat(newlist)
        })
        nameRef.current.value = ""
        subRef.current.value = ""
        classeRef.current.value = ""
    }
    return(
        <form className='addForm' onSubmit={handleSubmit}>
            <input type="text" name="name" placeholder="Enter Name" ref={nameRef}/>
            <input type="text" name="std" placeholder="Enter sub" ref={subRef}/>
            <input type="text" name="rollno" placeholder="Enter class" ref={classeRef}/>
            <button type="submit">Add</button>
        </form>
    )
    
}

export default Crud_t;