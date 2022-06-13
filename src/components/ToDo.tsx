import { IToDo} from "../atoms";

const ToDo = ({text, id, category}:IToDo)=>{
  return(
    <li key={id}>{text}</li>
  );
};
export default ToDo;