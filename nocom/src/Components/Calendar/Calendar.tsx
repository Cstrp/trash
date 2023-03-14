import React, { useEffect, useState } from 'react'
import moment from 'moment/moment'
import { Week } from '../../Interfaces'
import { changeMonth, generate, MomentFormat, selectedDay } from '../../Utils'
import { buttonStyle, calendarStyle, headerStyle, styles, weekStyle } from './CalendarStyles'

export const Calendar = (): JSX.Element => {
  const [date, setDate] = useState(moment())
  const [calendar, setCalendar] = useState<Week[]>([])
  const [selectedDate, setSelectedDate] = useState(moment())

  useEffect(() => {
    setCalendar(generate(date))
  }, [date])

  const handleChangeMonth = (month: number) => {
    changeMonth(month, date, setDate, setCalendar)
  }

  const handleSelection = (item: moment.Moment) => {
    selectedDay(item, setCalendar, setSelectedDate)
  }

  return (
    <div style={calendarStyle} className={'container mx-auto border-2 m-5 p-5 rounded'}>
      <div style={headerStyle}>
        <button style={buttonStyle} onClick={() => handleChangeMonth(-1)}>
          {'<'}
        </button>
        <h2>{MomentFormat(date, 'MMMM YYYY')}</h2>
        <button style={buttonStyle} onClick={() => handleChangeMonth(1)}>
          {'>'}
        </button>
      </div>
      {calendar.map((week, i) => (
        <div key={i} style={weekStyle}>
          {week.days.map((day, j) => (
            <div
              key={j}
              style={styles(j, i, selectedDate, day)}
              onClick={() => !day.disabled && handleSelection(day.day)}
            >
              <span>{day.day.format('DD')}</span>
            </div>
          ))}
        </div>
      ))}
    </div>
  )
}
