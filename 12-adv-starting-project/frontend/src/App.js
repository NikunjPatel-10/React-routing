// Challenge / Exercise

// 1. Add five new (dummy) page components (content can be simple <h1> elements)
//    - HomePage
//    - EventsPage
//    - EventDetailPage
//    - NewEventPage
//    - EditEventPage
// 2. Add routing & route definitions for these five pages
//    - / => HomePage
//    - /events => EventsPage
//    - /events/<some-id> => EventDetailPage
//    - /events/new => NewEventPage
//    - /events/<some-id>/edit => EditEventPage
// 3. Add a root layout that adds the <MainNavigation> component above all page components
// 4. Add properly working links to the MainNavigation
// 5. Ensure that the links in MainNavigation receive an "active" class when active
// 6. Output a list of dummy events to the EventsPage
//    Every list item should include a link to the respective EventDetailPage
// 7. Output the ID of the selected event on the EventDetailPage
// BONUS: Add another (nested) layout route that adds the <EventNavigation> component above all /events... page components
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Home from './pages/Home'
import Events from './pages/Events'
import EventDetail, { loader as eventDetailPageLoader, action as deleteEventAction } from './pages//EventDetail'
import NewEvent, { action as newEventAction } from './pages/NewEvent'
import EditEvent from './pages/EditEvent'
import Root from './pages/Root'
import EventRoot from './pages/EventRoot'
import Error from './pages/Error'

const router = createBrowserRouter([

  {
    path: '/',
    element: <Root />,
    errorElement: <Error />,
    children: [
      {
        path: '',
        element: <Home />
      },
      {
        path: 'events',
        element: <EventRoot />,
        children: [
          {
            path: '',
            element: <Events />,
            loader: async () => {
              const response = await fetch('http://localhost:8080/events');

              if (!response.ok) {
                // some error message 
              }
              else {
                const resData = await response.json();
                return resData.events;

              }
            }
          },
          {
            path: ':Id',
            id: 'event-detail',
            loader: eventDetailPageLoader,
            action: deleteEventAction,
            children: [
              {
                path: '',
                element: <EventDetail />,
              },
              {
                path: 'edit',
                element: <EditEvent />
              },
            ]
          },

          {
            path: 'New',
            element: <NewEvent />,
            action: newEventAction
          },
        ]
      },

    ]
  },


])

function App() {
  return <RouterProvider router={router}></RouterProvider>;
}

export default App;
