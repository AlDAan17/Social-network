import React from "react";
import classes from "./Dialogs.module.css";

const Dialogs = () => {
    return (
        <div className={classes.dialogs}>
            <div className={classes.dialogsItems}>
                <div className={classes.dialog + ' ' + classes.active}>
                    Oleg
                </div>
                <div className={classes.dialog}>
                    Andrey
                </div>
                <div className={classes.dialog}>
                    Viktor
                </div>
                <div className={classes.dialog}>
                    Sanya
                </div>
            </div>
            <div className={classes.messages}>
                <div className={classes.message}>Hello World!</div>
                <div className={classes.message}>Here we are</div>
                <div className={classes.message}>...</div>
            </div>
        </div>
    );
}

export default Dialogs;