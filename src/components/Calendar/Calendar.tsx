import FullCalendar from '@fullcalendar/react'
import dayGridPlugin from '@fullcalendar/daygrid'
import interactionPlugin from '@fullcalendar/interaction'
import timeGridPlugin from '@fullcalendar/timegrid'

export default function Calendar() {

    return (
        <>
            <div className='my-4'>
                <FullCalendar
                    plugins={[dayGridPlugin, interactionPlugin, timeGridPlugin]}
                    locale={'fr'}
                    initialView="dayGridMonth"
                    headerToolbar={{
                        left: 'prev,next today',
                        center: 'title',
                        right: 'dayGridMonth,timeGridWeek,timeGridDay'
                    }}
                    selectable={true}
                    events={[
                        { title: 'event 1', date: '2024-04-22', start:'2024-04-22 10:00:00', end: '2024-04-22 13:30:00'},
                        { title: 'event 2', date: '2024-04-23', }
                    ]}
                />
            </div>
        </>
    )
}