import { updateVisibleActionCreator } from "../reducers/listReducer";
import { updateListTextActionCreator } from "../reducers/listReducer";
import { removeListActionCreator } from "../reducers/listReducer";
import { updateCheckActionCreator } from "../reducers/listReducer";
import Text from "./Text";
import { connect } from "react-redux";

const mapStateToProps = (store) => {
    return {
        lists: store.lists
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        visibleChange: (index) => {
            let action = updateVisibleActionCreator(index);
            dispatch(action);
        },
        checkChange: (index) => {
            let action = updateCheckActionCreator(index);
            dispatch(action);
        },
        updateText: (index, text) => {
            let action = updateListTextActionCreator(index, text);
            dispatch(action);
        },
        removeList: (index) => {
            let action = removeListActionCreator(index);
            dispatch(action);
        }
    }
}

const TextContainer = connect(mapStateToProps, mapDispatchToProps)(Text);

export default TextContainer;