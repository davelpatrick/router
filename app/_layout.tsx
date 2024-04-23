
import React from 'react'
import { Stack, Tabs } from 'expo-router';

export default function _layout() {
  return ( 
 <Tabs>
    <Tabs.Screen name = "index" options={{ tabBarLabel: "home"}}/>
    <Tabs.Screen name = "user" options={{ tabBarLabel: "entrar"}}/>
</Tabs>
);
}
