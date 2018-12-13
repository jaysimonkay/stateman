import { ITodo } from './todo';
import {
  ADD_TODO,
  TOGGLE_TODO,
  REMOVE_TODO,
  REMOVE_ALL_TODOS
} from './actions';

export interface IAppState {
  todos: ITodo[];
  lastUpdate: Date;
}
export const INITIAL_STATE: IAppState = {
  todos: [],
  lastUpdate: null
};
export function rootReducer(state, action) {
  switch (action.type) {
    case ADD_TODO:
      action.todo.id = state.todos.length + 1;
      return Object.assign({}, state, {
        todos: state.todos.concat(Object.assign({}, action.todo)),
        lastUpdate: new Date()
      });
    case TOGGLE_TODO:
    case REMOVE_TODO:
    case REMOVE_ALL_TODOS:
  }
  return state;
}
