
import Button from "./Button";

const CompleteBooking = (props) => {
  return (
    <div className="completeBookingContainer">
      <h3>Thanks For Reservation</h3>
      <h4>Your table is will be reserved on {props.date}</h4>
      <p>We will send you the details in your email</p>
     <Button to="/" text="Go to home"/>
    </div>
  );
};

export default CompleteBooking;
