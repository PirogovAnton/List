import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const Text = (props) => {

    let textElement = React.createRef();

    let onVisibleChange = () => {
        props.visibleChange(props.idList);
    }

    let onTextChange = () => {
        let text = textElement.current.value;
        props.updateText(props.idList, text);
    }
    let remove = () => {
        props.removeList(props.idList)
    }
    let check = () => {
        props.checkChange(props.idList)
    }

    return (
        <div>
            {
                props.visible
                    ? <div className="row mb-2 d-flex align-items-center">
                        <input className=" mr-2" type="checkbox" onChange={check} />
                        <div onClick={onVisibleChange}>
                            {props.text}
                        </div>
                        <button className="btn-sm btn-outline-danger ml-3" onClick={remove}>remove List</button>
                    </div>

                    : <div className="row mb-2 d-flex align-items-center">
                        <input className="" value={props.text} onChange={onTextChange} ref={textElement} />
                        <button className="btn-sm btn-outline-danger ml-3" onClick={remove}>remove List</button>
                    </div>
            }
        </div>
    )
}
export default Text;