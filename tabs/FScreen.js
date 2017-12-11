

import React from 'react';
import { StyleSheet, Text, View ,Image} from 'react-native';
import {Avatar,SearchBar} from 'react-native-elements';
import { EvilIcons,Entypo,Feather,Octicons,Ionicons,FontAwesome} from 'react-native-vector-icons';
import {DrawerNavigator,DrawerLayoutAndroid,TabNavigator} from 'react-navigation';


export default class App extends React.Component {
  render() {
    return (
      <View>
      <View style={styles.container}>
      <Text>
{"\n"}
</Text> 
       <SearchBar
  showLoading
  containerStyle={styles.search}
  lightTheme
  placeholder='Search Twitter'
  placeholderTextColor='#000000'
/>    

<Text style={styles.space}>

</Text>                              

     
    
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
      </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
   // flex: 1,
    backgroundColor: '#D7E0E0',
   // alignItems: 'center',
    //justifyContent: 'center',
  },
  search: {
    backgroundColor: '#D7E0E0',
  },
    bar: {
      backgroundColor: '#ffffff',
      width: 500,
      height: 50,
      

    },
    space: {
      height: 490,
      width: 500,
    }
    
    

  
});
