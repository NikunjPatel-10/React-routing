// import { useEffect, useState } from 'react';

import EventsList from '../components/EventsList';
import { useLoaderData } from 'react-router-dom';

function Events() {
    // const [isLoading, setIsLoading] = useState(false);
    // const [fetchedEvents, setFetchedEvents] = useState();
    // const [error, setError] = useState();

    // useEffect(() => {
    //     async function fetchEvents() {
    //         setIsLoading(true);

    //         setIsLoading(false);
    //     }

    //     fetchEvents();
    // }, []);

    const events = useLoaderData()
    return (
        <>
            {/* <div style={{ textAlign: 'center' }}>
                {isLoading && <p>Loading...</p>}
                {error && <p>{error}</p>}
            </div> */}
            {/* {!isLoading && fetchedEvents && <EventsList events={fetchedEvents} />} */}
            {<EventsList events={events} />}
        </>
    );
}

export default Events;