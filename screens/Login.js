import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View , TouchableOpacity} from 'react-native';
import React from 'react';
import { Button, TextInput , Image, ImageBackground,} from 'react-native';
import AppLoading from 'expo-app-loading';

// import {MaterialIcons} from '@expo/vector-icons';
// import { MaterialCommunityIcons } from '@expo/vector-icons';
// import { EvilIcons } from '@expo/vector-icons';
//import { color } from 'react-native/Libraries/Components/View/ReactNativeStyleAttributes';
import {
  useFonts,
  NunitoSans_200ExtraLight,
  NunitoSans_200ExtraLight_Italic,
  NunitoSans_300Light,
  NunitoSans_300Light_Italic,
  NunitoSans_400Regular,
  NunitoSans_400Regular_Italic,
  NunitoSans_600SemiBold,
  NunitoSans_600SemiBold_Italic,
  NunitoSans_700Bold,
  NunitoSans_700Bold_Italic,
  NunitoSans_800ExtraBold,
  NunitoSans_800ExtraBold_Italic,
  NunitoSans_900Black,
  NunitoSans_900Black_Italic,
} from '@expo-google-fonts/nunito-sans';


export default function App( {navigation}) {
  let [fontsLoaded] = useFonts({
    NunitoSans_200ExtraLight,
    NunitoSans_200ExtraLight_Italic,
    NunitoSans_300Light,
    NunitoSans_300Light_Italic,
    NunitoSans_400Regular,
    NunitoSans_400Regular_Italic,
    NunitoSans_600SemiBold,
    NunitoSans_600SemiBold_Italic,
    NunitoSans_700Bold,
    NunitoSans_700Bold_Italic,
    NunitoSans_800ExtraBold,
    NunitoSans_800ExtraBold_Italic,
    NunitoSans_900Black,
    NunitoSans_900Black_Italic,
  });
  const Submit= ()=>{
    //return alert(userName, password);
    
      navigation.navigate("Register");  
  }
  if (!fontsLoaded) {
    return <AppLoading />;
  } else {
  return (
    <ImageBackground source={require('../assets/bg.jpg')} style={styles.container}>
       
        <Image 
        style={styles.img}
         source={require('../assets/logo.png')}/>
      <View style={styles.btnBox}>
        
      <TouchableOpacity
        style={styles.button1}
        //onPress={onPress}
      >
        <Text style={styles.text}>Sign in with Facebook</Text>
      </TouchableOpacity>
      </View>
      <View>
      <TouchableOpacity
        style={styles.button2}
        //onPress={onPress}
      >
        <Text style={styles.text}>Sign in with Google+</Text>
      </TouchableOpacity>
      
      <View>
      <View style={{flexDirection: 'row', alignItems: 'center', marginTop:10, marginBottom:10,marginLeft:40, marginRight:40}}>
     <View style={{flex: 1, height: 1, backgroundColor: '#64a832'}} />
     <View>
    <Text style={{ textAlign: 'center', color:"#64a832"}}>Or Use Email</Text>
    </View>
    <View style={{flex: 1, height: 1, backgroundColor: '#64a832'}} />
    </View>

      <View style={styles.mIcons}>
      
      </View>
      <TextInput 
       style={styles.input}
       placeholder="Enter Email ID" />
       <View style={styles.mIcons}>
      
      </View>
      <TextInput 
      style={styles.input}
      placeholder="Enter Password"
       />
       </View>
       <TouchableOpacity
        style={styles.login}
        //onPress={onPress}
      >
        <Text>LOGIN</Text>
      </TouchableOpacity>
       <TouchableOpacity
         style={styles.forget}
        //onPress={onPress}
      >
        <Text style={styles.text}>Forget Password</Text>
      </TouchableOpacity>
      </View>
      <TouchableOpacity
        style={styles.signup}
        onPress={()=> Submit()}
      >
        <Text style={styles.text2}>New User 
            <Text style={{color:"#FFFF00"}}> SignUp</Text>
        </Text>
        
      </TouchableOpacity>

      <StatusBar style="auto" />
    </ImageBackground>
  );
}
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  resizeMode: 'cover'  
  },
  btnBox:{
    
  },
  mIcons:{
    flexDirection:'row',
    
  },
  button1:{
    alignItems: "center",
    backgroundColor: "#4267B2",
    padding: 10,
    fontWeight:"bold",
    marginLeft:40,
    marginRight: 40
  },
  button2:{
    alignItems: "center",
    backgroundColor: "#db4a39",
    padding: 10,
    marginTop:5,
    color:'white',
    fontWeight:'bold',
    marginLeft:40,
    marginRight: 40,
    borderRadius: 5
  },
  input: {
    height: 40,
    margin: 12,
    marginTop:5,
    borderWidth: 1,
    padding: 10,
    backgroundColor:"white",
    fontFamily:' NunitoSans_700Bold,',
    marginLeft:40,
    marginRight: 40,
    borderRadius: 5
  },
  login:{
    backgroundColor:'#FFFF00',
   alignItems:"center",
    padding: 10,
    marginLeft:40,
    marginRight: 40,
    borderRadius: 5

  },
  img:{
      resizeMode:'contain',
      height: 100,
      width:200,
     alignItems:'center',
     justifyContent:'center',
     alignSelf:'center',
     marginTop: 77,
     marginBottom:77
     


  },
  text:{
    color: "white",
    fontWeight:'bold'

  },
  text2:{
    color: "white",
    //fontWeight:'bold'

  },
  image:{
    flex:1
  },

  forget:{

    alignItems:'center',
    marginTop:30,
    marginBottom:50,
    fontWeight:'bold',
    color:'white'
  },
  signup:{
    backgroundColor:'#64a832',
    alignItems:'center',
    padding:10
  }
});