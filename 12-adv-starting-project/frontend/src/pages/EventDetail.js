import React from 'react'
import { useParams } from 'react-router-dom'

function EventDetail() {
    const params = useParams()
    return (
        <>
            <div>EventDetail</div>
            <p>EventId :{params.Id}</p>
        </>
    )
}

export default EventDetail