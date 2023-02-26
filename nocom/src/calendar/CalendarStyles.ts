import React from 'react'
import moment from 'moment/moment'
import { Day } from './Day'

export const calendarStyle: React.CSSProperties = {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  gap: '20px',
}

export const headerStyle: React.CSSProperties = {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  width: '100%',
}

export const buttonStyle: React.CSSProperties = {
  margin: '0 10px',
  cursor: 'pointer'
}

export const weekStyle: React.CSSProperties = {
  display: 'flex',
  justifyContent: 'center',
  width: '100%',
  gap: '20px'
}

export const dayStyle: React.CSSProperties = {
  width: '14.28%',
  padding: '10px',
  border: '1px solid #ccc',
  boxSizing: 'border-box',
  borderRadius: '5px',
  boxShadow: '0 3px 5px 1px black',
  textAlign: 'center'
}

export const styles = (j: number, i: number, selectedDate: moment.Moment, day: Day) => {
  return {
    ...dayStyle,
    borderLeft: j === 0 ? 'none' : '1px solid #ccc',
    borderTop: i === 0 && j === 0 ? 'none' : '1px solid #ccc',
    backgroundColor: selectedDate.isSame(day.value, 'day') ? '#ccc' : day.selected ? '#ccc' : '#fff',
    color: selectedDate.isSame(day.value, 'day') ? '#fff' : day.selected ? '#fff' : undefined,
    opacity: day.disabled ? 0.5 : undefined,
    cursor: day.disabled ? 'default' : 'pointer'
  }
}
