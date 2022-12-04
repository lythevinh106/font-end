import clsx from "clsx";
import styles from "./button.module.css";

function Button({ primary, secondary, success }) {

    const classes = clsx(styles.button, styles['big-size'], {
        ////nhung cai bien nhu primary o day la =true
        ////neu primary=true thi hien
        [styles.primary]: primary,
        [styles.secondary]: secondary,
        [styles.success]: success
    });

    return <button className={classes}>Click me</button>;
}

export default Button;
