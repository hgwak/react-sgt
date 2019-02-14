import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import axios from 'axios';
import {formatPostData} from '../helpers'

class ViewStudent extends Component{
    state={
        student:{}
    }

    async componentDidMount(){
        const studentID = formatPostData({
            id: this.props.match.params.id
        });
        const studentData = await axios.post('/server/getstudentdetails.php', studentID);
        this.setState({
            student: studentData.data.data
        })
    }

    render(){
        const {name, course}=this.state.student;//come back and display more data


        return(
            <div>
                <h1 className="center">Student Details</h1>
                <div className="row">
                    <div className="col s12 right-align">
                        <Link to='/' className="btn blue">Home</Link>
                    </div>
                </div>

                <h1 className="center">{name}</h1>
                <h5 className="center">{course}</h5>
            </div>
        );
    }
}
export default ViewStudent;