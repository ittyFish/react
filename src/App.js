import logo from './logo.svg';
import './App.css';
import Laibrary from './Laibrary';
import { useSelector } from 'react-redux';
import BookDetails from './BookDetails';
import EditBook from './EditBook';

function App() {
  let selected=useSelector(sta=> sta.selectedBook)
  let selectedToEdit=useSelector(sta=>sta.selectedToEdit)
  return (
    <>
      <Laibrary/>
      {selected&&<BookDetails/>}
      {selectedToEdit&&<EditBook/>}
    </>
  );
}

export default App;
