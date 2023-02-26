import { useEffect, useState } from 'react'
import moment from 'moment/moment'
import { generate } from './GenerateCalendar'
import { Week } from './Week'
import { MomentFormat } from './MomentFormat'
import { buttonStyle, calendarStyle, dayStyle, headerStyle, weekStyle } from './CalendarStyles'

export const Calendar = (): JSX.Element => {
  const [date, setDate] = useState(moment())
  const [calendar, setCalendar] = useState<Week[]>([])
  const [selectedDate, setSelectedDate] = useState(moment())

  useEffect(() => {
    setCalendar(generate(date))
  }, [date])

  const changeMonth = (month: number) => {
    setDate((prevDate) => prevDate.clone().add(month, 'month'))
  }

  const select = (item: moment.Moment): void => {
    console.log('select', selectedDate)
    setSelectedDate(item)
  }

  return (
    <div style={calendarStyle}>
      <div style={headerStyle}>
        <button
          style={buttonStyle}
          onClick={() => changeMonth(-1)}
        >
          {'<'}
        </button>
        <h2>{MomentFormat(date)}</h2>
        <button
          style={buttonStyle}
          onClick={() => changeMonth(1)}
        >
          {'>'}
        </button>
      </div>
      {calendar.map((week, i) => (
        <div key={i} style={weekStyle}>
          {week.days.map((day, j) => (
            <div
              key={j}
              style={{
                ...dayStyle,
                borderLeft: j === 0 ? 'none' : '1px solid #ccc',
                borderTop: i === 0 && j === 0 ? 'none' : '1px solid #ccc',
                backgroundColor: day.selected ? '#ccc' : '#fff',
                color: day.selected ? '#fff' : undefined,
                opacity: day.disabled ? 0.5 : undefined,
                cursor: day.disabled ? 'default' : 'pointer'
              }}
              onClick={() => !day.disabled && select(selectedDate)}
            >
              {day.value.format('DD')}
            </div>
          ))}
        </div>
      ))}
    </div>
  )
}
