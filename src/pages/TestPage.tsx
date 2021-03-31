import React from 'react';
import { createUseStyles } from 'react-jss';
import { useQuery } from 'react-query'
import surveys from '../data/surveys.json'

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

    // const { isLoading, error, data } = useQuery('repoData', () =>
    //     fetch('https://api.github.com/repos/tannerlinsley/react-query').then(res =>
    //         res.json()
    //     )
    // )

    const { isLoading, error, data } = useQuery('repoData', () =>
        fetch('https://api.github.com/repos/tannerlinsley/react-query').then(res =>
            surveys
        )
    )

    console.log('isLoading', isLoading)
    console.log('data', data)

    return (
        <div className={styles.root}>
            <h1 className={styles.pageTitle}>Test page</h1>
            <p className={styles.paragraph}>This is the test page</p>
        </div>
    )
}

export default TestPage;
