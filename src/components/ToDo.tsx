import { IToDo, toDoState, Categories } from "../atoms";
import { useSetRecoilState } from "recoil";
import styled from 'styled-components';

const List = styled.li`
  margin-top: 15px;
  display: flex;
  justify-content: center;
  align-items:center;
  button:last-child {
    margin-right: 0px;
    border: 2px solid green;
    border-radius: 10px;
  }
`;

const TextWrap = styled.div`
  width: 40%;
  height: 100%;
  border-bottom: 2px solid #f0932b;
  padding-bottom: 12px;
  margin-right: 10px;
  background-color: white;
  border-radius: 10px;
`;

const Button = styled.button`
  background-color: transparent;
  border: 2px solid #f0932b;
  border-radius: 15px;
  color: #f0932b;
  height: 30px;
  margin-right: 5px;
  cursor: pointer;
  &:hover {
    border: 2px solid green;
    color: green;
  }
`;

const ToDo = ({ text, id, category }: IToDo) => {
  const setToDos = useSetRecoilState(toDoState);

  const ClickHandler = (event: React.MouseEvent<HTMLButtonElement>) => {
    const { currentTarget: { name } } = event;

    setToDos((oldToDos) => {
      // 원래 있던 todo를 지우고 새로운 todo를 반환 함.
      const targetIndex = oldToDos.findIndex(toDo => toDo.id === id);
      const newToDo = { text, id, category: name as any };
      return [...oldToDos.slice(0, targetIndex), newToDo, ...oldToDos.slice(targetIndex + 1)];
    });
  }

  return (
    <List>
      <TextWrap>
        <span>✏️ {text}</span>
      </TextWrap>
      {category !== Categories.DOING && (
        <Button name={Categories.DOING.toString()} onClick={ClickHandler}>Doing</Button>
      )}
      {category !== Categories.TO_DO && (
        <Button name={Categories.TO_DO.toString()} onClick={ClickHandler}>To Do</Button>
      )}
      {category !== Categories.DONE && (
        <Button name={Categories.DONE.toString()} onClick={ClickHandler}>Done</Button>
      )}
      <Button>🗑</Button>
    </List>
  );
};
export default ToDo;

// interface의 특정 타입(프로퍼티)를 가져올 수 있음.
// const ClickHandler = (newCategory: IToDo["category"]) => {}
// {category !== "DOING" && (<button onClick={() => ClickHandler("DOING")}>Doing</button>)}