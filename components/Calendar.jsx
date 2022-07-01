import DatePicker from "sassy-datepicker";

export default function Calendar() {
  const onChange = (date) => {
    console.log(date.toString());
  };

  return (
    <div id="calendarcontainer">
      <DatePicker onChange={onChange} />
    </div>
  );
}
