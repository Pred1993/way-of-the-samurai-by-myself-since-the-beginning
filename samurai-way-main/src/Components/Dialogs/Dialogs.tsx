import React from "react";
import classes from './Dialogs.module.css'

export const Dialogs = () => {
    return (
        <div className={classes.dialogs}>
            <div className={classes.dialogsItem}>
                <div className={classes.dialog}>
                    Andrey
                </div>
                <div className={`${classes.dialog} ${classes.active}`}>
                    Andrey
                </div>
                <div className={classes.dialog}>
                    Andrey
                </div>
                <div className={classes.dialog}>
                    Andrey
                </div>
                <div className={classes.dialog}>
                    Andrey
                </div>
                <div className={classes.dialog}>
                    Andrey
                </div>
            </div>
            <div className={classes.messages}>
                <div className={classes.message}>Hello</div>
                <div className={classes.message}>Nice</div>
                <div className={classes.message}>Like</div>
                <div className={classes.message}>Easy</div>
                <div className={classes.message}>The best</div>
                <div className={classes.message}>Ok!</div>
            </div>
        </div>
    )
}