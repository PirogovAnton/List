import { addListActionCreator, updateNewListTextActionCreator, updateVisibleActionCreator } from "../reducers/listReducer";
import addList from "./addList";
import { connect } from "react-redux";

const mapStateToProps = (store) => {
    return {
        lists: store.lists,
        newListText: store.newListText
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        updateNewListText: (text) => {
            let action = updateNewListTextActionCreator(text);
            dispatch(action);
        },
        addList: () => {
            dispatch(addListActionCreator());
        },
        updateVisible: (index) => {
            let action = updateVisibleActionCreator(index);
            dispatch(action);
        }
    }
}

const addListContainer = connect(mapStateToProps, mapDispatchToProps)(addList);

export default addListContainer;