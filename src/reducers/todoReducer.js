import uuid from 'uuid/v1';
export const todoReducer = (state, action) => {
  switch (action.type) {
    case 'ADD_TODO':
      return [
        ...state,
        { text: action.todo.text, isCompleted: false, id: uuid() }
      ];
    case 'DELETE_TODO':
      return state.filter(todo => todo.id !== action.id);
    default:
      return state;
  }
};
