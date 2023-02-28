

import React from "react";

const StoreOpTable = ({ hoursOpData, onEdit, onDelete }) => {
    return (
        <table>
            <thead>
                <tr>
                    <th>Day</th>
                    <th>Open</th>
                    <th>Close</th>
                    <th>Action</th>
                </tr>
            </thead>
            <tbody>
                {hoursOpData.map(item => (
                    <tr key={item.id}>
                        <td>{item.Day}</td>
                        <td>{item.Open}</td>
                        <td>{item.Close}</td>
                        <td>
                            <button onClick={() => onEdit(item)}>Edit</button>
                            <button onClick={() => onDelete(item)}>Delete</button>
                        </td>
                    </tr>
                ))}
            </tbody>
        </table>
    );
};

export default StoreOpTable;