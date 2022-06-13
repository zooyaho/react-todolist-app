import { useForm } from "react-hook-form";

interface IForm {
  todo: string
};

const ToDoList = () => {
  const { register, handleSubmit,setValue, formState: { errors } } = useForm<IForm>();
  const handleValid = (data: IForm) => {
    console.log("add to do.", data.todo);
    setValue("todo","");
  }
  return (
    <div>
      <form style={{ display: "flex", flexDirection: "column", width: "200px" }} onSubmit={handleSubmit(handleValid)}>
        <input {...register("todo", { required: "Please write a To Do.", minLength: { value: 5, message: "length is short!" } })} placeholder="Write a to do" />
        <span>{errors?.todo?.message}</span>
        <button>Add</button>
      </form>
    </div>
  );
};


export default ToDoList;