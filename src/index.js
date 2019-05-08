import React from "react"
import ReactDOM from "react-dom"
import {observable,action} from 'mobx';
import {observer} from 'mobx-react';

let appState = observable({
    timer: 0
});

appState.resetTimer = action(function reset() {
    appState.timer = 0;
});

setInterval(action(function tick() {
    appState.timer += 1;
}), 1000);

@observer
class TimerView extends React.Component {
    render() {
        return (
            <div>
                <button onClick={this.onReset.bind(this)}>
                    过去了多少下: {this.props.appState.timer}
                </button>
            </div>
        );
    }

    onReset() {
        this.props.appState.resetTimer();
    }
};

ReactDOM.render(<TimerView appState={appState} />, document.querySelector("#root"));