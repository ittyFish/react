const initialState={
    arr:[{id:1,name:"eli lomed",numPage:12},
    {id:2,name:"shosi lomedet",numPage:14}

]
}
export const bookReucer=(state=initialState,action)=>{
    switch (action.type){
        case "ADD_BOOK":
            return{
                arr:[...state.arr,action.payload]
            }
        case "DELETE_BOOK":
            return{
                arr:state.arr.filter(item=>item.id !== action.payload)
            }    
    }
}