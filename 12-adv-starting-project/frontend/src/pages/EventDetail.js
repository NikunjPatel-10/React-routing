import React from 'react'
import { json, redirect, useRouteLoaderData } from 'react-router-dom'
import EventItem from './../components/EventItem'
function EventDetail() {

    // const data = useLoaderData();
    const data = useRouteLoaderData('event-detail')
    return (
        <>
            <EventItem event={data.event} />
        </>
    )
}

export default EventDetail;

export async function loader({ request, params }) {
    const id = params.Id;
    const response = await fetch('http://localhost:8080/events/' + id);

    if (!response.ok) {
        throw json({ message: 'Could not found detail for a selected event', status: 500 })
    }
    else {
        return response
    }
}

export async function action({ params, request }) {

    const eventId = params.Id;
    console.log(eventId);

    const response = await fetch('http://localhost:8080/events/' + eventId, {
        method: 'DELETE'
    });

    if (!response.ok) {
        throw json(
            { message: 'Could not delete event' },
            { status: 500 }
        )
    }
    redirect('/events')
}