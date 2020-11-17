import React, {useState} from 'react';
import { StyleSheet, Text, View, TextInput, Button  } from 'react-native';

export default function App() {

  const [M, onChangeM] = useState('1000');
  const [mil, setMil] = useState('0');
  const [error, setError] = useState(null);

  const calculateBalistic = (Mtarget) => {

    var m = -0.237035714285714;
    var b = 1001.46547619048;
    var xmin = 100;
    var xmax = 1600;
    var x = 100;
    var y = 978;

    var x = Mtarget;
    
    if (x >= 100 && x <= 1600) {
      setMil(Math.round(m * x + b));
    } else {
      setMil(0)
      setError('Enter a distance between 100 and 1600 meters!')
    };

  } 

  return (
    <View style={styles.container}>
        <Text  style={styles.text}  > Calculate Artillery </Text>
        <TextInput 
          style={styles.textInputM} 
          placeholder="1000 M"  
          onChangeText={text => onChangeM(text)}
          value={M}
          keyboardType = 'numeric'/>  
        <Button
          style={styles.btnBoom}
          title="BOOOM"
          color="#8e2035"
          onPress={() => calculateBalistic(M)}
        />
        <View style={styles.boxMil}>
          <Text style={styles.textMil} > { mil } MIL </Text>
        </View>
        { error && <Text  style={styles.textError}> { error } MIL </Text> }
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#222222',
    padding:'10%'
    // alignItems: 'center',
    // justifyContent: 'center',
  },
  text: {
    textAlign: 'center',
    fontSize: 30,
    color: '#fff'
  }, 
  textInputM: {
    borderBottomWidth : 1,
    color: '#58a770',
    height: 100,
    textAlign: 'center',
    fontSize: 50
  },
  btnBoom:{
    marginTop: '100px',
  },
  boxMil: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  }, 
  textMil: {
    textAlign: 'center',
    fontSize: 70,
    color: '#fff',
  }, 
  textError: {
    textAlign: 'center',
    fontSize: 10,
    color: '#8e2035'
  }, 
  
});
