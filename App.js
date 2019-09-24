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
      <View style={styles.container}>
        <View style={styles.input}>
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
        </View>
        <View style={styles.arrival}>
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
        </View>
        <View style={styles.distance}>
          <Text> Distancia</Text>
          <TextInput
            keyboardType="numeric"
            onChangeText={this.InputDisatance}
            value={this.state.distance}
            style={{height: 40, borderColor: 'gray', borderWidth: 1}}
          />
          {/*<Text> Distancia:{this.state.distance}</Text>*/}
        </View>
        {/*<Text> Media</Text>*/}
        <Text style={styles.result}>
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

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#192F38',
  },
  result: {
    fontWeight: 'bold',
    fontSize: 30,
    alignSelf: 'center',
    color: '#f5f5f5',
    paddingTop: 50,
  },
  input: {
    backgroundColor: '#B4CCD6',
    borderWidth: 10,
    borderColor: '#192F38',
  },
  arrival: {
    backgroundColor: '#F6B4A7',
    borderWidth: 10,
    borderColor: '#192F38',
  },
  distance: {
    backgroundColor: '#97BF7A',
    borderWidth: 10,
    borderColor: '#192F38',
  },
});
