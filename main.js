const calendarElement = document.getElementById('calendar');

const todo = JSON.parse(localStorage.getItem('tasks'));
console.log(todo);

const calOptions = {
    initialView: 'dayGridMonth',
    events: [
        {
            id: 'blsldoas',
            title: 'New Meeting',
            start: '2022-12-21 18:00',
            end: '2022-12-21 20:00'
        }
    ],
    dateClick: (info) => {
        console.log(info.date);
    }
};

////////////////////////////////////////////////////////////////

const calendar = new FullCalendar.Calendar(calendarElement, calOptions);
calendar.render();