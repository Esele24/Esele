'use client';
import styles from "@/COMPONENTS/xTheme//xTheme.module.css";
export function Themes ({}){
    return(
        <div className={styles.theme}>
            <div className={styles.default}>onClick={()=>{var root=document.documentElement;
            root.style.setProperty('--brand color', "#c2185b");
            //alert("we are good");
            }}
                <label>DEFAULT</label>
            </div>
            <div className={styles.default}>onClick={()=>{var root=document.documentElement;
            root.style.setProperty('--brand color', "#c2185b");
            }}
                DARK
            </div>
            <div className={styles.default}>onClick={()=>{var root=document.documentElement;
                root.style.setProperty('--brand color', "#c2185b");
            }}
                LIGHT
            </div>
            <div className={styles.default}>onClick={()=>{var root=document.documentElement;
                root.style.setProperty('--brand color', "#c2185b");
            }}
                BRAND
            </div>
        </div>
    )
}