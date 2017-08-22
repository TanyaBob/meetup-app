const initState = {
    meetups: [],
    meetupItem: {
        id: 0,
        name: "",
        date: "",
        isComplete: false,
        place: ""
    },
    searchInput: '',
    modalItemAdd: false,
    modalItemDelete: false,
    checkedAll: false
};

const ITEM_ADD = 'ITEM_ADD';
const ITEM_DELETE = 'ITEM_DELETE';
const ITEM_SELECT = 'ITEM_SELECT';
const ITEMS_SELECT_ALL = 'ITEMS_SELECT_ALL';

const MODAL_ADD_TOGGLE = 'MODAL_ADD_TOGGLE';
const MODAL_DELETE_TOGGLE = 'MODAL_DELETE_TOGGLE';
const CURRENT_SEARCH = 'CURRENT_SEARCH';

export const updateSearch = (val) => ({type: CURRENT_SEARCH, payload: val});
export const toggleModalAdd = () => ({type: MODAL_ADD_TOGGLE});
export const toggleModalDelete = () => ({type: MODAL_DELETE_TOGGLE});
export const addItemToList = (newItem) => ({type: ITEM_ADD, payload: newItem});
export const deleteItems = () => ({type: ITEM_DELETE});
export const toggleItemSelect = (id) => ({type: ITEM_SELECT, payload: id});
export const toggleAllItemsSelect = (val) => ({type: ITEMS_SELECT_ALL, payload: val});

export const meetupsReducer = (state = initState, action) => {
    switch (action.type) {
        case ITEM_ADD:
            return {
                ...state,
                meetups: state.meetups.concat(action.payload),
                meetupItem: {
                    id: 0,
                    name: "",
                    date: "",
                    isComplete: false,
                    place: ""
                },
                modalItemAdd: false
            };
        case ITEM_DELETE:
            return {
                ...state,
                meetups: state.meetups.filter(t => t.isComplete === false)
            };
        case MODAL_ADD_TOGGLE:
            return {
                ...state,
                modalItemAdd: !state.modalItemAdd
            };
        case MODAL_DELETE_TOGGLE:
            return {
                ...state,
                modalItemDelete: !state.modalItemDelete
            };
        case ITEM_SELECT:
            return {
                ...state,
                meetups: state.meetups
                    .map(item => item.id === action.payload ?
                        Object.assign(item, item.isComplete = !item.isComplete) : item)
            };
        case ITEMS_SELECT_ALL:
            return {
                ...state,
                meetups: state.meetups
                    .map(item => Object.assign(item, item.isComplete = action.payload))
            };
        case CURRENT_SEARCH:
            return {
                ...state,
                searchInput: action.payload
            };
        default:
            return state;
    }
};
