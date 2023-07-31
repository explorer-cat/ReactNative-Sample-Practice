import React, {useState} from 'react';
import {Calendar, LocaleConfig} from 'react-native-calendars';
import { HelloWidget } from './HelloWidget';
import { requestWidgetUpdate } from 'react-native-android-widget';


const WidgetCalendar = () => {
    const [selected, setSelected] = useState('');

    React.useEffect(() => {
        requestWidgetUpdate({
            widgetName: 'Counter',
            renderWidget: () => <HelloWidget count={selected} />,
        });
    }, []);



    return (
        <Calendar
            onDayPress={day => {
                setSelected(day.dateString);
            }}
            markedDates={{
                [selected]: {selected: true, disableTouchEvent: true, selectedDotColor: 'orange'}
            }}
        />
    );
};

export default WidgetCalendar;
