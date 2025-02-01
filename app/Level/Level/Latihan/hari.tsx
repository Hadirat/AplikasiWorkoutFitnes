import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  Image,
} from 'react-native';
import { useRouter } from 'expo-router';

export default function DayScreen() {
  const router = useRouter();

  return (
    <View style={styles.container}>
      <View>
              <TouchableOpacity
                style={styles.backButton}
                onPress={() => router.back()}
              >
                <Text style={styles.backButtonText}>{'←'}</Text>
              </TouchableOpacity>
              </View>
        <Image
          source={require('@/assets/top-layar1.jpg')}
          style={styles.layar1}
        />
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <TouchableOpacity
          style={styles.card}
          onPress={() => router.push('/Level/Level/Latihan/hari/hari-1')}>
          <View style={styles.cardContent}>
              <Text style={styles.cardTitle}>Hari 1</Text>
              <Text style={styles.cardSubtitle}>6 Latihan</Text>
            </View>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.card}
          onPress={() => router.push('/Level/Level/Latihan/hari/hari-2')}>
          <View style={styles.cardContent}>
              <Text style={styles.cardTitle}>Hari 2</Text>
              <Text style={styles.cardSubtitle}>5 Latihan</Text>
            </View>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.card}
          onPress={() => router.push('/Level/Level/Latihan/hari/hari-3')}>
          <View style={styles.cardContent}>
              <Text style={styles.cardTitle}>Hari 3</Text>
              <Text style={styles.cardSubtitle}>5 Latihan</Text>
            </View>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.card}
          onPress={() => router.push('/Level/Level/Latihan/hari/hari-4')}>
          <View style={styles.cardContent}>
              <Text style={styles.cardTitle}>Hari 4</Text>
              <Text style={styles.cardSubtitle}>Recovery / Peregangan</Text>
            </View>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.card}
          onPress={() => router.push('/Level/Level/Latihan/hari/hari-5')}>
          <View style={styles.cardContent}>
              <Text style={styles.cardTitle}>Hari 5</Text>
              <Text style={styles.cardSubtitle}>8 Latihan</Text>
            </View>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.card}
          onPress={() => router.push('/Level/Level/Latihan/hari/hari-2')}>
          <View style={styles.cardContent}>
              <Text style={styles.cardTitle}>Hari 6</Text>
              <Text style={styles.cardSubtitle}>7 Latihan</Text>
            </View>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.card}
          onPress={() => router.push('/Level/Level/Latihan/hari/hari-2')}>
          <View style={styles.cardContent}>
              <Text style={styles.cardTitle}>Hari 7</Text>
              <Text style={styles.cardSubtitle}>4 Latihan</Text>
            </View>
        </TouchableOpacity>

      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  layar1: {
    width: 400,
    height: 170,
    paddingBottom:10
  },
  scrollContainer: {
    padding: 20,
  },
  card: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: '#f9f9f9',
    borderRadius: 10,
    padding: 15,
    marginBottom: 15,
    elevation: 3,
  },
  
  cardContent: {
    flex: 1,
  },
  cardTitle: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  cardSubtitle: {
    fontSize: 14,
    color: '#555',
  },
  backButton: {
    position: 'absolute',
    top: 5,
    left: 5,
    zIndex: 1,
    borderRadius: 50,
    padding: 5,
  },
  backButtonText: {
    fontSize: 40,
    fontWeight: 'bold',
    color:'white'
  },
});
