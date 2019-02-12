import React,{Component} from 'react';
import 'materialize-css/dist/css/materialize.min.css';
import 'materialize-css/dist/js/materialize.min';
import '../assets/css/app.scss';
import axios from 'axios';
import AddStudent from './add_student';
import Table from './table';
import studentData from '../data/get_all_students';
import {randomString} from '../helpers'

console.log(randomString());

class App extends Component{
    state={
        students:[]
    }

    componentDidMount(){
        this.getStudentData();
    }

    deleteStudent = (id) => {
        const indexToDelete = this.state.students.findIndex((student) =>{
            return student.id ===id;
        });

        if(indexToDelete >= 0){
            const tempStudents = this.state.students.slice();
            tempStudents.splice(indexToDelete,1);
            this.setState({
                students:tempStudents
            });
        }
    }

    addStudent = (student) =>{
        student.id = randomString();
        this.setState({
            students: [...this.state.students, student]
        });
    }

    getStudentData(){
        //Call server to get student data
        axios.get('http://localhost/server/getstudentlist.php').then((response)=>{
            this.setState({
                students: response.data.data
            });
        
        });

        
    }

    render(){
        return(
            <div>
                <h1 className="center">SGT</h1>
                <div className="row">
                    <div className="col s12 m8">
                        <Table deleteStudent={this.deleteStudent} studentList={this.state.students}/>
                    </div>
                    <div className="col s12 m4">
                        <AddStudent add={this.addStudent}/> {/*cannot take data from AddStudent and send it into Table directly */}
                    </div>
                </div>

            </div>
        );
    }
}
export default App;
