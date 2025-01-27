import React from 'react';
import { StyleSheet, View, Text, ScrollView, TouchableOpacity, Image } from 'react-native';
import { useRouter } from 'expo-router';

export default function jenisLatihan() {

  const handleHalamanLatihan = (latihan) => {
    router.push(`/Level/Level/Latihan/${latihan}`);
  }

  const router = useRouter();
  
  return (
    <View style={styles.container}>
        <View>
            <Image style={styles.layar1}
            source={require('@/assets/top-layar1.jpg')}></Image>
        </View>
        <Text style={styles.title}>Pilih jenis latihan</Text>
        <ScrollView contentContainerStyle={styles.scrollContainer}>
        <TouchableOpacity
          style={styles.card}
          onPress={() => handleHalamanLatihan('hari')}>
          <Image source={require('@/assets/full_body.png')} style={styles.image} />
          <Text style={styles.cardText}>Latihan Tubuh Penuh</Text>
        </TouchableOpacity>
      
        <TouchableOpacity
          style={styles.card}
          onPress={() => handleHalamanLatihan('hari')}>
          <Image source={require('@/assets/abs.png')} style={styles.image} />
          <Text style={styles.cardText}>Latihan Otot Perut</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.card}
          onPress={() => handleHalamanLatihan('hari')}>
          <Image source={require('@/assets/glutes.png')} style={styles.image} />
          <Text style={styles.cardText}>Latihan Bokong</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.card}
          onPress={() => handleHalamanLatihan('hari')}>
          <Image source={require('@/assets/arms.png')} style={styles.image} />
          <Text style={styles.cardText}>Latihan Lengan</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.card}
          onPress={() => handleHalamanLatihan('hari')}>
          <Image source={require('@/assets/legs.png')} style={styles.image} />
          <Text style={styles.cardText}>Latihan Kaki</Text>
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
    padding:10
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
    marginBottom:10
  },
  image: {
    width: 50,
    height: 50,
    borderRadius: 5,
    marginRight: 15,
  },
  cardText: {
    fontSize: 18,
    fontWeight: '500',
  },
});
