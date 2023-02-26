import { useEffect, useState } from 'react'
import moment from 'moment/moment'
import { buttonStyle, calendarStyle, changeMonth, generate, headerStyle, MomentFormat, selectedDay, styles, Week, weekStyle } from '.'
import cn from 'classnames'

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
    <div className={cn(`${calendarStyle}`, 'container mx-auto border-2 m-5 p-5 rounded')}>
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
              className={`w-12 h-12 flex items-center justify-center rounded-full shadow-md ${day.active ? 'bg-teal-500 text-black' : 'bg-green-500 hover:bg-green-600'}`}
              onClick={() => !day.disabled && handleSelection(day.value)}
            >
              {day.value.format('DD')}
            </div>
          ))}
        </div>
      ))}
    </div>
  )
}
