import { useSelector } from "react-redux";
import Book from "./book";

const Laibrary = () => {
    let arr= useSelector((st) => {return st.arr});
    return ( <>
    <h1>Laibrary</h1>
    <ul>
        {arr.map(item=><li key={item.id}>< Book one={item}/></li>)}
    </ul>
    </> );
}
 
export default Laibrary;