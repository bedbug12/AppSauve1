import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { Header } from './component/header/Header';
import { RouteNav } from './navigation/router/RouteNav';




export default function App() {
  return (
    <RouteNav/>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
  
  },
});
