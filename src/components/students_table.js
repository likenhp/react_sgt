import React, {Component} from "react";
import StudentRow from "./student_row";

class StudentsTable extends Component {
    

    render(){
        //const { students } = this.state; //same as const students = this.state.students
        const {col = "s12", list} = this.props;//by adding a value inside the {}, it gives a default value if no value is ever passed in
        const studentElements = list.map((student)=>{
            return (
                //<StudentRow key ={student.id} name = {student.name} course = {student.course} grade={student.grade}/>
                <StudentRow delete={this.props.delete} key ={student.id} {...student}/> //spread operator is taking all key value pairs and spreading them out
            )
        });

        return(
            <div className={`col ${col}`}>
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
                        {studentElements}
                    </tbody>
                </table>
            </div>
        )
    }
}

export default StudentsTable;