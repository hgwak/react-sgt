import React,{Component} from 'react';
import 'materialize-css/dist/css/materialize.min.css';
import 'materialize-css/dist/js/materialize.min';
import '../assets/css/app.scss';
import axios from 'axios';
import AddStudent from './add_student';
import Table from './table';
import {formatPostData} from '../helpers'


class App extends Component{
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




        // old way to do it
        // const indexToDelete = this.state.students.findIndex((student) =>{
        //     return student.id ===id;
        // });

        // if(indexToDelete >= 0){
        //     const tempStudents = this.state.students.slice();
        //     tempStudents.splice(indexToDelete,1);
        //     this.setState({
        //         students:tempStudents
        //     });
        // }
    }

    addStudent = async (student) =>{
        const formattedStudent = formatPostData(student);

        await axios.post('/server/createstudent.php', formattedStudent);
        
        this.getStudentData();
        // student.id = randomString();

        // //we don't want to falsely show that something was added to the server without confirmation from the server
        // this.setState({
        //     students: [...this.state.students, student]
        // });
    }

    async getStudentData(){
        //Call server to get student data
        const resp = await axios.get('/server/getstudentlist.php');
        
        console.log(resp);
        this.setState({
            students: resp.data.data || [] //if resp.data.data is falsey then return empty array
        })

        // if(resp.data.success){
        //     this.setState({
        //         students:resp.data.data
        //     });
        // }else{
        //     this.setState({
        //         students:[]
        //     })
        // }
        // axios.get('http://localhost/server/getstudentlist.php').then((response)=>{
        //     this.setState({
        //         students: response.data.data
        //     });
        
        // });

        
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
