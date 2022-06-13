import CreateToDo from './CreateToDo';
import { useRecoilValue } from 'recoil';
import { toDoSelector } from '../atoms';
import ToDo from './ToDo';

const ToDoList = () => {
  const toDos = useRecoilValue(toDoSelector);
  
  return (
    <div>
      <h1>To Dos</h1>
      <hr />
      <CreateToDo />
      {toDos?.map((toDo) => (<ToDo key={toDo.id} {...toDo} />))}
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