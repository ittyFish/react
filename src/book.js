import { useDispatch } from "react-redux";
import { deleteBook, selectedBookToEdit, selectedBookToShow } from "./store/action";

const Book = ({one}) => {

    let dispatch=useDispatch();

    return (<>
        <h2>{one.name}</h2>
        <input type="button" value={"delete"} onClick={()=>{dispatch(deleteBook(one.id))}}/>

        <input type="button" value={"ערוך"} onClick={()=>{dispatch(selectedBookToEdit(one))}}/>

        <input type="button" value={"show detalis"} onClick={()=>{dispatch(selectedBookToShow(one))}}/>


    
    </>  );
}
 
export default Book;