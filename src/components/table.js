import React, {Component} from 'react';
import StudentRow from './student_row';
import {formatPostData} from '../helpers';
import { Link } from 'react-router-dom';
import axios from 'axios';


class Table extends Component{
    state={
        students:[]
    }

    componentDidMount(){
        this.getStudentData();
    }

    deleteStudent = async(id) => {
        const formattedID = formatPostData({id:id});//{id} optional can do this because of destructuring

        await axios.post('/server/deletestudent.php', formattedID);


        this.getStudentData();

    }

    async getStudentData(){
        //Call server to get student data
        const resp = await axios.get('/server/getstudentlist.php');
        
        console.log(resp);
        this.setState({
            students: resp.data.data || [] //if resp.data.data is falsey then return empty array
        })
        
    }

    render(){
        const {students}=this.state;
        let studentRows=[];

        if(Array.isArray(students)&& students.length){
            studentRows = students.map((student)=>{
                return <StudentRow delete={this.deleteStudent} key={student.id} student={student}/>;//again, remember these key values gets passed in as a prop
            });
        }else{
            studentRows.push(
                <tr key='no-data'>
                    <td colSpan='4'>
                        <h4 className='center grey-text'>No Student Data Available</h4>
                    </td>
                </tr>
            )
        }
        return(
            <div>
                <h1 className="center">Student Grade Table</h1>

                <div className="row"></div>
                    <div className="col s12 right-align">
                        <Link className='btn blue' to="/add-student">Add Student</Link>
                    </div>
                <table>
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Course</th>
                            <th>Grade</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {studentRows}
                    </tbody>
                </table>
            </div>
        );
    }
}

export default Table;