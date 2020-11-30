import React, {useState, useEffect} from 'react';
import {ImageBackground, 
        StyleSheet, 
        Text, 
        View, 
        TextInput, 
        Button, 
        StatusBar,
        Animated
} from 'react-native';
import LastShotstList from './component/SliderShotsSaved';

export default function App() {

  const [M, onChangeM] = useState('1000');
  const [mil, setMil] = useState('0');
  const [error, setError] = useState(null);
  const [lastShots, setLastShots] = useState([0]);

  const image = require('./assets/bkhll2.jpg');

  const calculateBalistic = (Mtarget) => {

    setError(null)

    var m = -0.237035714285714;
    var b = 1001.46547619048;
    var xmin = 100;
    var xmax = 1600;
    
    if (Mtarget >= 100 && Mtarget <= 1600) {
      setMil(Math.round(m * Mtarget + b));
      setLastShots([...lastShots, Mtarget])
    } else {
      setMil(0)
      setError('Enter a distance between 100 and 1600 meters!')
    };
  } 

  useEffect(() => {
    if(lastShots.length > 4) lastShots.splice(0,1);   
  },[lastShots])

  


  return (
      

        <ImageBackground 
          source={image} style={styles.image}> 
          {/* imageStyle={{opacity:0.7}} */}
          <View style={styles.covertBackground}>
            <View style={styles.container}>
                <StatusBar barStyle={'light-content'} translucent backgroundColor="transparent" />
                <TextInput 
                  style={styles.textInputM} 
                  placeholder="1000 M"  
                  onChangeText={text => onChangeM(text)}
                  value={M}
                  keyboardType = 'numeric'/>  
                <Button
                  style={styles.btnBoom}
                  title="FIRE"
                  color="#8e2035"
                  onPress={() => calculateBalistic(M)}
                />
            </View>
            <View style={styles.boxMil}>
              <Text style={styles.textMil} > { mil } MIL </Text>
              { error && <Text  style={styles.textError}> { error } MIL </Text> } 
            </View>
            <LastShotstList lastShots={lastShots} onChange={onChangeM}/>
          </View>
        </ImageBackground>
      
  );
}

const styles = StyleSheet.create({
  covertBackground: {
    flex: 1,
    backgroundColor: '#222222c4',
  },
  container: {
    flex: 1,
    padding:'10%',
    backgroundColor:'#222222'
  },
  text: {
    textAlign: 'center',
    fontSize: 30,
    color: '#fff'
  }, 
  textInputM: {
    borderBottomWidth : 2,
    borderBottomColor: '#58a770',
    color: '#58a770',
    height: 100,
    textAlign: 'center',
    fontSize: 50,
    marginBottom: 15
  },
  btnBoom:{
    paddingTop: 15,
  },
  boxMil: {
    flex: 4,
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
    fontSize: 16,
    color: '#8e2035'
  }, 
  image: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "center",
  },
});
