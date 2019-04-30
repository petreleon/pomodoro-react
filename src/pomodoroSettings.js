import {Card, CardBody, InputGroup, InputGroupAddon, Input} from 'reactstrap';
import * as React from "react";
import setDefaultValues from "./setDefaultValues";

class pomodoroSettings extends React.Component {
    constructor(props)
    {
        super(props);
        setDefaultValues();
        this.handleChange = this.handleChange.bind(this);
    };
    handleChange(event){
        localStorage.setItem("pomodoroMinutes", document.getElementById("pomodoroMinutes").value.toString());
        localStorage.setItem("shortBreakMinutes", document.getElementById("shortBreakMinutes").value.toString());
        localStorage.setItem("longBreakMinutes", document.getElementById("longBreakMinutes").value.toString());
        localStorage.setItem("alarmLink", document.getElementById("alarmLink").value.toString());
    }
    render(){
        return <CardBody className='w-100'>
            <InputGroup>
                <InputGroupAddon addonType="prepend">
                    Pomodoro
                </InputGroupAddon>
                <Input id="pomodoroMinutes" placeholder="" min={1} max={100} type="number" step="1" onChange={this.handleChange} />
                <InputGroupAddon addonType="append">
                    minutes
                </InputGroupAddon>
            </InputGroup>
            <InputGroup>
                <InputGroupAddon addonType="prepend">
                    Short break
                </InputGroupAddon>
                <Input id="shortBreakMinutes" placeholder="" min={1} max={100} type="number" step="1" onChange={this.handleChange} />
                <InputGroupAddon addonType="append">
                    minutes
                </InputGroupAddon>
            </InputGroup>

            <InputGroup>
                <InputGroupAddon addonType="prepend">
                    Long break
                </InputGroupAddon>
                <Input id="longBreakMinutes" placeholder="" min={1} max={100} type="number" step="1" onChange={this.handleChange} />
                <InputGroupAddon addonType="append">
                    minutes
                </InputGroupAddon>
            </InputGroup>
            <InputGroup>
                <InputGroupAddon addonType="prepend">
                    Link
                </InputGroupAddon>
                <Input id="alarmLink" placeholder=""  onChange={this.handleChange} />

            </InputGroup>
        </CardBody>
    }
    componentDidMount(){
        document.getElementById("pomodoroMinutes").value =parseInt(localStorage.getItem("pomodoroMinutes"));
        document.getElementById("shortBreakMinutes").value =parseInt(localStorage.getItem("shortBreakMinutes"));
        document.getElementById("longBreakMinutes").value =parseInt(localStorage.getItem("longBreakMinutes"));
        document.getElementById("alarmLink").value =localStorage.getItem("alarmLink");

    }
}

export default pomodoroSettings;