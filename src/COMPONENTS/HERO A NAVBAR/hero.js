import styles from "./hero.module.css";
export function Hero({}){
    return(
        <div>
            <div className={styles.navbar}>
                <br></br>
                <div className={styles.name}>
                    <label>FarmFresh</label>
                </div>
                <div className={styles.middle}>
                    <label>Marketplace</label>
                    <label>About</label>
                    <label>Contact</label>
                </div>
                <div className={styles.third}>
                    <div className={styles.cart}>Cart</div>
                    <div className={styles.login}>Login</div>
                    <div className={styles.sell}>Sell</div>
                    <div className={styles.product}>Products</div>
                </div>
            </div>
        </div>
    )
}