export interface Todo {
  id: number;
  title: string;
  status: string;
}
export type Todos = Todo[];

export interface TodoItem {
  key: number;
  todo: Todo;
}

export interface Action {
  type: string;
  payload: (Todos | string);
}

export interface InitData {
  id: number;
  title: string;
  status: string;
}
export type InitDatas = InitData[];