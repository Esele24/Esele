import styles from "./list.module.css"
export function List({}){
    return(
        <div>
            <div className={styles.list}>
                <input type="text" placeholder="    What ingredient do you want to use" className={styles.input}/>
                <div className={styles.inputs}>
                    <label className={styles.loop}>
                        Add Ingredient
                    </label>
                </div>                
            </div>
            <label>Please add at least four ingredients to generate a recipe</label>
        </div>
    )
}