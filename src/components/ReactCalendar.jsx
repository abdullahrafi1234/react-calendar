import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import '../components/calendar.css'
import { useEffect, useState } from 'react';
import Clock from 'react-clock';
import 'react-clock/dist/Clock.css';
import DatePicker from 'react-date-picker';
import 'react-date-picker/dist/DatePicker.css';
import DateTimePicker from 'react-datetime-picker';
import 'react-datetime-picker/dist/DateTimePicker.css';
import DateTimeRangePicker from '@wojtekmaj/react-datetimerange-picker';
import '@wojtekmaj/react-datetimerange-picker/dist/DateTimeRangePicker.css';


const ReactCalendar = () => {
    const [selectedDate, setSelectedDate] = useState(new Date())
    // console.log(selectedDate);

    const [clock , setClock] = useState(new Date())

    const [datePicker, setDatePicker] = useState(new Date())
    // console.log(datePicker);

    const [dateTimePicker, setDateTimePicker] = useState(new Date())
    // console.log(dateTimePicker);

    const [dateTimeRange, setDateTimeRange] = useState([new Date(), new Date()])
    console.log(dateTimeRange);


    useEffect( () => {
        setInterval(() => {
            setClock(new Date()), 1000
        })
    }, [])

    return (
        <div className=" mt-16 text-center mx-auto  ">
            <div className=" mx-auto max-w-xl shadow-2xl bg-base-100">
                <form className="card-body">
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Name</span>
                        </label>
                        <input type="text" placeholder="Name" className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input type="email" placeholder="Email" className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Phone</span>
                        </label>
                        <input type="text" placeholder="Phone" className="input input-bordered" required />
                    </div>

                    {/* Calendar */}
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Date</span>
                        </label>
                        <Calendar onChange={(value) => {
                            setSelectedDate(value)
                        }}></Calendar>
                    </div>
                    {/* React Clock */}
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">
                                Clock
                            </span>
                        </label>
                        <Clock value={clock}></Clock>
                    </div>
                    {/* Date Picker */}
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">
                                Date Picker
                            </span>
                        </label>
                    <DatePicker onChange={(value) => {
                        setDatePicker(value)
                    }} value={datePicker}></DatePicker>
                    </div>

                    {/* Date Time Picker */}
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">
                               Date Time Picker
                            </span>
                        </label>
                      <DateTimePicker onChange={(value) => {
                        setDateTimePicker(value)
                      }} value={dateTimePicker}></DateTimePicker>
                    </div>


                    {/* Date and Time range */}
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">
                               Date  and Time Range Picker
                            </span>
                        </label>
                      <DateTimeRangePicker onChange={(value) => {
                        setDateTimeRange(value)
                      }} value={dateTimeRange}></DateTimeRangePicker>
                    </div>
                    <div className="form-control mt-6">
                        <button className="btn btn-primary">Login</button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default ReactCalendar;