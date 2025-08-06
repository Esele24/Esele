import style from './input.module.css';
export function Input({onText}){
    return(
    <input onChange={
        (e)=>{onText(e.currentTarget.value)}
    }      
    className={style.input}/>
 )
}