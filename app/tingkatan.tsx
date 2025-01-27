import React from 'react';
import { StyleSheet, View, Text, ScrollView, TouchableOpacity, Image } from 'react-native';
import { useRouter } from 'expo-router';

export default function tingkatan() {
  const router = useRouter();

  const handleHalaman = (tingkat) => {
    router.push(`/Level/${tingkat}`);
  }

  return (
    <View style={styles.container}>
      <View>
        <Image style={styles.layar1}
          source={require('../assets/top-layar2.jpg')}
        />
      </View>
      <Text style={styles.title}>Pilih jenis latihan</Text>
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <TouchableOpacity
          style={styles.card}
          onPress={() => handleHalaman('jenisLatihan')}>
          <Text style={styles.cardText}>Pemula 1</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.card}
          onPress={() => handleHalaman('jenisLatihan')}>
          <Text style={styles.cardText}>Pemula 2</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.card}
          onPress={() => handleHalaman('jenisLatihan')}>
          <Text style={styles.cardText}>Menengah 1</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.card}
          onPress={() => handleHalaman('jenisLatihan')}>
          <Text style={styles.cardText}>Menengah 2</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.card}
          onPress={() => handleHalaman('jenisLatihan')}>
          <Text style={styles.cardText}>Lanjutan</Text>
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
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    padding:10,
  },
  scrollContainer: {
    alignItems: 'center',
    padding:20
  },
  card: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#f9f9f9',
    borderRadius: 10,
    padding: 15,
    marginBottom: 15,
    width: '100%',
    elevation: 3,
  },
  layar1: {
    width: 400,
    height: 170,
    paddingBottom:10
  },
  cardText: {
    fontSize: 18,
    fontWeight: '500',
  },
});
