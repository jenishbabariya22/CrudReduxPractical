import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import { adduser } from '../action/action'

function Add() {
    const [email, setemail] = useState("")
    const [password, setpassword] = useState("")
    const [name, setname] = useState("")
    const [city, setcity] = useState("")
    const [contact, setcontact] = useState("")
    const [salary, setsalary] = useState("")

    let id = Math.floor(Math.random() * 100)
    let dispatch = useDispatch()

    const submit = () => {
        let obj = { email, password, id, name, city, contact, salary }
        dispatch(adduser(obj))

        setemail("")
        setcity("")
        setcontact("")
        setname("")
        setsalary("")
        setpassword("")
    }

    return (
        <div>
            <center>
                <Link to={"/"}><button type="button" class="btn btn-primary m-2">View</button></Link>
            </center>
            <div className="container" style={{ display: "flex", justifyContent: "center" }}>
                <form style={{ background: "lightblue", padding: "20px", margin: "20px", width: "700px" }}>
                    <div className="mb-3">
                        <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
                        <input type="email" value={email} onChange={(e) => setemail(e.target.value)} className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                        <label htmlFor="exampleInputEmail1" className="form-label">Name</label>
                        <input type="text" value={name} onChange={(e) => setname(e.target.value)} className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                        <label htmlFor="exampleInputEmail1" className="form-label">Contact</label>
                        <input type="text" value={contact} onChange={(e) => setcontact(e.target.value)} className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                        <label htmlFor="exampleInputEmail1" className="form-label">City</label>
                        <input type="text" value={city} onChange={(e) => setcity(e.target.value)} className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                        <label htmlFor="exampleInputEmail1" className="form-label">Salary</label>
                        <input type="number" value={salary} onChange={(e) => setsalary(e.target.value)} className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                        <input type="password" value={password} onChange={(e) => setpassword(e.target.value)} className="form-control" id="exampleInputPassword1" />
                    </div>
                    <div className="mb-3 form-check">
                        <input type="checkbox" className="form-check-input" id="exampleCheck1" />
                        <label className="form-check-label" htmlFor="exampleCheck1">Check me out</label>
                    </div>
                    <button type="button" onClick={submit} className="btn btn-primary">Submit</button>
                </form>

            </div>
        </div>
    )
}

export default Add