import {Component, OnInit} from '@angular/core';
import {CalendarOptions} from "@fullcalendar/core";
import dayGridPlugin from '@fullcalendar/daygrid';
import interactionPlugin from '@fullcalendar/interaction';
import {AdminService} from "../../../modules/admin/services/admin.service";

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrl: './test.component.scss'
})
export class TestComponent implements OnInit{

  calendarOptions: CalendarOptions = {
    initialView: 'dayGridMonth',
    plugins: [dayGridPlugin, interactionPlugin],
    headerToolbar: {
      left: 'prev,next today',
      center: 'title',
      right: 'dayGridMonth,dayGridWeek,dayGridDay'
    },
    events: [],
    editable: true,
    selectable: true,
    select: this.handleDateSelect.bind(this),
    eventClick: this.handleEventClick.bind(this),
    eventDrop: this.handleEventDrop.bind(this)
  };

  constructor(private adminService: AdminService) {}

  ngOnInit(): void {
    this.loadProjects();
  }
  handleDateSelect(selectInfo: any) {

  }


  handleEventClick(clickInfo: any) {

    alert(
      `Event: ${clickInfo.event.title}\n` +
      `Priority: ${clickInfo.event.extendedProps.priority}\n` +
      `Employee Name: ${clickInfo.event.extendedProps.employeeName}\n` +
      `Start Date: ${clickInfo.event.startStr}`
    )
  }

  handleEventDrop(dropInfo: any) {
    const newStartDate = dropInfo.event.startStr; // This is the new due date
    const projectId = dropInfo.event.id; // Assuming you're using the project ID as the event ID

    // Prepare the payload for the API call
    const updatePayload = {
      id: projectId,
      dueDate: newStartDate,
    };
    console.log(updatePayload)


    this.adminService.updateProjectDueDate(updatePayload).subscribe(
      (response) => {
        console.log('Due date updated successfully:', response);
        // Optionally, refresh the calendar events here if needed
      },
      (error) => {
        console.error('Error updating due date:', error);
        // Optionally, provide feedback to the user about the error
      }
    );
  }

  private loadProjects() {
    this.adminService.getAllProjects().subscribe(
      (projects) => {
        console.log(projects)
        const calendarEvents = projects.map((project: any) => {
          return {
            id: project.id,
            title: project.title,
            start: project.dueDate,
            extendedProps: {
              priority: project.priority,
              employeeName: project.employeeName

            }
          };
        });


        this.calendarOptions.events = calendarEvents;
      },
      (error) => {
        console.error('Error fetching projects:', error);
      }
    );
  }
}
