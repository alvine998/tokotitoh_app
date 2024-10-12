// import { View, Text, TouchableOpacity } from 'react-native'
// import React from 'react'
// import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
// import IconFA from 'react-native-vector-icons/FontAwesome5'
// import IconFA6 from 'react-native-vector-icons/FontAwesome6'
// import normalize from 'react-native-normalize';
// import { COLOR } from '../../utils/color'
// import Home from '../../pages/home'

// export default function BottomTabs({navigation}: any) {
//     const Tabs = createBottomTabNavigator();

//     return (
//         <Tabs.Navigator screenOptions={{ headerShown: false, tabBarLabelStyle: { fontSize: normalize(14) }, tabBarStyle: { height: normalize(60) }, tabBarInactiveTintColor: COLOR.primary, tabBarActiveTintColor: COLOR.primary }}>
//             <Tabs.Screen name='Home' component={Home} options={{ tabBarIcon: ({ focused }) => <IconFA name='home' size={30} color={focused ? COLOR.gold : COLOR.primary} />, tabBarLabel: "Beranda" }} />
//             {/* <Tabs.Screen name='Material' component={Home} options={{ tabBarIcon: ({ focused }) => <IconFA name='cube' size={30} color={focused ? COLOR.gold : COLOR.primary} />, tabBarLabel: "Material" }} />
//             <Tabs.Screen name='Feeds' component={Home} options={{
//                 tabBarIcon: ({ focused }) => <TouchableOpacity onPress={()=>{navigation.push("Feeds")}} style={{width:normalize(70), height:normalize(70), borderRadius:70, backgroundColor: focused ? COLOR.primary : COLOR.blue, position:"absolute", bottom:normalize(10), justifyContent:"center", alignItems:"center"}}>
//                     <IconFA name='plus' size={40} color={focused ? COLOR.gold : "white"} />
//                 </TouchableOpacity>, tabBarLabel: ""
//             }} />
//             <Tabs.Screen name='History' component={Home} options={{ tabBarIcon: ({ focused }) => <IconFA6 name='clock-rotate-left' size={30} color={focused ? COLOR.gold : COLOR.primary} />, tabBarLabel: "Riwayat" }} />
//             <Tabs.Screen name='Profile' component={Home} options={{ tabBarIcon: ({ focused }) => <IconFA name='user' size={30} color={focused ? COLOR.gold : COLOR.primary} />, tabBarLabel: "Profil" }} /> */}
//         </Tabs.Navigator>
//     )
// }