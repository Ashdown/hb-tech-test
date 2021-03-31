import React from 'react';
import { useQuery } from 'react-query'
import surveys from '../data/surveys.json'

function SurveyListPage(): React.ReactElement {

    // const { isLoading, error, data } = useQuery('repoData', () =>
    //     fetch('https://api.github.com/repos/tannerlinsley/react-query').then(res =>
    //         surveys
    //     )
    // )

    // mock the response using the survey json file for now

    const { isLoading, error, data } = useQuery('repoData', () =>
        fetch('https://api.github.com/repos/tannerlinsley/react-query').then(res =>
            surveys
        )
    )

    return (
        <p>Survey list page goes here</p>
    )
}

export default SurveyListPage