import { Text, TouchableOpacity } from 'react-native'

import style from './style'

export default function Button() {
  return (
    <TouchableOpacity style={styles.button}>
      <Text style={styles.textButton}>
        +
      </Text>
    </ TouchableOpacity>
  )
}

