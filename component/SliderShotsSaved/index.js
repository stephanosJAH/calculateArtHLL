import React, {useState, useEffect} from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { Colors } from 'react-native/Libraries/NewAppScreen';

export default function LastShotstList ({lastShots, onChange}) {

  const pushShot = (s) => onChange(String(s)) 

  console.log(lastShots)

  return (
    <View style={styles.container}>
        { lastShots.length ?  
            (lastShots.map((shot,i) => {
              console.log(shot +' - '+ i)
              return(
                  <TouchableOpacity style={styles.tShot} key={i}>
                    <Text onPress={() => pushShot(shot)} style={styles.xShot}> 
                        <Text style={styles.xShotShow}>{shot} M</Text>  
                    </Text> 
                  </TouchableOpacity>
                )
            }) ) : (  <Text style={styles.textLastShot} > Last shot </Text> )              
        }
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    height:100,
    backgroundColor: '#222223',
    borderTopColor: 'orange',
    borderWidth: 2,
    flexDirection:'row',
    justifyContent: 'space-between',
    padding:'4%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  tShot:{
    margin : 1,
    height: 50,
    width: '20%',
    borderWidth: 2,
    borderColor: 'orange',
    borderRadius: 10,
    color: 'orange',
    alignItems: 'center',
    justifyContent: 'center',
  },
  xShot:{
    fontWeight: "bold",
    color: 'orange',
  },
  textLastShot:{
    color: 'orange',
  },
});
