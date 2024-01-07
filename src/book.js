import { useDispatch } from "react-redux";
import { addBook,deleteBook } from "./store/action";

const Book = ({one}) => {

    let dispatch=useDispatch();

    return (<>
        <h2>{one.name}</h2>
        <input type="button" value={"delete"} onClick={()=>{dispatch(deleteBook(one.id))}}/>

    
    </>  );
}
 
export default Book;