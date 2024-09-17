import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { useLocalSearchParams } from 'expo-router';

interface MovieDetails {
  id: string;
  title: string;
  // Add more properties as needed
}

export default function Details() {
  const { id } = useLocalSearchParams<{ id: string }>();

  // TODO: Fetch movie details based on id
  const movieDetails: MovieDetails = {
    id,
    title: `Sample Movie ${id}`,
    // Add more details as needed
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{movieDetails.title}</Text>
      <Text>Details for Movie ID: {movieDetails.id}</Text>
      {/* Add more details here */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
});