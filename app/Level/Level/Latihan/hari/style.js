import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
    },
    workoutImage: {
      width: 90,
      height: 70,
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
  workoutReps: {
  fontSize: 16,
  color: "#555",
  marginTop: 4,
  },
  });

  export default styles;