import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View,
  Button,
  TextInput,
  FlatList,
} from "react-native";
import React, { useState } from "react";

export default function App() {
  const [item, setItem] = React.useState('');
  const [data, setData] = React.useState([]);

  const addButton = () => {
    setData([...data, { key: `${item}` }]);
    setItem('')
  };

  const clearButton = () => {
    setData('')
    setItem('')
  };

  return (
    <View style={styles.container}>
      <View style={styles.container}>
        <TextInput
          value={item}
          onChangeText={(txt) => setItem(txt)}
          style={styles.input}
        />
      </View>
      <View style={styles.buttonContainer}>
        <Button title="ADD" onPress={addButton} />
        <Button title="CLEAR" onPress={clearButton} />
      </View>
      <View style={styles.historyContainer}>
        <Text style={{color: "darkblue", fontSize:22}}> Shopping List</Text>
        <FlatList
          data={data}
          renderItem={({ item }) => <Text>{item.key}</Text>}
          keyExtractor={(item, index) => index.toString()}
        />
      </View>

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    marginTop: 20,
    marginBottom: 10,
    
  },

  buttonContainer: {
    marginBottom: 20,
    marginTop:0,
    width: 150,
    backgroundColor: "#0466C7",
    flexDirection: "row",
    justifyContent: "space-between",
  },

  input: {
    fontSize: 20,
    width: 170,
    borderColor: "gray",
    borderWidth: 1,
  
  },
  historyContainer: {
    flex: 2,
    width: 150,
    alignItems: 'center',
    justifyContent: 'center',
    
  },
});