import { ReactNode } from 'react'
import ReactDOM from 'react-dom'

const rootPortal = document.getElementById('root-portal');

export const Portal = ({children}: {children: ReactNode}) => {
  return ReactDOM.createPortal(children, rootPortal as HTMLElement);
}
