import CreateToDo from './CreateToDo';
import { useRecoilValue } from 'recoil';
import { toDoSelector } from '../atoms';
import ToDo from './ToDo';
import styled from 'styled-components';

const Header = styled.header`
  height: 10vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items:center;
  h1 {
    color: #e67e22;
    font-size: 28px;
  }
`;

const MainSection = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items:center;
`;

const ListSection = styled.section`
  width: 90%;
  margin-top: 30px;
  ul {
    width: 100%;
  }
`;

const ToDoList = () => {
  const toDos = useRecoilValue(toDoSelector);

  return (
    <>
      <Header>
        <h1>To Dos</h1>
      </Header>
      <MainSection>
        <CreateToDo />
        <ListSection>
          <ul>
            {toDos?.map((toDo) => (<ToDo key={toDo.id} {...toDo} />))}
          </ul>
        </ListSection>
      </MainSection>
    </>
  );
};


export default ToDoList;

/* 카테고리 section에 해당하는 todo 출력 */
// wow,,, atom을 가져와서 사용하지 않고 output만 변경된 것을 가져와 출력함.
// const [toDos, Doing, Done] = useRecoilValue(toDoSelector);
/*
<h2>To DO</h2>
<ul>
  {toDos.map((todo) => <ToDo key={todo.id} {...todo} />)}
</ul>
<hr />
<h2>Doing</h2>
<ul>
  {Doing.map((todo) => <ToDo key={todo.id} {...todo} />)}
</ul>
<hr />
<h2>Done</h2>
<ul>
  {Done.map((todo) => <ToDo key={todo.id} {...todo} />)}
</ul>
<hr />
*/