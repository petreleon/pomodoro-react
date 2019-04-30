import {Button, ButtonGroup, CardBody, Collapse} from 'reactstrap';
import * as React from "react";
import setDefaultValues from "./setDefaultValues";
import ReactPlayer from 'react-player';

var setI;

class pomodoroHome extends React.Component {
    constructor(props)
    {
        super(props);
        setDefaultValues();
        this.onEntering = this.onEntering.bind(this);
        this.onEntered = this.onEntered.bind(this);
        this.onExiting = this.onExiting.bind(this);
        this.onExited = this.onExited.bind(this);
        this.toggle = this.toggle.bind(this);
        this.playAlarm = this.playAlarm.bind(this);
        this.stopAlarm = this.stopAlarm.bind(this);
        this.pomodoro = this.pomodoro.bind(this);
        this.shortBreak = this.shortBreak.bind(this);
        this.longBreak = this.longBreak.bind(this);
        this.FormatNumberLength = this.FormatNumberLength.bind(this);
        this.timedLoop = this.timedLoop.bind(this);
        this.state = { collapse: false, status: 'Closed', url: null, playing:false, pomodoroTime:true, shortBreakTime:false, longBreakTime:false, stringOutput:"Welcome to Pomodoro App", };
    };
    onEntering() {
        this.setState({
            status: 'Opening...'
        });
    }

    onEntered() {
        this.setState({
            status: 'Opened',
            url:localStorage.getItem("alarmLink"),
            playing:true
        });

    }

    onExiting() {
        this.setState({
            status: 'Closing...' ,
            playing:false
        });

    }

    onExited() {
        this.setState({
            url:null,
            status: 'Closed'
        });
    }

    toggle() {
        this.setState(state => ({ collapse: !state.collapse }));
    }
    playAlarm(){
        this.setState({collapse:true, playing:true});
    }
    stopAlarm(){
        this.setState({collapse:false, playing:false});
    }
    pomodoro(){
        this.stopAlarm();
        this.setState({
            pomodoroTime:true,
            shortBreakTime:false,
            longBreakTime:false,

        });
        clearInterval(setI);
        this.timedLoop("pomodoro", localStorage.getItem("pomodoroMinutes"));
    }
    shortBreak(){
        this.stopAlarm();
        this.setState({
            pomodoroTime:false,
            shortBreakTime:true,
            longBreakTime:false,
        });
        clearInterval(setI);
        this.timedLoop("short break", localStorage.getItem("shortBreakMinutes"));
    }
    longBreak(){

        this.stopAlarm();
        this.setState({
            pomodoroTime:false,
            shortBreakTime:false,
            longBreakTime:true,

        });
        clearInterval(setI);
        this.timedLoop("short break", localStorage.getItem("longBreakMinutes"));
    }
    FormatNumberLength(num, length) {
        var r = "" + num;
        while (r.length < length) {
            r = "0" + r;
        }
        return r;
    }

    timedLoop(stringToOutput, minutes){
        var secondsToStop=parseInt(minutes,10)*60;
        setI=setInterval(()=>{
            this.setState({stringOutput:stringToOutput+' '+this.FormatNumberLength(Math.floor(secondsToStop/60),2)+':'+this.FormatNumberLength(secondsToStop%60,2)});
            if(secondsToStop===0){
                this.setState({stringOutput:stringToOutput+" finished"});
                this.playAlarm();
                clearInterval(setI);
            }
            secondsToStop--;
        }, 1000);

    }


    render(){
        return <CardBody >

            <ButtonGroup>
                <Button onClick={this.toggle}> Testing </Button>
                <Button onClick={this.pomodoro}>Pomodoro</Button>
                <Button onClick={this.shortBreak}>Short Break</Button>
                <Button onClick={this.longBreak}>Long Break</Button>
            </ButtonGroup>
            <h2>{this.state.stringOutput}</h2>
            <Collapse style={{display: 'flex', justifyContent: 'center'}}
                isOpen={this.state.collapse}
                onEntering={this.onEntering}
                onEntered={this.onEntered}
                onExiting={this.onExiting}
                onExited={this.onExited}
            >
                <ReactPlayer url={this.state.url} playing={this.state.playing}/>
            </Collapse>

        </CardBody>
    }
}

export default pomodoroHome;