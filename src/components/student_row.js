//this is functional component because we don't have to worry about updating the state of a row, just rerendering

import React from 'react';

const StudentRow = (props) => {
    console.log('Student:', props.student)

    const{name, course, grade}=props.student;//es6

    return (
        <tr>
            <td>{name}</td>
            <td>{course}</td>
            <td>{grade}</td>
        </tr>
    );
}

export default StudentRow;