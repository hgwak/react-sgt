import React,{Component} from 'react';
import 'materialize-css/dist/css/materialize.min.css';
import 'materialize-css/dist/js/materialize.min';
import '../assets/css/app.scss';
import AddStudent from './add_student';
import Table from './table';
import {Route} from 'react-router-dom';
import ViewStudent from './view_student';



class App extends Component{

    //'/' - this sginifies the home route
    render(){
        return(
            <div className="container">
                <Route exact path='/' component={Table}/>
                <Route path='/add-student' component={AddStudent}/>
                <Route path='/student:id' component={ViewStudent}/>
            </div>
        );
    }
}
export default App;
