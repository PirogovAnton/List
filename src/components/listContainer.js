import list from "./list";
import { connect } from "react-redux";

const mapStateToProps = (store) => {
    return {
        lists: store.lists
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
    }
}

const listContainer = connect(mapStateToProps, mapDispatchToProps)(list);

export default listContainer;