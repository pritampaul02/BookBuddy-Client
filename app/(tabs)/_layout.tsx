import React from 'react';
import { Tabs } from 'expo-router';
import { Text, useColorScheme, View } from 'react-native';
import { Colors } from '@/constants/Colors';
import TabBar from '@/components/ui/Tabs/Tabbar';
import HomeHeader from '@/components/ui/headers/HomeHeader';
import { Fonts } from '@/constants/Fonts';

const TabLayout = () => {
  const colorScheme = useColorScheme();
  const themeColors = Colors[colorScheme ?? 'light'];

  return (
    <Tabs
      tabBar={(props) => <TabBar {...props} />}
      screenOptions={{
        headerShadowVisible: false,
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          tabBarLabel: 'Home',
        }}
      />
      <Tabs.Screen name="likedBooks" options={{ tabBarLabel: 'Fevourite' }} />
      <Tabs.Screen
        name="diary"
        options={{
          tabBarLabel: 'Diary',
          headerTitleAlign: 'center',
          headerTitleStyle: { fontFamily: Fonts.PoppinsMedium, fontSize: 25 },
          headerTitle: 'My Diary',
          headerStyle: { backgroundColor: themeColors.background },
        }}
      />
    </Tabs>
  );
};

export default TabLayout;
