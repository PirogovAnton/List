import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const addList = (props) => {

    let newListElement = React.createRef();

    let onAddList = () => {
        props.addList();
        console.log(props.lists);
    }

    let onListChange = () => {
        let text = newListElement.current.value;
        props.updateNewListText(text);
    }

    return (
        <div className="form-group mt-3">
            <textarea className="form-control" onChange={onListChange} ref={newListElement}
                value={props.newListText} />
            <div>
                <button className="btn btn-primary mt-2" onClick={onAddList}>Add List</button>
            </div>
        </div>
    )
}

export default addList;