import React, { useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, LinearGradient } from 'react-native';

export default function App() {
  const [scoreA, setScoreA] = useState(0);
  const [scoreB, setScoreB] = useState(0);

  const teamA = "Tim A";
  const teamB = "Tim B";

  const incrementScore = (team) => {
    if (team === 'A') {
      setScoreA((prev) => prev + 1);
    } else if (team === 'B') {
      setScoreB((prev) => prev + 1);
    }
  };

  const decrementScore = (team) => {
    if (team === 'A' && scoreA > 0) {
      setScoreA((prev) => prev - 1);
    } else if (team === 'B' && scoreB > 0) {
      setScoreB((prev) => prev - 1);
    }
  };

  const resetScores = () => {
    setScoreA(0);
    setScoreB(0);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>PAPAN SCORE</Text>

      {/* Tampilan Horizontal dengan Desain Menarik */}
      <View style={styles.horizontalContainer}>
        {/* Tim A */}
        <View style={styles.teamContainer}>
          <Text style={styles.teamName}>{teamA}</Text>
          <Text style={styles.score}>{scoreA}</Text>
          <View style={styles.buttonContainer}>
            <TouchableOpacity
              style={[styles.button, styles.incrementButton]}
              onPress={() => incrementScore('A')}
            >
              <Text style={styles.buttonText}>+</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={[styles.button, styles.decrementButton]}
              onPress={() => decrementScore('A')}
            >
              <Text style={styles.buttonText}>-</Text>
            </TouchableOpacity>
          </View>
        </View>

        {/* Tim B */}
        <View style={styles.teamContainer}>
          <Text style={styles.teamName}>{teamB}</Text>
          <Text style={styles.score}>{scoreB}</Text>
          <View style={styles.buttonContainer}>
            <TouchableOpacity
              style={[styles.button, styles.incrementButton]}
              onPress={() => incrementScore('B')}
            >
              <Text style={styles.buttonText}>+</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={[styles.button, styles.decrementButton]}
              onPress={() => decrementScore('B')}
            >
              <Text style={styles.buttonText}>-</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>

      {/* Tombol Reset */}
      <TouchableOpacity style={styles.resetButton} onPress={resetScores}>
        <Text style={styles.resetText}>Reset Pertandingan</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#e0f7fa',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#006064',
    marginBottom: 30,
  },
  horizontalContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
    paddingHorizontal: 10,
  },
  teamContainer: {
    flex: 1,
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#ffffff',
    borderRadius: 20,
    marginHorizontal: 10,
    elevation: 5,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    borderColor: '#b2ebf2',
    borderWidth: 2,
  },
  teamName: {
    fontSize: 24,
    fontWeight: '700',
    color: '#004d40',
    marginBottom: 10,
  },
  score: {
    fontSize: 60,
    fontWeight: 'bold',
    color: '#00796b',
    marginBottom: 15,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '100%',
  },
  button: {
    width: 40,
    height: 50,
    borderRadius: 30,
    alignItems: 'center',
    justifyContent: 'center',
    elevation: 3,
  },
  incrementButton: {
    backgroundColor: '#4caf50',
  },
  decrementButton: {
    backgroundColor: '#f44336',
  },
  buttonText: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#fff',
  },
  resetButton: {
    marginTop: 30,
    backgroundColor: '#ffa726',
    paddingVertical: 15,
    paddingHorizontal: 30,
    borderRadius: 20,
    elevation: 3,
  },
  resetText: {
    fontSize: 18,
    fontWeight: '600',
    color: '#fff',
  },
});
