export const addBook=(book)=>{
    return{
        type:"ADD_BOOK",
        payload:book
    }
}

export const deleteBook=(bookId)=>{
    return{
        type:"DELETE_BOOK",
        payload:bookId
    }
}

 export const selectedBookToShow = (bookshow)  =>{
    return{
        type:"SELECTED_BOOK_TO_SHOW",
        payload:bookshow
    }
 }

 export const selectedBookToEdit=(book)=>{
    return{
        type:"SELECTED_BOOK _TO_EDIT",
        payload:book
    }
 }

 export const saveEditedBook=(editBook)=>{
    return{
        type:"SAVE_EDIT_BOOK",
        payload:editBook
    }
 }