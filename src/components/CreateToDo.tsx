import { useRecoilState, useSetRecoilState } from 'recoil';
import { useForm } from "react-hook-form";
import { Categories, categoryState, toDoState } from '../atoms';

interface IForm {
  todo: string;
};

const CreateToDo = () => {
  const setToDos = useSetRecoilState(toDoState);
  const { register, handleSubmit, setValue, formState: { errors } } = useForm<IForm>();

  const [category, setCategory] = useRecoilState(categoryState);

  const InputHandler = (event: React.FormEvent<HTMLSelectElement>) => {
    setCategory(event.currentTarget.value as any);
  }
  console.log(category);

  const handleValid = ({todo}: IForm) => {
    setToDos(oldToDos => [{text:todo, id: Date.now() ,category:category},...oldToDos]);
    setValue("todo", ""); // input 요소 reset
  }

  return (
    <form style={{ display: "flex", flexDirection: "column", width: "200px" }} onSubmit={handleSubmit(handleValid)}>
      <select value={category} onInput={InputHandler}>
        <option value={Categories.TO_DO}>To Do</option>
        <option value={Categories.DOING}>Doing</option>
        <option value={Categories.DONE}>Done</option>
      </select>
      <input {...register("todo", { required: "Please write a To Do.", minLength: { value: 5, message: "length is short!" } })} placeholder="Write a to do" />
      <span>{errors?.todo?.message}</span>
      <button>Add</button>
    </form>
  );
};

export default CreateToDo;