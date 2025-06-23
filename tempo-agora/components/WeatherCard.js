import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function WeatherCard({ data }) {
  const getConditionEmoji = (condition) => {
    switch (condition.toLowerCase()) {
      case 'ensolarado':
        return '☀️';
      case 'nublado':
        return '☁️';
      case 'chuvoso':
        return '🌧️';
      default:
        return '';
    }
  };

  return (
    <View style={styles.card}>
      <Text style={styles.city}>{data.city}</Text>
      <Text style={styles.temp}>{data.temperature}°C</Text>
      <Text style={styles.condition}>
        {data.condition} {getConditionEmoji(data.condition)}
      </Text>
      <Text style={styles.info}>💧 Umidade: {data.humidity}%</Text>
      <Text style={styles.info}>💨 Vento: {data.windSpeed} km/h</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#ffffff',
    borderRadius: 12,
    padding: 20,
    marginBottom: 15,
    width: '100%',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 5,
  },
  city: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#222',
  },
  temp: {
    fontSize: 40,
    fontWeight: '300',
    color: '#007AFF',
  },
  condition: {
    fontSize: 18,
    fontStyle: 'italic',
    marginBottom: 10,
    color: '#555',
  },
  info: {
    fontSize: 16,
    color: '#444',
  },
});
