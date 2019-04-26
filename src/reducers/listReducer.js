let initialState = {
  lists: [],
  newListText: '',
};
let idList = 0;

const listReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD-LIST": {
      let newList = {
        id: idList,
        text: state.newListText,
        check: false,
        visible: true
      };
      let stateCopy = { ...state };
      stateCopy.lists = [...state.lists];
      stateCopy.lists.push(newList);
      stateCopy.newListText = '';
      idList++;
      return stateCopy;
    };
    case "UPDATE-NEW-LIST-TEXT": {
      let stateCopy = { ...state };
      stateCopy.lists = [...state.lists];
      stateCopy.newListText = action.newText;
      return stateCopy;
    };
    case "UPDATE-LIST-CHECK": {
      let stateCopy = { ...state };
      stateCopy.lists = [...state.lists];
      stateCopy.lists.forEach((element, index) => {
        if (element.id === action.idList) {
          element.check = !element.check;
        }
      });
      return stateCopy;
    };
    case "UPDATE-LIST-TEXT": {
      let stateCopy = { ...state };
      stateCopy.lists = [...state.lists];
      stateCopy.lists.forEach((element, index) => {
        if (element.id === action.idList) {
          element.text = action.newText;
        }
      });
      return stateCopy;
    };
    case "REMOVE-LIST": {
      let indexList;
      let stateCopy = { ...state };
      stateCopy.lists = [...state.lists];
      stateCopy.lists.forEach((element, index) => {
        if (element.id === action.idList) {
          indexList = index;
        }
      });
      stateCopy.lists.splice(indexList, 1);
      return stateCopy;
    };
    case "VISIBLE": {
      let stateCopy = { ...state };
      stateCopy.lists = [...state.lists];
      stateCopy.lists.forEach((element, index) => {
        if (element.id === action.idList) {
          element.visible = false;
        }
        else {
          element.visible = true;
        }
      });
      console.log(stateCopy.lists);
      return stateCopy;
    };
    default:
      return state;
  }
}
export const addListActionCreator = () => ({ type: "ADD-LIST" })

export const updateNewListTextActionCreator = (text) =>
  ({ type: "UPDATE-NEW-LIST-TEXT", newText: text })

export const updateVisibleActionCreator = (idList) =>
  ({ type: "VISIBLE", idList: idList })

export const updateCheckActionCreator = (idList) =>
  ({ type: "UPDATE-LIST-CHECK", idList: idList })

export const removeListActionCreator = (idList) =>
  ({ type: "REMOVE-LIST", idList: idList })

export const updateListTextActionCreator = (idList, text) =>
  ({ type: "UPDATE-LIST-TEXT", idList: idList, newText: text })

export default listReducer;