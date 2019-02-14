//this is functional component because we don't have to worry about updating the state of a row, just rerendering

import React from 'react';
import {Link} from 'react-router-dom';


const StudentRow = (props) => {
    const{name, course, grade, id}=props.student;//es6

    return (
        <tr>
            <td>
                <Link to={`/student/${id}`}>{name}</Link>
            </td>
            <td>{course}</td>
            <td>{grade}</td>
            <td className="center">
                <button onClick={() => {props.delete(id)}} className='btn btn-small red darken-2'>Delete</button>
            </td>
        </tr>
    );
}

export default StudentRow;
