import React from 'react'
import MainNavigation from '../components/MainNavigation'

function Error() {
    return (
        <>
            <MainNavigation />
            <main>
                <p>An error occurred</p>
                <p>Could not find this page!</p>
            </main>
        </>
    )
}

export default Error