import { StyleSheet, Text, TouchableOpacity } from 'react-native'

export default function Button() {
  return (
    <TouchableOpacity style={style.button}>
      <Text style={style.textButton}>
        +
      </Text>
    </ TouchableOpacity>
  )
}

let style = StyleSheet.create({
  button: {
    position: "absolute",
    bottom: 25,
    right: 25,
  },
  textButton: {
    color: "#fff",
    backgroundColor: "green",
    padding: 10,
    borderRadius: 100,
    width: 50,
    height: 50,
    textAlign: "center",
    lineHeight: 30,
    fontSize: 36,
    bottom: 20,
    right: 20,
  }
})