import React from "react";

export default props => {
    return(
        <tr>
            <td>{props.name}</td>
            <td>{props.course}</td>
            <td>{props.grade}</td>
            <td>
                <button onClick={()=>{props.delete(props.id)}} className="btn btn-floating red darken-4">
                    <i className="material-icons">delete_forever</i>
                </button>
            </td>
        </tr>
    );
}