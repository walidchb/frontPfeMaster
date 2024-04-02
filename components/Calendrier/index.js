import React, { useState } from "react";
import Paper from "@mui/material/Paper";
import { ViewState } from "@devexpress/dx-react-scheduler";
import {
  Scheduler,
  Appointments,
  AppointmentTooltip,
  MonthView,
  WeekView,
  DayView,
  Toolbar,
  DateNavigator,
  TodayButton,
  ViewSwitcher,
} from "@devexpress/dx-react-scheduler-material-ui";
import "./style.css";
function CalendrierView() {
  const [currentDate, setCurrentDate] = useState(new Date());

  const handleCurrentDateChange = (newDate) => {
    setCurrentDate(newDate);
  };

  const schedulerData = [
    {
      title: "Task 1",
      startDate: new Date(2024, 2, 28, 9, 30),
      endDate: new Date(2024, 2, 28, 12, 0),
    },
    {
      title: "Task 2",
      startDate: new Date(2024, 2, 31, 9, 30),
      endDate: new Date(2024, 3, 1, 12, 0),
    },
    {
      title: "Task 3",
      startDate: new Date(2024, 2, 31, 12, 30),
      endDate: new Date(2024, 2, 31, 16, 0),
    },
    {
      title: "Task 4",
      startDate: new Date(2024, 3, 2, 8, 0),
      endDate: new Date(2024, 3, 2, 17, 0),
    },
    {
      title: "Task 5",
      startDate: new Date(2024, 3, 4, 9, 0),
      endDate: new Date(2024, 3, 4, 13, 0),
    },
    {
      title: "Task 6",
      startDate: new Date(2024, 3, 7, 8, 30),
      endDate: new Date(2024, 3, 7, 14, 0),
    },
    {
      title: "Task 7",
      startDate: new Date(2024, 3, 7, 12, 0),
      endDate: new Date(2024, 3, 9, 14, 0),
    },
    {
      title: "Task 8",
      startDate: new Date(2024, 3, 8, 9, 30),
      endDate: new Date(2024, 3, 9, 12, 0),
    },
  ];

  return (
    <div className="bg-[url('/BG.jpeg')] w-full p-4 costumScrollBar mx-auto overflow-y-auto">
      <Paper className=" w-full">
        <Scheduler data={schedulerData} locale="fr-FR">
          <ViewState
            defaultCurrentDate={currentDate}
            onCurrentDateChange={handleCurrentDateChange}
          />
          <Toolbar />
          <ViewSwitcher />
          <MonthView />
          <WeekView startDayHour={8} endDayHour={17} excludedDays={[5, 6]} />
          <DayView startDayHour={8} endDayHour={17} />
          <Appointments />
          <AppointmentTooltip />

          <DateNavigator />
          <TodayButton />
        </Scheduler>
      </Paper>
    </div>
  );
}

export default CalendrierView;
