import { COUNTER_INCREMENT, COUNTER_DECREMENT, COUNTER_DIVIDE, COUNTER_MULTIPLY } from "./action.type";

export const add = () => ({ 
  type: COUNTER_INCREMENT 
});  

export const substract = () => ({
    type: COUNTER_DECREMENT       
  });

  export const divide = () => ({
    type: COUNTER_DIVIDE     
  });

  export const multiply = () =>( {
    type: COUNTER_MULTIPLY     
  });  


