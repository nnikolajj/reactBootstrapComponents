import DayPicker from "react-day-picker";
import 'react-day-picker/lib/style.css';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import TimePicker from 'react-time-picker';
import {useState} from "react";


export default function DayPickerComponent() {
    const [startDate, setStartDate] = useState(new Date());
    const [value, onChange] = useState('10:00');
    return (
        <div>

            <br/>
            DayPicker
            <br/>
            <div><DayPicker/></div>

            <br/>
            DatePicker
            <br/>
            <div><DatePicker selected={startDate} onChange={(date) => setStartDate(date)}/></div>

            <br/>
            TimePicker
            <br/>
            <div>
                <TimePicker
                    onChange={onChange}
                    value={value}
                />
            </div>

        </div>
    )
}