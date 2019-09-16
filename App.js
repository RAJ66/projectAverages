import React from 'react';
import {StyleSheet, Text, View, TextInput} from 'react-native';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      matchHours: '0',
      matchMinute: '0',
      arrivalHours: '0',
      arrivalMinute: '0',
      arrivalSeconds: '0',

      distance: '0',
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
  InputSecondsChegada = text => {
    if (/^\d+$/.test(text)) {
      this.setState({
        arrivalSeconds: text,
      });
    }
  };

  InputDisatance = text => {
    if (/^\d+$/.test(text)) {
      this.setState({
        distance: text,
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
        {/* A JSX comment 
        <Text>
          {parseInt(this.state.matchHours * 60 * 60) +
            parseInt(this.state.matchMinute * 60)}{' '}
        </Text>*/}

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
        <Text> Segundos</Text>
        <TextInput
          keyboardType="numeric"
          onChangeText={this.InputSecondsChegada}
          value={this.state.arrivalSeconds}
          style={{height: 40, borderColor: 'gray', borderWidth: 1}}
        />
        <Text>
          {' '}
          {this.state.arrivalHours}:{this.state.arrivalMinute}:
          {this.state.arrivalSeconds}
        </Text>

        {/* A JSX comment 
        <Text>
          {parseInt(this.state.arrivalHours * 60) * 60 +
            parseInt(this.state.arrivalMinute * 60) +
            parseInt(this.state.arrivalSeconds)}{' '}
        </Text>
        <Text>Final</Text>
        <Text>
          {parseInt(this.state.arrivalHours * 60 * 60) +
            parseInt(this.state.arrivalMinute * 60) +
            parseInt(this.state.arrivalSeconds) -
            parseInt(this.state.matchHours * 60 * 60) -
            parseInt(this.state.matchMinute * 60)}
        </Text>*/}

        <Text> Distancia</Text>
        <TextInput
          keyboardType="numeric"
          onChangeText={this.InputDisatance}
          value={this.state.distance}
          style={{height: 40, borderColor: 'gray', borderWidth: 1}}
        />
        <Text> Dsitancia:{this.state.distance}</Text>

        <Text> Media</Text>
        <Text>
          {(60 * this.state.distance) /
            (parseInt(this.state.arrivalHours * 60 * 60) +
              parseInt(this.state.arrivalMinute * 60) +
              parseInt(this.state.arrivalSeconds) -
              parseInt(this.state.matchHours * 60 * 60) -
              parseInt(this.state.matchMinute * 60))}{' '}
        </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({});
