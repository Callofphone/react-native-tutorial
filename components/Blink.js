import React, {Component} from 'react';
import { Text } from 'react-native';

export default class Blink extends Component {
    constructor(props) {
        super(props);
        this.state = {isShowingText: true};
        this.setBlinkInterval();
    }

    setBlinkInterval() {
        setInterval(() => {
            this.setState(previousState => {
                return { isShowingText: !previousState.isShowingText };
            });
        }, 1000);
    }

    render() {
        let display = this.state.isShowingText ? this.props.text : ' ';
        return (
            <Text>{display}</Text>
        );
    }
}