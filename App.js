import React from 'react';
import {StyleSheet, Text, View, TextInput} from 'react-native';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      matchHours: '',
      matchMinute: '',
      arrivalHours: '',
      arrivalMinute: '',
    };
  }

  InputHoraPartida = text => {
    if (/^\d+$/.test(text)) {
      this.setState({
        matchHours: text,
      });
    }
  };
  InputMinutoPartida = text => {
    if (/^\d+$/.test(text)) {
      this.setState({
        matchMinute: text,
      });
    }
  };

  InputHoraChegada = text => {
    if (/^\d+$/.test(text)) {
      this.setState({
        arrivalHours: text,
      });
    }
  };
  InputMinutoChegada = text => {
    if (/^\d+$/.test(text)) {
      this.setState({
        arrivalMinute: text,
      });
    }
  };

  render() {
    return (
      <View>
        <Text> Partida</Text>
        <Text> Horas</Text>
        <TextInput
          keyboardType="numeric"
          onChangeText={this.InputHoraPartida}
          value={this.state.matchHours}
          style={{height: 40, borderColor: 'gray', borderWidth: 1}}
        />
        <Text> Minutos</Text>
        <TextInput
          keyboardType="numeric"
          onChangeText={this.InputMinutoPartida}
          value={this.state.matchMinute}
          style={{height: 40, borderColor: 'gray', borderWidth: 1}}
        />
        <Text>
          {' '}
          {this.state.matchHours}:{this.state.matchMinute}
        </Text>

        <Text>
          {parseInt(this.state.matchHours * 60) +
            parseInt(this.state.matchMinute)}{' '}
        </Text>

        <Text> Chegada</Text>
        <Text> Horas</Text>
        <TextInput
          keyboardType="numeric"
          onChangeText={this.InputHoraChegada}
          value={this.state.arrivalHours}
          style={{height: 40, borderColor: 'gray', borderWidth: 1}}
        />
        <Text> Minutos</Text>
        <TextInput
          keyboardType="numeric"
          onChangeText={this.InputMinutoChegada}
          value={this.state.arrivalMinute}
          style={{height: 40, borderColor: 'gray', borderWidth: 1}}
        />
        <Text>
          {' '}
          {this.state.arrivalHours}:{this.state.arrivalMinute}
        </Text>

        <Text>
          {parseInt(this.state.arrivalHours * 60) +
            parseInt(this.state.arrivalMinute)}{' '}
        </Text>
        <Text>Final</Text>
        <Text>
          {parseInt(this.state.arrivalHours * 60) +
            parseInt(this.state.arrivalMinute) -
            parseInt(this.state.matchHours * 60) -
            parseInt(this.state.matchMinute)}
        </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({});
