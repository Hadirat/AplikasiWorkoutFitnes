import { Tabs } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';

export default function TabsLayout() {
  return (
    <Tabs
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          if (route.name === 'latihan') {
            iconName = focused ? 'fitness' : 'fitness-outline';
          } else if (route.name === 'laporan') {
            iconName = focused ? 'document-text' : 'document-text-outline';
          } else if (route.name === 'profil') {
            iconName = focused ? 'person' : 'person-outline';
          }
          return <Ionicons name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: '#4CAF80',
        tabBarInactiveTintColor: 'gray',
        headerShown: false,
      })}
    >
      <Tabs.Screen name="latihan" options={{ title: 'Latihan' }} />
      <Tabs.Screen name="laporan" options={{ title: 'Laporan' }} />
      <Tabs.Screen name="profil" options={{ title: 'Profil' }} />
    </Tabs>
  );
}
