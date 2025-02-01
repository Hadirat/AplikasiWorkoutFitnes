import React, { useState } from "react";
import { View, Text, FlatList, TouchableOpacity, StyleSheet } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useFocusEffect } from "expo-router";

export default function Laporan() {
  const [completedDays, setCompletedDays] = useState<string[]>([]);
  const [selectedDay, setSelectedDay] = useState<string | null>(null);
  const [selectedDayDetails, setSelectedDayDetails] = useState<any[]>([]);

  useFocusEffect(
    React.useCallback(() => {
      const fetchCompletedDays = async () => {
        try {
          const progress = await AsyncStorage.getItem("completedDays");
          const parsedProgress = progress ? JSON.parse(progress) : [];
          setCompletedDays(parsedProgress);
        } catch (error) {
          console.error("Error fetching progress: ", error);
        }
      };

      fetchCompletedDays();
    }, [])
  );

  const fetchDayDetails = async (day: string) => {
    try {
      if (selectedDay === day) {
        setSelectedDay(null);
        setSelectedDayDetails([]);
        return;
      }

      const dayDetails = await AsyncStorage.getItem(day);
      const parsedDetails = dayDetails ? JSON.parse(dayDetails) : [];
      setSelectedDay(day);
      setSelectedDayDetails(parsedDetails);
    } catch (error) {
      console.error("Error fetching day details: ", error);
    }
  };

  const deleteDay = async (day: string) => {
    try {
      const updatedDays = completedDays.filter((item) => item !== day);
      setCompletedDays(updatedDays);
      await AsyncStorage.setItem("completedDays", JSON.stringify(updatedDays));
      await AsyncStorage.removeItem(day);
      if (selectedDay === day) {
        setSelectedDay(null);
        setSelectedDayDetails([]);
      }
    } catch (error) {
      console.error("Error deleting day: ", error);
    }
  };

  const renderDay = ({ item }: { item: string }) => (
    <View style={styles.dayItemContainer}>
      <TouchableOpacity
        style={styles.dayButton}
        onPress={() => fetchDayDetails(item)}
      >
        <Text style={styles.dayButtonText}>{item}</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.deleteButton}
        onPress={() => deleteDay(item)}
      >
        <Text style={styles.deleteButtonText}>Hapus</Text>
      </TouchableOpacity>
    </View>
  );

  const renderExercise = ({ item }: { item: any }) => (
    <View style={styles.exerciseContainer}>
      <Text style={styles.exerciseText}>{item.name}</Text>
      <Text style={styles.exerciseText}>Durasi: {item.duration} detik</Text>
    </View>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Laporan Latihan</Text>
      <Text style={styles.subtitle}>Pilih hari untuk melihat detail latihan:</Text>
      <FlatList
        data={completedDays}
        renderItem={renderDay}
        keyExtractor={(item) => item}
        style={styles.dayList}
      />
      {selectedDayDetails.length > 0 && (
        <>
          <Text style={styles.detailsTitle}>Detail Latihan ({selectedDay})</Text>
          <FlatList
            data={selectedDayDetails}
            renderItem={renderExercise}
            keyExtractor={(item) => item.id}
            style={styles.detailsList}
          />
        </>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "#fff",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 8,
  },
  subtitle: {
    fontSize: 16,
    marginBottom: 16,
  },
  dayItemContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 8,
  },
  dayButton: {
    backgroundColor: "#4CAF50",
    padding: 12,
    borderRadius: 8,
    flex: 1,
    marginRight: 8,
  },
  dayButtonText: {
    color: "#fff",
    fontSize: 16,
    textAlign: "center",
  },
  deleteButton: {
    backgroundColor: "#FF5252",
    padding: 8,
    borderRadius: 8,
  },
  deleteButtonText: {
    color: "#fff",
    fontSize: 14,
    textAlign: "center",
  },
  detailsTitle: {
    fontSize: 20,
    fontWeight: "bold",
    marginTop: 16,
    marginBottom: 8,
  },
  exerciseContainer: {
    padding: 12,
    borderBottomWidth: 1,
    borderBottomColor: "#ccc",
  },
  exerciseText: {
    fontSize: 16,
  },
});
