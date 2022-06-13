import CreateToDo from './CreateToDo';
import { useRecoilValue} from 'recoil';
import { toDoState } from '../atoms';
import ToDo from './ToDo';

const ToDoList = () => {
  const toDos = useRecoilValue(toDoState);

  return (
    <div>
      <h1>To Dos</h1>
      <hr />
      <CreateToDo />
      <ul>
        {toDos.map((todo) => <ToDo {...todo} />)}
      </ul>
    </div>
  );
};


export default ToDoList;