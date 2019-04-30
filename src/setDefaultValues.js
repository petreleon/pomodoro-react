function setDefaultValues() {
    if(localStorage.getItem("pomodoroMinutes")==null){
        localStorage.setItem("pomodoroMinutes", "25");
    }
    if(localStorage.getItem("shortBreakMinutes")==null){
        localStorage.setItem("shortBreakMinutes", "5");
    }
    if(localStorage.getItem("longBreakMinutes")==null){
        localStorage.setItem("longBreakMinutes", "15");
    }
    if(localStorage.getItem("alarmLink")==null){
        localStorage.setItem("alarmLink", "https://www.youtube.com/watch?v=quxTnEEETbo");
    }
}

export default setDefaultValues;