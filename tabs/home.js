import React from 'react';
import { StyleSheet, Text, View ,Image} from 'react-native';
import {Avatar} from 'react-native-elements';
import { EvilIcons,Entypo,Feather,Octicons,Ionicons,FontAwesome} from 'react-native-vector-icons';
import {DrawerNavigator,DrawerLayoutAndroid,TabNavigator} from 'react-navigation';


export default class App extends React.Component {
  render() {
   // var DrawerLayoutAndroid = require('DrawerLayoutAndroid');
   
    return (
    

      <View style={styles.container}>
      <Text>{"\n\n"}</Text>
      <View style={styles.ava}>      
 <Avatar
  small
  rounded
  source={{uri: "https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg"}}
  activeOpacity={0.7}

/></View>
<Text style={styles.home}>Home </Text>
<View style={styles.realhome}>
<Text style={{color: 'blue'}}>
    <Octicons
        size={40}
        name='home'
        /></Text></View>
        <View style={styles.searchb}>
 <EvilIcons
 size={50}
 name='search'
 /></View>
 <View style={styles.bellb}>
 <EvilIcons
 size={50}
 name='bell'
 /></View>
 <View style={styles.message}>
 <Entypo
 size={50}
 name='message'
 /></View>
<View style={styles.line}/>
<View style={styles.lines}/>
<View style={styles.ava2}>
  <Avatar
  small
  rounded
  source={{uri: "https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg"}}
  activeOpacity={0.7}
/>

</View>
<View style={styles.name}><Text>
 <Text style={{fontSize:30,fontWeight:'bold'}}>vicky cena </Text>
<Text style={{color:'#B9BFBF'}}>@vickycena99...30m</Text>
</Text>
</View><View style={styles.photo}>
<Image source={require('../steve.jpg')}
       style={{width: 300, height: 300}} /></View>
       <View style={styles.bar}>
        <Text>
        <Text style={{fontSize:30,color:'blue'}}> All   </Text>
        <Text style={{fontSize:30}}> mentions                         </Text>
         <Text style={{color:'blue'}}>
         
        <Feather
        size={26}
        name='settings'
        />
        </Text>
        </Text>
      </View>
      <View style={styles.ic}>
      <Text>
      <Feather
      size={25}
      name='message-circle'/><Text>          </Text>
      <EvilIcons
      size={40}
      name='retweet'/><Text>          </Text>
      <EvilIcons
      size={30}
      name='heart'/><Text>          </Text>
      <Entypo
      size={30}
 name='message'
 /></Text></View>
</View>
 
  
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex:1,
    backgroundColor: '#fff',
    //alignItems: 'center',
    //justifyContent: 'center',
  },
  ava: {
    top : 40,
    left: 10,
    position: 'absolute',
  },
  avad: {
    top : 26,
    left: 10,
    position: 'absolute',
  },
  home: {
    top: 37,
    left: 70,
    position: 'absolute',
    fontSize: 30,
    fontWeight: 'bold',
  },
  realhome:{
    top: 120,
    left :5,
    position: 'absolute',
    
  },
  searchb:{
    top: 120,
    left: 120,
    position: 'absolute',
  },
  bellb:{
    top: 120,
    left: 230,
    position: 'absolute',
  },
   message:{
    top: 115,
    left: 340,
    position: 'absolute',
  },
  line:{
    borderBottomColor: 'black',
  borderBottomWidth: 3,
  top:120,
  },
lines:{
    borderBottomColor: 'blue',
  borderBottomWidth: 3,
  top:120,
  right:340,
  },
  ava2:{
    top:200,
    left:5,
    position: 'absolute',
  },
  name:{
    top:195,
    left:90,
    position:'absolute',
  },
  photo:{
    top:250,
    left:80,
    position:'absolute',
  },
  bar: {
      backgroundColor: '#ffffff',
      width: 500,
      height: 50,
      top:540,

    },
    avad:{
    top:25,
    left:10,
    position: 'absolute',
  },
    ic: {
      top:460,
      left:100,

    },
});
