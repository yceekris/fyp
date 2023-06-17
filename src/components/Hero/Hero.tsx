import './Hero.css'
import {ReactNode} from 'react'

interface Props{
    children : ReactNode;
    heading : string;
    sub_heading : string;
    paragraph : string;
    hero_class: string
}

const Hero = ({children, heading, sub_heading, paragraph, hero_class}: Props) => {
  return (
    <div className={hero_class}>
        {children}
        <div className="text">
            <h1 className="heading">{heading}</h1>
            <h4 className="sub-heading">{sub_heading}</h4>
            <p>
                {paragraph}
            </p>
        </div>
    </div>
  )
}

export default Hero