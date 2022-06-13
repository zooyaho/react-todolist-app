import { IToDo, toDoState } from "../atoms";
import { useSetRecoilState } from "recoil";

const ToDo = ({ text, id, category }: IToDo) => {
  const setToDos = useSetRecoilState(toDoState);

  const ClickHandler = (event:React.MouseEvent<HTMLButtonElement>) => {
    const {currentTarget:{name}} = event;
    console.log(name);

    // 여기서 id를 가지고 수정해야함~!
    // setToDos((oldToDos)=>[...oldToDos]);
  }

  return (
    <li>
      <span>{text}</span>
      {/* 인자로 넘어가기 위해서 익명함수를 사용해야함!! */}
      {category !== "DOING" && (
        <button name="DOING" onClick={ClickHandler}>Doing</button>
      )}
      {category !== "TO_DO" && (
        <button name="TO_DO" onClick={ClickHandler}>To Do</button>
      )}
      {category !== "DONE" && (
        <button name="DONE" onClick={ClickHandler}>Done</button>
      )}
    </li>
  );
};
export default ToDo;

// interface의 특정 타입(프로퍼티)를 가져올 수 있음.
// const ClickHandler = (newCategory: IToDo["category"]) => {}
// {category !== "DOING" && (<button onClick={() => ClickHandler("DOING")}>Doing</button>)}