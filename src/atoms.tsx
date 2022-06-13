import {atom, selector} from 'recoil';

export interface IToDo {
  text: string;
  category: "TO_DO" | "DOING" | "DONE";// 카테고리: to do(할일), doing(하고있는일), done(한일)
  id: number;
}

export const toDoState = atom<IToDo[]>({ 
  key: "todo",
  default: []
});

/* 각각의 카테고리별로 todo를 분리하여 state에 저장할것임. */
export const toDoSelector = selector({
  // 인자로 객체가 들어가며, 객체의 프로퍼티로 key와 get함수가 포함됨.
  // get메서드는 인자로 get함수가 들어감...이게모야
  // get(state)함수는 인자로 state를 받아 사용함.
  // state자체를 바꾸는 것이 아니라 output을 바꾸는 것
  key: "toDoSelector",
  get:({get})=>{
    const toDos = get(toDoState);
    // [ [{},{}..], [{},{}..], [{},{}..] ] 이런 형태로 반환함.
    return ([
      toDos.filter(toDo=> toDo.category === "TO_DO"),
      toDos.filter(toDo=> toDo.category === "DOING"),
      toDos.filter(toDo=> toDo.category === "DONE")
    ]);
  }
});