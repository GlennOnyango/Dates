import React, { FC } from "react";
import '../assets/App.css';

type Box = {
    day: number,
    onSelection:any,
    selectedDate:number,
}


const DateBox:FC<Box> = ({day,onSelection,selectedDate})=>{
    const getDay = (e:any)=>{
        onSelection(e.target.innerText);
    }
    return(<div className={day === Number(selectedDate) ? `selec_day normal_day`: 'normal_day'} key={day} onClick={getDay}>
        {day}
    </div>)
}

export default DateBox;