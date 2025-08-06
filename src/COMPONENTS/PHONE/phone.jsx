import styles from "./phone.module.css"
export function Weather({temp, cond, locn}){
return(
  <div>
    <div className={styles.pol}>
      <p>Temperature: {temp} </p>
      <p>Condition: {cond} </p>
      <p>Location: {locn} </p>
    </div>
  </div>
)
}
