
        
        $(document).ready(function() {
            $('#calendar').fullCalendar({
                header: {
                    left: 'prev,next today',
                    center: 'title',
                    right: 'month,basicWeek,basicDay'
                },
                dayClick: function(date, jsEvent, view) {
                    // Open a prompt to add a to-do list
                    var toDoList = prompt('Enter your to-do list for ' + date.format());
                    if (toDoList) {
                        // Create a new event for the clicked day
                        $('#calendar').fullCalendar('renderEvent', {
                            title: toDoList,
                            start: date,
                            allDay: true
                        }, true);
                    }
                }
            });
        });
    