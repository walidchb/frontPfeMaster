import React, { useEffect, useState } from "react";
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
import Loader from "../Loader";


function CalendrierView({ tasks }) {
  const [currentDate, setCurrentDate] = useState(new Date());
  const [taskss, setTaskss] = useState(null)

  useEffect(() => {
    
    setTaskss(tasks)
  }, [tasks]);

  const handleCurrentDateChange = (newDate) => {
    setCurrentDate(newDate);
  };

  const schedulerData = taskss?.map(task => ({
    title: task.Name,
    startDate: new Date(new Date(task.dateDebutEstim).setHours(8, 0, 0, 0)),
    endDate: new Date(new Date(task.dateFinEstim).setHours(17, 0, 0, 0))
  }));

  return (
    <>
    { taskss ? (
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
          <Appointments />
          <AppointmentTooltip />

          <DateNavigator />
          <TodayButton />
        </Scheduler>
      </Paper>
    </div>
    ) : (
      <Loader />
    )}
  </>
  )
}

export default CalendrierView;