import './FormContainer.css'
import {ReactNode} from 'react'

interface Props{
    children : ReactNode;
    container_class :string;
}

const FormContainer = ({container_class, children}: Props) => {
  return (
    <div className={container_class}>{children}</div>
  )
}

export default FormContainer