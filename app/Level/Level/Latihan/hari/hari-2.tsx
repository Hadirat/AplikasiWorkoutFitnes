import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  Image,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import { useRouter } from 'expo-router';

export default function FullBodyWorkout() {
  const router = useRouter();

  const workouts = [
    { id: 1, name: 'Push', time: '00.20', image: require('@/assets/top-layar1.jpg') },
    { id: 2, name: 'Sit-Up', time: '00.20', image: require('@/assets/top-layar1.jpg') },
    { id: 3, name: 'Squats', time: '00.20', image: require('@/assets/top-layar1.jpg') },
    { id: 4, name: 'Plank', time: '00.20', image: require('@/assets/top-layar1.jpg') },
    { id: 5, name: 'Jumping jacks', time: '00.20', image: require('@/assets/top-layar1.jpg') },
    { id: 6, name: 'Wall push-up', time: '00.20', image: require('@/assets/top-layar1.jpg') },
  ];

  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <TouchableOpacity
          style={styles.backButton}
          onPress={() => router.back()}
        >
          <Text style={styles.backButtonText}>{'<'}</Text>
        </TouchableOpacity>
        <Image
          source={require('@/assets/top-layar1.jpg')} // Ganti dengan gambar header yang sesuai
          style={styles.headerImage}
        />
        <View style={styles.infoContainer}>
          <Text style={styles.infoText}>11 Latihan</Text>
          <Text style={styles.infoText}>|</Text>
          <Text style={styles.infoText}>7 Menit</Text>
        </View>
      </View>

      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <Text style={styles.sectionTitle}>Latihan</Text>
        {workouts.map((workout) => (
          <View key={workout.id} style={styles.workoutItem}>
            <Image source={workout.image} style={styles.workoutImage} />
            <View style={styles.workoutTextContainer}>
              <Text style={styles.workoutName}>{workout.name}</Text>
              <Text style={styles.workoutTime}>{workout.time}</Text>
            </View>
          </View>
        ))}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  headerContainer: {
    position: 'relative',
    height: 200,
    backgroundColor: '#000',
  },
  backButton: {
    position: 'absolute',
    top: 40,
    left: 20,
    zIndex: 10,
    backgroundColor: 'rgba(255, 255, 255, 0.8)',
    borderRadius: 20,
    padding: 10,
  },
  backButtonText: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  headerImage: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
  },
  infoContainer: {
    position: 'absolute',
    bottom: 10,
    left: 20,
    flexDirection: 'row',
    alignItems: 'center',
  },
  infoText: {
    fontSize: 16,
    color: '#fff',
    marginHorizontal: 5,
    fontWeight: 'bold',
  },
  scrollContainer: {
    padding: 20,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 15,
  },
  workoutItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 15,
    padding: 10,
    borderRadius: 10,
    backgroundColor: '#f9f9f9',
    elevation: 3,
  },
  workoutImage: {
    width: 50,
    height: 50,
    marginRight: 15,
  },
  workoutTextContainer: {
    flex: 1,
  },
  workoutName: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  workoutTime: {
    fontSize: 14,
    color: '#555',
  },
});
