import { router } from 'expo-router';
import React, { useState, useEffect } from 'react';
import { StyleSheet, View, Text, Image, FlatList, TouchableOpacity, Alert, ScrollView } from 'react-native';

const latihan = [
  { id: 1, name: 'Push-Up', duration: 20, image: require('@/assets/push-up.png') },
  { id: 2, name: 'Sit-Up', duration: 20, image: require('@/assets/sit-up.png') },
  { id: 3, name: 'Squats', duration: 20, image: require('@/assets/squat.png') },
  { id: 4, name: 'Plank', duration: 20, image: require('@/assets/plank.png') },
  { id: 5, name: 'Jumping Jacks', duration: 20, image: require('@/assets/jumping-jacks.png') },
  { id: 6, name: 'Wall Push-Up', duration: 20, image: require('@/assets/push-up.png') },
];

export default function hari() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isRunning, setIsRunning] = useState(false);
  const [timer, setTimer] = useState(latihan[0].duration);
  const [isBreak, setIsBreak] = useState(false);

  useEffect(() => {
    let interval;
    if (isRunning && timer > 0) {
      interval = setInterval(() => setTimer((prev) => prev - 1), 1000);
    } else if (timer === 0) {
      clearInterval(interval);
      if (!isBreak && currentIndex < latihan.length - 1) {
        // Selesai latihan, masuk ke waktu break
        setIsBreak(true);
        setIsRunning(false);
      } else if (isBreak) {
        // Setelah waktu break selesai, menunggu user klik "Mulai"
        setIsBreak(false);
        setCurrentIndex((prev) => prev + 1);
        setTimer(latihan[currentIndex + 1].duration);
      } else if (currentIndex === latihan.length - 1) {
        // Tampilkan notifikasi latihan selesai
        Alert.alert('Latihan Selesai', 'Anda telah menyelesaikan latihan hari 1!', [
          { text: 'OK', onPress: () => router.push('/Level/Level/Latihan/hari') },
        ]);
      }
    }
    return () => clearInterval(interval);
  }, [isRunning, timer, currentIndex]);

  const handleStart = () => {
    setIsRunning(true);
    if (!isBreak) {
      setTimer(latihan[currentIndex].duration); // Set timer latihan
    } else {
      setTimer(10); // Waktu break, misalnya 10 detik
    }
  };
  const renderExercise = ({ item, index }) => (
    <ScrollView contentContainerStyle={styles.scrollContainer}>
  
    <View style={[styles.workoutItem, currentIndex === index && styles.activeExercise]}>
      <Image source={item.image} style={styles.workoutImage} />
      <View>
        <Text style={styles.workoutName}>{item.name}</Text>
        <Text style={styles.workoutTime}>
          {`00:${item.duration.toString().padStart(2, '0')}`}
        </Text>
      </View>
    </View>

    </ScrollView>
  );

  return (
    <View style={styles.container}>
      <Image source={require('@/assets/abs.png')} style={styles.layar1} />
      <View style={styles.statsContainer}>
        <Text style={styles.statText}>11 Latihan</Text>
        <Text style={styles.statText}>7 Menit</Text>
      </View>
      <FlatList
        data={latihan}
        renderItem={renderExercise}
        keyExtractor={(item) => item.id}
        style={styles.workoutTextContainer}
      />
      
     <TouchableOpacity style={styles.startButton} onPress={handleStart}>
        <Text style={styles.startButtonText}>
          {isBreak
            ? `Istirahat: 00:${timer.toString().padStart(2, '0')}`
            : isRunning
            ? `Sisa Waktu: 00:${timer.toString().padStart(2, '0')}`
            : 'Mulai'}
        </Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  workoutImage: {
    width: 50,
    height: 50,
    marginRight: 15,
  },
  workoutItem: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
    borderRadius: 10,
    backgroundColor: '#f9f9f9',
    elevation: 3,
  },
  workoutName: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  workoutTextContainer: {
    flex: 1,
  },
  workoutTime: {
    fontSize: 14,
    color: '#555',
  },
  scrollContainer: {
    flex:1,
    paddingBlock: 10,
    padding:20
  },
  layar1: {
    width: 400,
    height: 170,
    
  },
  statsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingVertical: 10,
    backgroundColor: '#f5f5f5',
  },
  statText: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  exerciseList: {
    flex: 1,
  },
  
  activeExercise: {
    backgroundColor: '#1CAF80',
  },
  exerciseDuration: {
    fontSize: 14,
    color: '#777',
  },
  startButton: {
    backgroundColor: '#4CAF80',
    paddingVertical: 15,
    alignItems: 'center',
    justifyContent: 'center',
  },
  startButtonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
});