import React from "react";

class LocksListElement extends React.Component{
    render()
    {
        const lock=this.props.lock;
        return(
            <tr key={lock.id}>
                <td>#{lock.id}</td>
                <td>{lock.lock_name}</td>
            </tr>
        );
    }
}

export default LocksListElement;