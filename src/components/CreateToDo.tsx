import { useSetRecoilState } from 'recoil';
import { useForm } from "react-hook-form";
import { toDoState } from '../atoms';

interface IForm {
  todo: string;
};

const CreateToDo = () => {
  const setToDos = useSetRecoilState(toDoState);
  const { register, handleSubmit, setValue, formState: { errors } } = useForm<IForm>();

  const handleValid = ({todo}: IForm) => {
    // console.log("add to do.", todo);
    setToDos(oldToDos => [{text:todo, id: Date.now() ,category:"TO_DO"},...oldToDos]);
    setValue("todo", ""); // input 요소 reset
  }

  return (
    <form style={{ display: "flex", flexDirection: "column", width: "200px" }} onSubmit={handleSubmit(handleValid)}>
      <input {...register("todo", { required: "Please write a To Do.", minLength: { value: 5, message: "length is short!" } })} placeholder="Write a to do" />
      <span>{errors?.todo?.message}</span>
      <button>Add</button>
    </form>
  );
};

export default CreateToDo;