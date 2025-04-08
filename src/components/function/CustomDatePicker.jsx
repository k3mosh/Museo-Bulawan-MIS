import React from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

const datePickerCustomStyles = `
  .react-datepicker {
    font-family: 'HindKochi', sans-serif;
    border: 1px solid #ccc;
    border-radius: 10px;
    padding: 10px;
  }
  .react-datepicker__triangle {
    display: none;
  }
  .react-datepicker__header {
    background-color: #fff;
    border-bottom: 1px solid #ccc;
    border-top-left-radius: 10px;
    border-top-right-radius: 10px;
    padding-bottom: 8px;
  }
  .react-datepicker__current-month {
    font-size: 1.25rem;
    color: #524433;
    font-weight: bold;
    margin-bottom: 0;
  }
  .react-datepicker__navigation--previous,
  .react-datepicker__navigation--next {
    top: 15px;
    line-height: 1.7;
    border: none;
    outline: none;
  }
  .react-datepicker__navigation-icon::before {
    border-color: #524433;
  }
  .react-datepicker__day-name,
  .react-datepicker__day {
    width: 2rem;
    line-height: 2rem;
    margin: 0.2rem;
    color: #3e3428;
    font-weight: 600;
  }
  .react-datepicker__day--today {
    border: 1px solid #524433;
    border-radius: 4px;
  }
  .react-datepicker__day--selected,
  .react-datepicker__day--keyboard-selected {
    background-color: #524433;
    color: #fff;
    border-radius: 4px;
  }
`;

const CustomDatePicker = (props) => {
    return (
        <>
            {/* Inject custom styles */}
            <style>{datePickerCustomStyles}</style>
            <DatePicker {...props} />
        </>
    );
};

export default CustomDatePicker;
