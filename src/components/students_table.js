import React, {Component} from "react";


class StudentsTable extends Component {
    

    render(){
        //const { students } = this.state; //same as const students = this.state.students
        const {col = "s12", list} = this.props;//by adding a value inside the {}, it gives a default value if no value is ever passed in
        const studentElements = list.map((student)=>{
            return (
                <tr key={student.id}>
                    <td>{student.name}</td>
                    <td>{student.course}</td>
                    <td>{student.grade}</td>
                </tr>
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