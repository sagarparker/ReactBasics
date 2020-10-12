import React from 'react'

const Employee = (props) => {
    const {f_name,l_name : last_name} = props;
    return(
        <React.Fragment>
            <h3>Employee : {f_name} {last_name}</h3>
        </React.Fragment>
    )
}

 export default Employee;