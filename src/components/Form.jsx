import { useState, useEffect } from "react";

const Form = (props) => {
  const [date, setDate] = useState("");
  const [times, setTimes] = useState("");
  const [guests, setGuests] = useState(1);
  const [occasion, setOccasion] = useState("");
  const [submitHandler, setSubmitHandler] = useState(true);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(e);
    // props.submitForm(e);
  };

  const handleChange = (e) => {
    setDate(e);
    dateValidation();
    props.dispatch(e);
  };

  const guestValidation = () => {
    if (guests <= 0) {
      return true;
    } else if (guests <= 10) {
      return false;
    } else {
      return true;
    }
  };

  const dateValidation = () => {
    const dateFilter = (d) => {
      const year = Number(d.slice(0, 4));
      const month = Number(d.slice(5, 7));
      const date = Number(d.slice(8, 10));
      return [year, month, date];
    };

    let [selectedYear, selectedMonth, selectedDate] = dateFilter(date);
    let [currentYear, currentMonth, currentDate] = dateFilter(props.date);

    if (selectedYear === currentYear) {
      if (selectedMonth < currentMonth) {
        return true;
      } else if (selectedMonth === currentMonth) {
        if (selectedDate < currentDate) {
          return true;
        }
      } else if (selectedMonth > currentMonth) {
        return false;
      }
    } else if (selectedYear > currentYear) {
      return false;
    } else {
      return true;
    }
  };

  const disableHandler = () => {
    if (!guestValidation() && !dateValidation()) {
      setSubmitHandler(false);
    } else {
      setSubmitHandler(true);
    }
  };
  useEffect(() => {
    disableHandler();
    // eslint-disable-next-line
  }, [guestValidation, dateValidation]);
  return (
    <form onSubmit={handleSubmit}>
      <h3>Reservation Form</h3>
      <fieldset>
        <div>
          <label htmlFor="bookingDate">Choose Date</label>
          <input
            type="date"
            name="date"
            required={true}
            className={dateValidation()&&"error"}
            id="bookingDate"
            min={props.date}
            onChange={(e) => handleChange(e.target.value)}
            value={date}
          />
          {dateValidation() && <p>Enter valid date</p>}
        </div>
        <div>
          <label htmlFor="time">Choose Time</label>
          <select
            name="time"
            id="time"
            value={times}
            onChange={(e) => {
              setTimes(e.target.value);
            }}
          >
            {props.getTimes.map((time) => {
              return (
                <option key={time} value={time}>
                  {time}
                </option>
              );
            })}
          </select>
        </div>
        <div>
          <label htmlFor="guests">Number of guests</label>
          <input
            type="number"
            min={1}
            max={10}
            className={guestValidation()&& "error"}
            onChange={(e) => {
              setGuests(e.target.value);
              guestValidation();
            }}
            value={guests}
            name="guests"
            id="guests"
          />
          {guestValidation() && (
            <p>Number of guests should be between 1 to 10</p>
          )}
        </div>
        <div>
          <label
            htmlFor="occasion"
            value={occasion}
            onChange={(e) => {
              setOccasion(e.target.value);
            }}
          >
            Occasion
          </label>
          <select name="occasion" id="occassion">
            <option value="Anniversary">Anniversary</option>
            <option value="Birthday">Birthday</option>
          </select>
        </div>
        <div className="submit">
          <input
            disabled={submitHandler}
            className="button"
            type="submit"
            value="Submit"
          />
        </div>
      </fieldset>
    </form>
  );
};

export default Form;
