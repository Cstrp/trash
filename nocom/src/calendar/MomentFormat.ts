import moment from 'moment/moment'

export const MomentFormat = (m: moment.Moment | null, format: string = 'MMMM YYYY') => {
  return m?.format(format)
}
