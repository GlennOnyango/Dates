import React, { FC, useCallback } from "react";

type Btn = {
    title: string,
    days:number[],
    direction:boolean,
    datesSetter:any,
    children?:JSX.Element
}


const DateButtons:FC<Btn>= ({children,title,days,direction,datesSetter})=>{
    
    const dates = useCallback(()=>{
        let count = !direction ? days[0] : days[days.length -1];
        let week = 7;
        let new_array:number[] = [];
        while (week > 0) {
            if(count === 1 && !direction){
                count = 32;
            }
            if(count === 31 && direction){
                count = 0;
            }
            !direction ? count-- : count++;
            count && new_array.push(count);
            week--;
        }
        datesSetter && datesSetter(!direction ? new_array.reverse() : new_array);
    },[days,datesSetter,direction]);

    return(<button onClick={dates}>
        {title}
    </button>)
}

export default DateButtons;