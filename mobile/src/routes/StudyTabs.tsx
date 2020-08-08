import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { Ionicons } from '@expo/vector-icons'

import TeacherList from '../pages/TeacherList'
import Favorites from '../pages/Favorites'


const { Navigator, Screen } = createBottomTabNavigator()

function StudyTabs() {
	return (
		<Navigator
			tabBarOptions={{
				style: {
					elevation:0,
					shadowOpacity: 0,
					height: 84,
				},
				tabStyle: {
					flexDirection: 'row',
					alignItems: 'center',
					justifyContent: 'center',
					paddingBottom: 20,
				},
				safeAreaInsets: {
					bottom: 0,
				},
				iconStyle: {
					flex: 0,
					width: 20,
					height: 24,
				},
				labelStyle: {
					fontFamily: 'Archivo_700Bold',
					fontSize: 13,
					marginLeft: 16,
				},
				inactiveBackgroundColor: '#fafafc',
				activeBackgroundColor: '#ebebf5',
				inactiveTintColor: '#c1bccc',
				activeTintColor: '#32264d'
			}}
		>
			<Screen 
				name='TeacherList' 
				component={TeacherList}
				options={{
					tabBarLabel: 'Proffys',
					tabBarIcon: ({color, size}) => {
						return(
							<Ionicons name='ios-easel' size={size} color={color}/>
						)
					}
				}} 
			/>
			<Screen
				name='Favorites'
				component={TeacherList}
				options={{
					tabBarLabel: 'Favoritos',
					tabBarIcon: ({color, size}) => {
						return(
							<Ionicons name='ios-heart' size={size} color={color}/>
						)
					}
				}}
			/>
		</Navigator>
	)
}

export default StudyTabs