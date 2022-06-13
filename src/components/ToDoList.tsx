import CreateToDo from './CreateToDo';
import { useRecoilState, useRecoilValue} from 'recoil';
import { categoryState, toDoState } from '../atoms';
import ToDo from './ToDo';
import { SelectHTMLAttributes } from 'react';

const ToDoList = () => {
  // const toDos = useRecoilValue(toDoState);
  // console.log(toDos);
  // const [toDos, setToDos] = useRecoilState(toDoState);
  const [category, setCategory] = useRecoilState(categoryState);

  const InputHandler = (event:React.FormEvent<HTMLSelectElement>)=>{
    const {currentTarget: {value}} = event;
    setCategory(value);
  }
  console.log(category);
  return (
    <div>
      <h1>To Dos</h1>
      <hr />
      <select value={category} onInput={InputHandler}>
        <option value="TO_DO">To Do</option>
        <option value="DOING">Doing</option>
        <option value="DONE">Done</option>
      </select>
      <CreateToDo />
    </div>
  );
};


export default ToDoList;

/* 카테고리 section에 해당하는 todo 출력 */
// wow,,, atom을 가져와서 사용하지 않고 output만 변경된 것을 가져와 출력함.
// const [toDos, Doing, Done] = useRecoilValue(toDoSelector);
/*
<h2>To DO</h2>
<ul>
  {toDos.map((todo) => <ToDo key={todo.id} {...todo} />)}
</ul>
<hr />
<h2>Doing</h2>
<ul>
  {Doing.map((todo) => <ToDo key={todo.id} {...todo} />)}
</ul>
<hr />
<h2>Done</h2>
<ul>
  {Done.map((todo) => <ToDo key={todo.id} {...todo} />)}
</ul>
<hr />
*/