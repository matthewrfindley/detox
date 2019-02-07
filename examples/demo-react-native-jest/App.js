import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  DatePickerIOS  
} from 'react-native';

export default class example extends Component {
  constructor(props) {
    super(props);
    this.state = {
      greeting: undefined,
      date: new Date()
    };
  }
  render() {
    if (this.state.greeting) return this.renderAfterButton();
    return (
      <View testID='welcome' style={{flex: 1, paddingTop: 20, justifyContent: 'center', alignItems: 'center'}}>
        <Text style={{fontSize: 25, marginBottom: 30}}>
          Welcome
        </Text>
        <TouchableOpacity testID='hello_button' onPress={this.onButtonPress.bind(this, 'Hello')}>
          <Text style={{color: 'blue', marginBottom: 20}}>Say Hello</Text>
        </TouchableOpacity>
        <TouchableOpacity testID='world_button' onPress={this.onButtonPress.bind(this, 'World')}>
          <Text style={{color: 'blue', marginBottom: 20}}>Say World</Text>
        </TouchableOpacity>
      </View>
    );
  }
  renderAfterButton() {
    return (
      <View>
        <View style={{flex: 1, paddingTop: 20, justifyContent: 'center', alignItems: 'center'}}>
          <Text style={{fontSize: 25}}>
            {this.state.greeting}!!!
          </Text>
        </View>
        <DatePickerIOS
          date={this.state.date}
          mode={'datetime'}
          onDateChange={(newDate) => this.setState({ date: newDate })}
        />
        <Text testID="selected_month">
          {(this.state.date.getMonth() + 1).toString()}
        </Text>
        <Text testID="selected_day">
          {this.state.date.getDate().toString()}
        </Text>
        <Text testID="selected_year">
          {this.state.date.getFullYear().toString()}
        </Text>
        <Text testID="selected_hours">
          {this.state.date.getHours().toString()}
        </Text>
        <Text testID="selected_minutes">
          {this.state.date.getMinutes().toString()}
        </Text>
      </View>
    );
  }
  onButtonPress(greeting) {
    this.setState({
      greeting: greeting
    });
  }
}
