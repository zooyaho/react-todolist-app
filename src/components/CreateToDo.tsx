import { useRecoilState, useSetRecoilState } from 'recoil';
import { useForm } from "react-hook-form";
import { Categories, categoryState, IToDo, toDoState } from '../atoms';
import styled from 'styled-components';
import { useEffect, useState } from 'react';

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
  const [category, setCategory] = useRecoilState(categoryState);
  const [localData, setLocalData] = useState<IToDo[]>();
  const { register, handleSubmit, setValue, formState: { errors } } = useForm<IForm>();
  let randomId = 0;

  useEffect(() => {
    // console.log(localData);
    if (localData) {
      // localData가 있을 경우 localStorage 업데이트
      window.localStorage.setItem("toDos", JSON.stringify(localData));
    }
  }, [localData]);

  /* 카테고리 state 설정 핸들러 */
  const InputHandler = (event: React.FormEvent<HTMLSelectElement>) => {
    setCategory(event.currentTarget.value as any);
  }

  /* handleSubmit의 콜백함수 */
  const handleValid = ({ todo }: IForm) => {
    // toDo id 생성
    randomId = Math.floor(Math.random() * 10000);

    // toDoState에 저장
    setToDos((oldToDos) => {
      setLocalData([{ text: todo, id: randomId, category: category },
      ...oldToDos]);
      // console.log("localData 추가 됨.", localData);
      return ([{ text: todo, id: randomId, category: category },
        ...oldToDos]);
    });

    // input 요소 reset
    setValue("todo", "");
  }

  return (
    <Form onSubmit={handleSubmit(handleValid)}>
      <select value={category} onInput={InputHandler}>
        <option value={Categories.TO_DO}>To Do</option>
        <option value={Categories.DOING}>Doing</option>
        <option value={Categories.DONE}>Done</option>
      </select>
      <InputWrap>
        <input {...register("todo",
          {
            required: "Please write a To Do.",
            minLength: { value: 5, message: "length is short!" }
          })}
          placeholder="Write a to do"
        />
        <span>{errors?.todo?.message}</span>
      </InputWrap>
      <Button>Add</Button>
    </Form>
  );
};

export default CreateToDo;