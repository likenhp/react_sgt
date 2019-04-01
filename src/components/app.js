import "materialize-css/dist/css/materialize.min.css";
import "materialize-css/dist/js/materialize.min";
import '../assets/css/app.scss';
import React, {Component} from 'react';
import axios from "axios";
import StudentsTable from "./students_table"
import AddStudent from "./add_student";

class App extends Component{
    state = {
        students: [],
        error: ""
    }

    addStudent = async (student) => {
        await axios.post("/api/grades", student);
        this.getStudentData();

        // student.id = id++
        // this.setState({
        //     students: [...this.state.students, student] 
        // });
    }

    deleteStudent = async (id) => {
        await axios.delete(`/api/grades/${id}`);
        this.getStudentData();
        
        // const studentsCopy = this.state.students.slice(); 
        //slicing with no value makes a copy of the array

        // const index = studentsCopy.findIndex((student)=>{
        //     return student.id === id;
        // });

        // if(index >= 0){
        //     studentsCopy.splice(index, 1);

        //     this.setState({
        //         students: [...studentsCopy]
        //     })
        // }
    }

    componentDidMount(){
        this.getStudentData();
    }

    async getStudentData(){
        //Call server here

        try{
            const resp = await axios.get("/api/grades");

            this.setState({
                students: resp.data.data
            });
        } catch(err){
            console.log("Error getting data:", err.message);

            this.setState({
                error: "Error retrieving student data"
            });
        }


        /* Axios method
        axios.get('http://localhost:3001/api/gradesd').then((resp) =>{
            console.log("Server Response", resp);

            this.setState({
                students: resp.data.data
            });
        }).catch((err)=>{
            console.log("Server Error with getting Server data", err);

            this.setState({
                error: "Error retrieving student data"
            })
        });
        */
    }

    render(){
        return(
            <div>
                <h1 className="center"> React SGT</h1>
                <h5 className="red-text text-darken-4">{this.state.error}</h5>
                <div className="row">
                    <StudentsTable col="s12 m8" delete={this.deleteStudent} list={this.state.students}/>
                    <AddStudent col="s12 m4" add={this.addStudent}/>
                </div>
            </div>
        );
    }
}
//App component should have the add functionality and not the AddStudent component
//App then gives that ability to ther other components
export default App;
