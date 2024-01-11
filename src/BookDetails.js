import { useSelector } from "react-redux";

const BookDetails = () => {

const selected = useSelector(state=> state.selectedBook)

    return ( <>
    פרטי הספר שנבחר להצגה
    <h1>{selected.id}</h1>
    <h1>{selected.name}</h1>
    <h1>{selected.price}</h1>
    <h1>{selected.numPage}</h1>
    
    </> );
}
 
export default BookDetails;