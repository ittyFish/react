import { useState } from "react";
import { saveEditedBook } from "./store/action";
import { useDispatch, useSelector } from "react-redux";

const EditBook = () => {
let forEdit= useSelector( state => state.selectedBookToEdit)
let dispatch=useDispatch();

const [details,setDetails]= useState({...forEdit});
const change = (e)=>{
    setDetails({...details,[e.target.name]:e.target.value})
}
const save = (e) =>{
    e.preventDefault();
    dispatch(saveEditedBook(details))
}

    return ( <form onSubmit={save}>
        עריכת פרטי ספר 
        <label>name</label>
        <input type="text" name="name" value={details.name} onChange={change}/>

        <label>price</label>
        <input type="number" name="price" value={details.price} onChange={change}/>

        <input type="submit"/>


    </form>);
}
 
export default EditBook;