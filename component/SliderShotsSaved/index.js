import React, {useState, useEffect} from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { Colors } from 'react-native/Libraries/NewAppScreen';

export default function LastShotstList ({lastShots, onChange}) {

  const pushShot = (s) => onChange(String(s)) 

  return (
    <View style={styles.container}>
        { 
          lastShots.map((shot,i) => {
            return( 
                <TouchableOpacity style={styles.tShot}>
                  <Text keys={i} onPress={() => pushShot(shot)} style={styles.xShot} > <Text>  {shot}  </Text> </Text> 
                </TouchableOpacity>
              )
          })
        }
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#222223',
    borderColor: '#fff',
    flexDirection:'row',
    justifyContent: 'space-between',
    padding:'4%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  tShot:{
    flex: 1,
    margin : 1,
    borderWidth: 2,
    borderColor: 'orange',
    borderRadius: 10,
    color: 'orange',
    justifyContent: 'center',
    alignItems: 'center',
  },
  xShot:{
    margin : 1,
    height: 50,
    fontWeight: "bold",
    color: 'orange',
    paddingTop:'20%'
  }
});
