import { atom, useRecoilState } from 'recoil';
import { useForm } from "react-hook-form";

interface IForm {
  todo: string;
};
interface IToDo {
  text: string;
  category: "TO_DO" | "DOING" | "DONE";// 카테고리: to do(할일), doing(하고있는일), done(한일)
  id: number;
}

const toDoState = atom<IToDo[]>({ key: "todo", default: [], });

const ToDoList = () => {
  const [toDos, setToDos] = useRecoilState(toDoState);
  const { register, handleSubmit, setValue, formState: { errors } } = useForm<IForm>();

  const handleValid = ({todo}: IForm) => {
    // console.log("add to do.", todo);
    setToDos(oldToDos => [{text:todo, id: Date.now() ,category:"TO_DO"},...oldToDos]);
    setValue("todo", ""); // input 요소 reset
  }
  console.log(toDos);

  return (
    <div>
      <h1>To Dos</h1>
      <hr />
      <form style={{ display: "flex", flexDirection: "column", width: "200px" }} onSubmit={handleSubmit(handleValid)}>
        <input {...register("todo", { required: "Please write a To Do.", minLength: { value: 5, message: "length is short!" } })} placeholder="Write a to do" />
        <span>{errors?.todo?.message}</span>
        <button>Add</button>
      </form>
      <ul>{toDos.map((todo)=><li key={todo.id}>{todo.text}</li>)}</ul>
    </div>
  );
};


export default ToDoList;