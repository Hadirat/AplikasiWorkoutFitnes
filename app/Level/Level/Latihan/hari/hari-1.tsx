import { useRouter } from "expo-router";
import React, { useState } from "react";
import { StyleSheet, View, Text, Image, FlatList, TouchableOpacity, Alert, ScrollView } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import styles from "./style";

const latihan = [
    { id: "1", name: "Push-Up", reps: "3 set x 8 repetisi", image: require("@/assets/hari-1/push-up.png") },
    { id: "2", name: "Sit-Up", reps: "3 set x 10 repetisi", image: require("@/assets/hari-1/sit-up.png") },
    { id: "3", name: "Squats", reps: "3 set x 10 repetisi", image: require("@/assets/hari-1/squat.png") },
    { id: "4", name: "Plank", reps: "15 detik, 3 kali", image: require("@/assets/hari-1/plank.png") },
    { id: "5", name: "Jumping Jacks", reps: "30 detik x 3 set", image: require("@/assets/hari-1/jumping-jacks.png") },
    { id: "6", name: "Wall Push-Up", reps: "3 set x 12 repetisi", image: require("@/assets/hari-1/wall-push.png") },
  ];
  

export default function Hari1() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const router = useRouter();

  const saveProgress = async () => {
    try {
      const progress = await AsyncStorage.getItem("completedDays");
      const parsedProgress = progress ? JSON.parse(progress) : [];
      if (!parsedProgress.includes("hari-1")) {
        parsedProgress.push("hari-1");
        await AsyncStorage.setItem("completedDays", JSON.stringify(parsedProgress));
      }
      await AsyncStorage.setItem("hari-1", JSON.stringify(latihan));
    } catch (error) {
      console.error("Error saving progress: ", error);
    }
  };

  const handleStart = () => {
    if (currentIndex < latihan.length - 1) {
      setCurrentIndex((prev) => prev + 1);
    } else {
      Alert.alert("Latihan Selesai", "Anda telah menyelesaikan latihan hari 1!", [
        {
          text: "OK",
          onPress: () => {
            saveProgress();
          },
        },
      ]);
    }
  };

  const renderExercise = ({ item, index }) => (
    <ScrollView contentContainerStyle={styles.scrollContainer}>
      <View style={[styles.workoutItem, currentIndex === index && styles.activeExercise]}>
        <Image source={item.image} style={styles.workoutImage} />
        <View>
          <Text style={styles.workoutName}>{item.name}</Text>
          <Text style={styles.workoutReps}>{item.reps}</Text>
        </View>
      </View>
    </ScrollView>
  );

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.backButton} onPress={() => router.back()}>
        <Text style={styles.backButtonText}>{"←"}</Text>
      </TouchableOpacity>
      <Image source={require("@/assets/top-layar2.jpg")} style={styles.layar1} />
      <View style={styles.statsContainer}>
        <Text style={styles.statText}>6 Latihan</Text>
        <Text style={styles.statText}>12 Menit</Text>
      </View>
      <FlatList
        data={latihan}
        renderItem={renderExercise}
        keyExtractor={(item) => item.id}
        style={styles.workoutTextContainer}
      />
      <TouchableOpacity style={styles.startButton} onPress={handleStart}>
        <Text style={styles.startButtonText}>
          {currentIndex < latihan.length - 1 ? "Latihan Berikutnya" : "Selesai"}
        </Text>
      </TouchableOpacity>
    </View>
  );
}
