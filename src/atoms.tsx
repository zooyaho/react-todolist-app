import {atom} from 'recoil';

export interface IToDo {
  text: string;
  category: "TO_DO" | "DOING" | "DONE";// 카테고리: to do(할일), doing(하고있는일), done(한일)
  id: number;
}

export const toDoState = atom<IToDo[]>({ 
  key: "todo",
  default: []
});