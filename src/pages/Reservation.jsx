import { useState } from "react";
import Form from "../components/Form";

import CompleteBooking from "../components/CompleteBooking";

const currentDate = new Date()
const month = currentDate.getMonth()+1
const year = currentDate.getFullYear()
const date = currentDate.getDate()
const finalDate = `${year}-${month}-${date}`
const time = currentDate.getHours()
const availableTimes = [];
let hours = time

while (hours < "24") {
  hours++
  if(hours >= "12"){
    availableTimes.push(`${hours}:00`)
  }
}
let selecedDate = undefined
const dispatch = (e)=>{
 selecedDate= e
  return e
}
const submit = (e)=>{
  return e
}

const Reservation = (props) => {
  const [submited, setSubmitted ] = useState(true)
  const submitTo = (date)=>{
    setSubmitted(false);
  }
  return <section className="reservationSection"><div className="container"> {submited?<Form dispatch={dispatch} submitForm={submit} submited = {submitTo} getTimes={availableTimes} date = {finalDate} />: <CompleteBooking date={selecedDate} />}</div></section>;
};

export default Reservation;
