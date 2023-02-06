import { IconButton, MenuItem, Select } from '@mui/material';
import { NavigateBefore, NavigateNext } from '@mui/icons-material';
import moment from 'moment';
import { useState } from 'react';
import { cron2obj } from './Utils';

const types = [
    { value: 'day', title: 'День' },
    { value: 'week', title: 'Неделя' },
    { value: 'month', title: 'Месяц' },
];

function getStartWeekMonday(weekDay) {
    if (weekDay === 0) {
        return 6;
    }
    return weekDay - 1;
}

function Calendar(props) {
    const [type, setType] = useState('month');
    const [startDate, setStartDate] = useState(new Date(new Date().setHours(0, 0, 0, 0)));

    const renderEvents = (from, to) => props.events.filter(event => {
        console.log(new Date(event.native.start));
        console.log(new Date(from));
        console.log(new Date(to));
        if (event.native.cron) {
            console.log(cron2obj(event.native.cron));
        }
        return new Date(from) <= new Date(event.native.start) && new Date(event.native.start) <= new Date(to);
    }).map(event => (
        <div>
            <div>{event.common.name}</div>
            <div>{event.native.start}</div>
        </div>
    ));

    let calendarTable = null;
    if (type === 'day') {
        const times = [];
        for (let i = 0; i < 24; i++) {
            times.push(new Date(startDate.getTime() + i * 60 * 60 * 1000));
        }
        calendarTable = (
            <div style={{ display: 'flex' }}>
                <div style={{ flex: 1 }}>
                    <table style={{ borderCollapse: 'collapse', width: '100%' }}>
                        {times.map((time, index) => {
                            const isCurrentTime = new Date() >= time
                && new Date() < new Date(time.getTime() + 60 * 60 * 1000);
                            return (
                                <tr key={index}>
                                    <td style={{
                                        width: 90,
                                        height: 36,
                                        fontSize: '14px',
                                        border: '1px solid #DAE5F4',
                                        textAlign: 'center',
                                        verticalAlign: 'middle',
                                        color: isCurrentTime ? '#687B98' : '#A2BDE4',
                                        backgroundColor: isCurrentTime ? '#f0f5fb' : undefined,
                                    }}
                                    >
                                        {moment(time).format('HH:mm')}

                                    </td>
                                    <td style={{
                                        height: 36,
                                        border: '1px solid #DAE5F4',
                                        fontSize: '14px',
                                        textAlign: 'right',
                                        verticalAlign: 'top',
                                        color: isCurrentTime ? '#687B98' : '#A2BDE4',
                                        backgroundColor: isCurrentTime ? '#f0f5fb' : undefined,
                                    }}
                                    />
                                </tr>
                            );
                        })}
                    </table>
                </div>
            </div>
        );
    } else if (type === 'week') {
        const dayOfWeeks = [];
        for (let i = 0; i < 7; i++) {
            dayOfWeeks.push(new Date(startDate.getTime() + (i + 1) * 24 * 60 * 60 * 1000));
        }
        const times = [];
        for (let i = 0; i < 24; i++) {
            times.push(new Date(startDate.getTime() + i * 60 * 60 * 1000));
        }
        calendarTable = (
            <table style={{ borderCollapse: 'collapse' }}>
                <tr>
                    <td style={{
                        width: 90,
                        height: 36,
                        fontSize: '14px',
                        border: '1px solid #DAE5F4',
                        textAlign: 'right',
                        verticalAlign: 'top',
                    }}
                    />
                    {dayOfWeeks.map((time, index) => {
                        const isCurrentDay = moment(time).format('DD.MM.YYYY') === moment(new Date()).format('DD.MM.YYYY');
                        return (
                            <td
                                key={index}
                                style={{
                                    width: 148,
                                    height: 36,
                                    fontSize: '14px',
                                    border: '1px solid #DAE5F4',
                                    textAlign: 'center',
                                    verticalAlign: 'middle',
                                    backgroundColor: isCurrentDay ? '#f0f5fb' : undefined,
                                }}
                            >
                                <span style={{ color: isCurrentDay ? '#4B5A73' : '#A2BDE4' }}>{moment(time).format('dd')}</span>
            &nbsp;
                                <span style={{ color: '#4B5A73' }}>{moment(time).format('D')}</span>

                            </td>
                        );
                    })}
                </tr>
                {times.map((time, index) => (
                    <tr key={index}>
                        <td style={{
                            width: 90,
                            height: 36,
                            fontSize: '14px',
                            border: '1px solid #DAE5F4',
                            textAlign: 'center',
                            verticalAlign: 'middle',
                            color: '#A2BDE4',
                        }}
                        >
                            {moment(time).format('HH:mm')}

                        </td>
                        {dayOfWeeks.map((day, dayIndex) => {
                            const isCurrentDay = moment(day).format('DD.MM.YYYY') === moment(new Date()).format('DD.MM.YYYY');
                            const isCurrentTime = moment(time).format('HH') === moment(new Date()).format('HH');
                            return (
                                <td
                                    key={dayIndex}
                                    style={{
                                        width: 148,
                                        height: 36,
                                        fontSize: '14px',
                                        border: '1px solid #DAE5F4',
                                        textAlign: 'right',
                                        verticalAlign: 'top',
                                        backgroundColor: isCurrentDay && isCurrentTime ? '#f0f5fb' : undefined,
                                    }}
                                />
                            );
                        })}
                    </tr>
                ))}
            </table>
        );
    } else if (type === 'month') {
        const viewStartDate = new Date(startDate.getTime()
      - getStartWeekMonday(startDate.getDay()) * 24 * 60 * 60 * 1000);
        const weeks = [];
        for (let i = 0; i < 6; i++) {
            const firstDayOfWeek = new Date(viewStartDate.getTime() + i * 7 * 24 * 60 * 60 * 1000);
            if (i > 0 && firstDayOfWeek.getMonth() !== startDate.getMonth()) {
                break;
            }
            const days = [];
            for (let j = 0; j < 7; j++) {
                days.push(new Date(firstDayOfWeek.getTime() + j * 24 * 60 * 60 * 1000));
            }
            weeks.push(days);
        }

        calendarTable = (
            <table style={{ borderCollapse: 'collapse' }}>
                {weeks.map((week, weekIndex) => (
                    <tr key={weekIndex}>
                        {week.map((day, dayIndex) => {
                            const isCurrentDay = moment(day).format('DD.MM.YYYY') === moment(new Date()).format('DD.MM.YYYY');
                            return (
                                <td
                                    key={dayIndex}
                                    style={{
                                        width: 160,
                                        height: 160,
                                        boxSizing: 'border-box',
                                        padding: 8,
                                        fontSize: '14px',
                                        border: '1px solid #DAE5F4',
                                        textAlign: 'right',
                                        verticalAlign: 'top',
                                        color: day.getMonth() === startDate.getMonth() ? '#4B5A73' : '#B5CAE9',
                                        backgroundColor: isCurrentDay ? '#f0f5fb' : undefined,
                                    }}
                                >
                                    {moment(day).format('D')}
                                    {renderEvents(moment(day).toDate(), moment(day).toDate().getTime() + 24 * 60 * 60 * 1000)}
                                </td>
                            );
                        })}
                    </tr>
                ))}
            </table>
        );
    }

    const formatDate = () => {
        if (type === 'day') {
            return (
                <>
                    <span style={{ color: '#2E394D' }}>{moment(startDate).format('D MMMM,')}</span>
            &nbsp;
                    <span style={{ color: '#C7D7EF' }}>{moment(startDate).format('YYYY')}</span>
                </>
            );
        } if (type === 'week') {
            return (
                <>
                    <span style={{ color: '#2E394D' }}>{moment(startDate).format('MMMM,')}</span>
            &nbsp;
                    <span style={{ color: '#C7D7EF' }}>{moment(startDate).format('YYYY')}</span>
                </>
            );
        } if (type === 'month') {
            return (
                <>
                    <span style={{ color: '#2E394D' }}>{moment(startDate).format('MMMM,')}</span>
            &nbsp;
                    <span style={{ color: '#C7D7EF' }}>{moment(startDate).format('YYYY')}</span>
                </>
            );
        }
        return null;
    };

    return (
        <div>
            <div style={{ flex: 1, paddingLeft: 36 }}>
                <div style={{
                    display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 24,
                }}
                >
                    <div style={{ display: 'flex', alignItems: 'center' }}>
                        <IconButton onClick={() => {
                            const newDate = new Date(startDate.getTime());
                            if (type === 'day') {
                                newDate.setDate(newDate.getDate() - 1);
                            } else if (type === 'week') {
                                newDate.setDate(newDate.getDate() - 7);
                            } else if (type === 'month') {
                                newDate.setMonth(newDate.getMonth() - 1);
                            }
                            setStartDate(newDate);
                        }}
                        >
                            <NavigateBefore />
                        </IconButton>
                        <span style={{
                            display: 'flex', alignItems: 'center', fontSize: '16px',
                        }}
                        >
                            {formatDate()}
                        </span>
                        <IconButton onClick={() => {
                            const newDate = new Date(startDate.getTime());
                            if (type === 'day') {
                                newDate.setDate(newDate.getDate() + 1);
                            } else if (type === 'week') {
                                newDate.setDate(newDate.getDate() + 7);
                            } else if (type === 'month') {
                                newDate.setMonth(newDate.getMonth() + 1);
                            }
                            setStartDate(newDate);
                        }}
                        >
                            <NavigateNext />
                        </IconButton>
                    </div>
                    <Select
                        value={type}
                        onChange={e => {
                            const newDate = new Date(startDate);
                            if (e.target.value === 'day') {
                                newDate.setHours(0, 0, 0, 0);
                            } else if (e.target.value === 'week') {
                                newDate.setDate(newDate.getDate() - getStartWeekMonday(newDate.getDay()) - 1);
                                newDate.setHours(0, 0, 0, 0);
                            } else if (e.target.value === 'month') {
                                newDate.setDate(1);
                                newDate.setHours(0, 0, 0, 0);
                            }
                            setStartDate(newDate);
                            setType(e.target.value);
                        }}
                        style={{ marginRight: 54 }}
                        variant="standard"
                        color="primary"
                    >
                        {types.map(currentType => (
                            <MenuItem key={currentType.value} value={currentType.value}>
                                {currentType.title}
                            </MenuItem>
                        ))}
                    </Select>
                </div>
                {calendarTable}
            </div>
        </div>
    );
}

export default Calendar;
