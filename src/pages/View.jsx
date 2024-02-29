import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { deleteuser, viewuser } from '../action/action'
import { Link } from 'react-router-dom';

function View() {

    let record = useSelector(state => state.crud.user)
    console.log(record);
    let dispatch = useDispatch()

    const remove = (id) => {
        dispatch(deleteuser(id))
    }

    return (
        <div>
            <center>
                <Link to={"/add"}><button type="button" class="btn btn-primary m-2">Add</button></Link>
            </center>
            <div className="container">
                <table class="table">
                    <thead>
                        <tr>
                            <th scope="col">No</th>
                            <th scope="col">Email</th>
                            <th scope="col">Name</th>
                            <th scope="col">Salary</th>
                            <th scope="col">Contact</th>
                            <th scope="col">Password</th>
                            <th scope="col">Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            record && record.map((val, i) => {
                                return (
                                    <tr>
                                        <td>{i + 1}</td>
                                        <td>{val.email}</td>
                                        <td>{val.name}</td>
                                        <td>{val.salary}</td>
                                        <td>{val.contact}</td>
                                        <td>{val.password}</td>
                                        <td>
                                            <Link to={`edit/:${val.id}`}> <button type="button" class="btn btn-success">Edit</button></Link>
                                            <button type="button" class="btn btn-danger m-2" onClick={() => remove(val.id)}>Delete</button>
                                        </td>
                                    </tr>
                                )
                            })
                        }
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default View