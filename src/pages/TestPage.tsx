import React from 'react';
import { createUseStyles } from 'react-jss';

const useStyles = createUseStyles({
    root: {
        padding: 16,
        backgroundColor: '#ccc'
    },
    pageTitle: {
        fontFamily: ["'Roboto'", 'sans-serif'],
        marginTop: 16,
        fontSize: 32,
    },
    paragraph: {
        fontFamily: ["'Roboto'", 'sans-serif'],
        marginTop: 16,
        fontSize: 16
    }
})

function TestPage(): React.ReactElement {

    const styles = useStyles()

    return (
        <div className={styles.root}>
            <h1 className={styles.pageTitle}>Test page</h1>
            <p className={styles.paragraph}>This is the test page</p>
        </div>
    )
}

export default TestPage;
