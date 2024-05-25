import { useNavigate } from 'react-router-dom'
import style from './_styles.module.css'

const colors = {
    orange: style.orange,
    blue: style.blue
}

export const Button = ({children, label, color, path}) => {

    const navigate = useNavigate();

    function handleNavigate(){
        navigate(path)
    }

    return <>
        <label>{label}</label>
        <button onClick={() => handleNavigate(path)} className={`${style.button_example} ${colors[color]}`}>{children}</button>
    </>
}