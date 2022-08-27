import React, { useState } from 'react';
import DateBox from './components/Boxes';
import DateButtons from './components/Buttons';
import './assets/App.css';
function App() {
  const [days,setDays] = useState<number[]>([1,2,3,4,5,6,7]);
  const [selectedDay,setSelectedDay] = useState<number>(0);
  const dateAction = (day:number[])=>{
    setDays(day);
  }
  const selectionAction = (day:number):void=>setSelectedDay(day);
  return (
    <div className='main_arrangement'>
      <DateButtons title='previous' days={days} direction={false} datesSetter={dateAction} />
      {days.map(day=><DateBox day={day} onSelection={selectionAction} selectedDate={selectedDay}/>)}
      <DateButtons title='Next' days={days} direction={true} datesSetter={dateAction}/>
    </div>
  );
}

export default App;
