import React, {Component} from 'react';
import studentData from '../data/get_all_students';
import StudentRow from './student_row';


class Table extends Component{

    state={
        students:[]
    }

    componentDidMount(){
        this.getStudentData();
    }

    getStudentData(){
        //Call server to get student data

        this.setState({
            students: studentData
        });
    }

    render(){
        const studentRows = this.state.students.map((student)=>{
            return <StudentRow key={student.id} student={student}/>;//again, remember these key values gets passed in as a prop
        });

        return(
            <table>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Course</th>
                        <th>Grade</th>
                    </tr>
                </thead>
                <tbody>
                    {studentRows}
                </tbody>
            </table>
        );
    }
}

export default Table;