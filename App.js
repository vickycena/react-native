import React,{Component} from 'react';
import { StyleSheet, Text, View ,Image} from 'react-native';
import {Avatar} from 'react-native-elements';
import { EvilIcons,Entypo,Feather,Octicons,Ionicons,FontAwesome} from 'react-native-vector-icons';
import {DrawerNavigator,DrawerLayoutAndroid,TabNavigator} from 'react-navigation';
import { Tabs } from './tabs/router.js';

class App extends Component {
  render() {
var DrawerLayoutAndroid = require('DrawerLayoutAndroid');
    var navigationView = (
   <View style={styles.container}>   
   <Text>{"\n\n"}</Text>
  <Avatar
  small
  rounded
  source={{uri: "https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg"}}
  activeOpacity={0.7}
/>
<Text style={{top:75,left:5,position:'absolute',fontSize: 26}}>vicky cena</Text>
<Text style={{top:105,left:7,position:'absolute',color:'#A6AAA5'}}> @vickycena99</Text>
<Text style={{top:145,left:7,position:'absolute',height:45,width:300,fontSize:20}}>
<Text>653  </Text><Text style={{top:105,left:7,position:'absolute',color:'#A6AAA5'}}>followers</Text>
<Text>  653  </Text><Text style={{top:105,left:7,position:'absolute',color:'#A6AAA5'}}>follwing</Text>

</Text>
<Text style={{top:195,left:7,position:'absolute',height:35,width:300,fontSize:20}}>
<EvilIcons
 size={45}
 name='user'
 />
 <Text style={{fontSize:26,fontWeight:'bold'}}>      Profile
 </Text>

</Text>
<Text style={{top:255,left:7,position:'absolute',height:55,width:300,fontSize:20}}>
<Ionicons
 size={45}
 name='ios-list-box-outline'
 />
 <Text style={{fontSize:26,fontWeight:'bold'}}>        Lists
 </Text>

</Text>
<Text style={{top:315,left:7,position:'absolute',height:55,width:300,fontSize:20}}>
<Feather
 size={45}
 name='battery-charging'
 />
 <Text style={{fontSize:26,fontWeight:'bold'}}>      Moments
 </Text>

</Text>
<Text style={{top:385,left:7,position:'absolute',height:55,width:300,fontSize:20}}>
<Ionicons
 size={45}
 name='ios-paper-outline'
 />
 <Text style={{fontSize:26,fontWeight:'bold'}}>        Highlights
 </Text>
</Text>
<Text style={{top:635,left:7,position:'absolute',height:55,width:300,fontSize:20,color:'blue'}}>
<Feather
 size={45}
 name='moon'
 />
 <Text>                                             </Text>
 <FontAwesome
 size={45}
 name='qrcode'
 />
</Text>
<Text style={{top:500,left:7,position:'absolute',height:55,width:300,fontSize:20}}>
settings and privacy

 </Text>
 <Text style={{top:540,left:7,position:'absolute',height:55,width:300,fontSize:20}}>
Help centre

 </Text> 




  </View>
  );



    return (
        
        <DrawerLayoutAndroid
      drawerWidth={350}
      drawerPosition={DrawerLayoutAndroid.positions.Left}
      renderNavigationView={() => navigationView}>

      <Tabs />
      </DrawerLayoutAndroid>
      );
  }
}





export default App;




const styles = StyleSheet.create({
  container: {
    flex:1,
    backgroundColor: '#fff',
    //alignItems: 'center',
    //justifyContent: 'center',
  },
  
});