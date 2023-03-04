import moment from 'moment/moment'
import { Week } from '../Interfaces'

export const generate = (date: moment.Moment) => {
  const calendar: Week[] = []
  const startData = date.clone().startOf('month').startOf('week')
  const endData = date.clone().endOf('month').endOf('week')
  const _date = startData.clone().subtract(1, 'day')

  while (_date.isBefore(endData, 'day')) {
    calendar.push({
      days: Array(7)
        .fill(0)
        .map(() => {
          const day = _date.add(1, 'day').clone()
          const active = moment().isSame(day, 'date')
          const disabled = !date.isSame(day, 'month')
          const selected = moment().isSame(day, 'date')

          return {
            day: day,
            active,
            disabled,
            selected
          }
        }),
    })
  }
  return calendar
}
