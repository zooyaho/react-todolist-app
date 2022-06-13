import { useRecoilState, useSetRecoilState } from 'recoil';
import { useForm } from "react-hook-form";
import { Categories, categoryState, toDoState } from '../atoms';
import styled from 'styled-components';

const Form = styled.form`
  display: flex;
  justify-content: center;
  select {
    height: 40px;
    text-align: center;
    padding: 5px;
    width: 80px;
    margin-right: 5px;
    border: 2px solid #f0932b;
    border-radius: 10px;
    color: #f0932b;
    outline: none;
    cursor: pointer;
  }
  input {
    margin-right: 5px;
    width: 200px;
    height: 40px;
    border: 2px solid #f0932b;
    border-radius: 10px;
    padding-left: 10px;
    font-size: 16px;
    &:focus {
      outline: none;
      border: 2px solid green;
    }
  }
`;
const InputWrap = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  span {
    font-size: 14px;
    color: green;
    margin-top: 3px;
  }
`;
const Button = styled.button`
  background-color: white;
  border: 2px solid #f0932b;
  border-radius: 10px;
  color: #f0932b;
  height: 40px;
  cursor: pointer;
  &:hover {
    border: 2px solid green;
    color: green;
  }
`;

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
  // console.log(category);

  const handleValid = ({ todo }: IForm) => {
    setToDos(oldToDos => [{ text: todo, id: Date.now(), category: category }, ...oldToDos]);
    setValue("todo", ""); // input 요소 reset
  }

  return (
    <Form onSubmit={handleSubmit(handleValid)}>
      <select value={category} onInput={InputHandler}>
        <option value={Categories.TO_DO}>To Do</option>
        <option value={Categories.DOING}>Doing</option>
        <option value={Categories.DONE}>Done</option>
      </select>
      <InputWrap>
        <input {...register("todo", { required: "Please write a To Do.", minLength: { value: 5, message: "length is short!" } })} placeholder="Write a to do" />
        <span>{errors?.todo?.message}</span>
      </InputWrap>
      <Button>Add</Button>
    </Form>
  );
};

export default CreateToDo;