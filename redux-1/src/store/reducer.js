

export const reducer = (state, action)=>{ 
    console.log(state,action) 
    switch(action.type){
        case "COUNTER_INCREMENT":{
            state.count++ ; 
            return {...state}; 
        } 
        case "COUNTER_DECREMENT":{
            state.count-- ; 
            return {...state};
        }
        case "COUNTER_DIVIDE":{
            state.count = state.count/2 ;   
            return {...state};    
        }    
        case "COUNTER_MULTIPLY":{   
            state.count = state.count*2 ;  
            return {...state};   
        }   
        default : {
            return state; 
        }
    }
}




