import React from "react"

const storeOpPull = ({ hoursOpData, onEdit, onDelete}) => {
  
    return(
    <table>
        <thead>
        <tr>
            {/* <th>Id</th> */}
            <th>Day</th>
            <th>Open</th>
            <th>Close</th>
            <th>Action</th>
        </tr>
        </thead>
        <tbody>
          {hoursOpData.map(val => (
            <tr key={val.id}>
             
                    <td>{val.Day}</td>
                    <td>{val.Close}</td>
                    <td>{val.Open}</td>
                    <td>
                        <button onClick={() => onEdit(val)}>Edit</button>
                        <button onClick={() => onDelete(val)}>Delete</button>
                    </td>
                </tr>
            ))}
       </tbody>
    </table>
   )
    
 
}
export default storeOpPull