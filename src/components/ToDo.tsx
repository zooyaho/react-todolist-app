import { IToDo, toDoState, Categories } from "../atoms";
import { useSetRecoilState } from "recoil";

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
    <li>
      <span>{text}</span>
      {category !== Categories.DOING && (
        <button name={Categories.DOING.toString()} onClick={ClickHandler}>Doing</button>
      )}
      {category !== Categories.TO_DO && (
        <button name={Categories.TO_DO.toString()} onClick={ClickHandler}>To Do</button>
      )}
      {category !== Categories.DONE && (
        <button name={Categories.DONE.toString()} onClick={ClickHandler}>Done</button>
      )}
    </li>
  );
};
export default ToDo;

// interface의 특정 타입(프로퍼티)를 가져올 수 있음.
// const ClickHandler = (newCategory: IToDo["category"]) => {}
// {category !== "DOING" && (<button onClick={() => ClickHandler("DOING")}>Doing</button>)}