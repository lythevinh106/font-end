import { SET_TODO_INPUT, ADD_TODO_INPUT } from "./Constants";

export const SetTodoInput = (payload) => ({
  type: SET_TODO_INPUT,

  payload,
});

export const AddTodoInput = (payload) => ({
  type: ADD_TODO_INPUT,

  payload,
});
