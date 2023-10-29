import Form from "../components/Form";

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

let dispatch = (e)=>{
  return e
}

const Reservation = () => {
  return <section className="reservationSection"><div className="container"> <Form dispatch={dispatch} getTimes={availableTimes} date = {finalDate} /></div></section>;
};

export default Reservation;
