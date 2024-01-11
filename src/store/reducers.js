const initialState={
    arr:[{id:1,name:"eli lomed",numPage:12,price:20},
    {id:2,name:"shosi lomedet",numPage:14,price:19},
    {id:3,name:"כי אתה עמדי",numPage:500,price:89},
],
selectedBook:null,
selectedBookToEdit:null 

}
export const bookReucer=(state = initialState,action) =>{
    switch (action.type){
        case "ADD_BOOK":
            return{
                selectedBook:state.selectedBook,
                selectedBookToEdit:state.selectedBookToEdit,
                arr:[...state.arr,action.payload]
            }
        case "DELETE_BOOK":
            return{
                selectedBook:state.selectedBook,
                selectedBookToEdit:state.selectedBookToEdit,
                arr:state.arr.filter(item=>item.id !== action.payload)
            }   
        case "SELECTED_BOOK_TO_SHOW":
            return{
                selectedBook:state.selectedBook,
                selectedBookToEdit:state.selectedBookToEdit,
                arr:state.arr
            }   
        case "SELECTED_BOOK _TO_EDIT":
            return{
                arr:state.arr ,
                selectedBook:state.selectedBook,
                selectedBookToEdit:action.payload    
            }    
        case "SAVE_EDIT_BOOK":
            let copy= state.arr.map(item=>{
                if(item.id !== action.payload.id)
                    return item;
                return action.payload
            })  
            return{
                selectedBook:state.selectedBook,
                selectedBookToEdit:null,
                arr:copy
            }  
        default: return state;   
    }
}