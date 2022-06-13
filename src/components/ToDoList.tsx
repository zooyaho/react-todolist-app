import CreateToDo from './CreateToDo';
import { useRecoilValue} from 'recoil';
import { toDoSelector, toDoState } from '../atoms';
import ToDo from './ToDo';

const ToDoList = () => {
  // const toDos = useRecoilValue(toDoState);
  // console.log(toDos);

  // wow,,, atom을 가져와서 사용하지 않고 output만 변경된 것을 가져와 출력함.
  const [toDos, Doing, Done] = useRecoilValue(toDoSelector);

  return (
    <div>
      <h1>To Dos</h1>
      <hr />
      <CreateToDo />
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
    </div>
  );
};


export default ToDoList;