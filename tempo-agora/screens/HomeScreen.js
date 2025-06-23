import React, { useState, useEffect } from 'react';
import { StyleSheet, View, ScrollView, Text, TouchableOpacity, Linking } from 'react-native';
import WeatherCard from '../components/WeatherCard';

export default function HomeScreen() {
  const [weatherData, setWeatherData] = useState([]);

  useEffect(() => {
    const simulatedData = [
      {
        id: 1,
        city: 'São Paulo',
        temperature: 27,
        humidity: 60,
        windSpeed: 12,
        condition: 'Ensolarado',
      },
      {
        id: 2,
        city: 'Rio de Janeiro',
        temperature: 30,
        humidity: 65,
        windSpeed: 10,
        condition: 'Nublado',
      },
      {
        id: 3,
        city: 'Curitiba',
        temperature: 18,
        humidity: 70,
        windSpeed: 8,
        condition: 'Chuvoso',
      },
    ];
    setWeatherData(simulatedData);
  }, []);

  const handleMoreInfo = () => {
    Linking.openURL('https://www.climatempo.com.br');
  };

  return (
    <View style={styles.background}>
      <ScrollView contentContainerStyle={styles.container}>
        <Text style={styles.title}>Tempo Agora</Text>
        {weatherData.map((data) => (
          <WeatherCard key={data.id} data={data} />
        ))}
        <TouchableOpacity onPress={handleMoreInfo} style={styles.button}>
          <Text style={styles.buttonText}>Mais Informações</Text>
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    backgroundColor: '#D6EBFF', // azul clarinho em todo o fundo
  },
  container: {
    paddingVertical: 50,
    paddingHorizontal: 20,
    alignItems: 'center',
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#333',
  },
  button: {
    marginTop: 30,
    backgroundColor: '#007AFF',
    paddingVertical: 12,
    paddingHorizontal: 25,
    borderRadius: 10,
    elevation: 4,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 3,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
  },
});
