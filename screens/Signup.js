import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View , TouchableOpacity} from 'react-native';
import React , {useState}from 'react';
import { Button, TextInput , Image, ImageBackground,} from 'react-native';
import Checkbox from 'expo-checkbox';



export default function App() {
    const [agree, setAgree] = useState(false)
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
        <Image  source={require('../assets/fb-icon.png')}
         style={{
          marginRight:5,
          height: 25,
          width: 25
        }}/>
        <Text style={styles.text}>Sign in with Facebook</Text>
      </TouchableOpacity>
      </View>
     
      <View>
      
      <TouchableOpacity
        style={styles.button2}
        //onPress={onPress}
      >
         <Image  source={require('../assets/gplus-icon.png')}
         style={{
          marginRight:5,
          height: 25,
          width: 25
        }}/>   
        <Text style={styles.text}>Sign in with Google+</Text>
      </TouchableOpacity>
      
      <View>
      <View style={{flexDirection: 'row', alignItems: 'center', marginTop:10, marginBottom:10, marginLeft:40, marginRight:40}}>
     <View style={{flex: 1, height: 1, backgroundColor: '#64a832'}} />
     <View>
    <Text style={{ textAlign: 'center', color:"#64a832"}}>Or Use Email</Text>
    </View>
    <View style={{flex: 1, height: 1, backgroundColor: '#64a832'}} />
    </View>

      
      <TextInput 
       style={styles.input}
       placeholder="Enter Email ID" />
      <TextInput 
      style={styles.input}
      placeholder="Set Password"
       />
       <TextInput 
       style={styles.input}
       placeholder="Full Name" />
      <TextInput 
      style={styles.input}
      placeholder="Full Adress"
       />
       <TextInput 
      style={styles.input}
      placeholder="Mobile Number"
       />
       </View>
       <TouchableOpacity
        style={styles.login}
        //onPress={onPress}
      >
        <Text style={{fontWeight:"bold"}}>CREATE ACCOUNT</Text>
      </TouchableOpacity>
      <View style={styles.checkBoxContainer}>
      <Checkbox
          style={styles.checkbox}
          value={agree} 
          onValueChange={()=> setAgree(!agree)} 
          color= {agree? "#0000ffff" : undefined}
        />
        <Text style={styles.text}>I've Read & Accept the term and conditions</Text>
        </View>
      </View>
      <TouchableOpacity
        style={styles.signup}
        //onPress={onPress}
      >
          <View style={styles.loginB}>
        <Text style={styles.text2}>Already have an Account
            <Text style={{color:"#FFFF00"}}> Login</Text>
        </Text>
        </View>
        
      </TouchableOpacity>

      <StatusBar style="auto" />
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,

    resizeMode: 'cover',

    
  },
  text:{
    color: "white",
    marginLeft: 5,
    fontWeight:'bold'

  },
  text2:{
    color: "white",
    //fontWeight:'bold'

  },
  button1:{
    alignItems: "center",
    backgroundColor: "#4267B2",
    padding: 10,
    fontWeight:"bold",
    marginLeft:40,
    marginRight: 40,
    borderRadius: 5,
    flexDirection:'row'
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
    borderRadius: 5,
    flexDirection:'row'
  },
  input: {
    height: 40,
    margin: 1,
    //marginTop:5,
    borderWidth: 1,
    padding: 10,
    backgroundColor:"white",
    marginLeft:40,
    marginRight: 40,
    borderRadius:5
  },
  login:{
    backgroundColor:'#FFFF00',
   alignItems:"center",
    padding: 10,
    marginLeft:40,
    marginRight: 40,
    borderRadius: 5,
    marginTop:2
    

  },
  img:{
      resizeMode:'contain',
      height: 100,
      width:200,
     alignItems:'center',
     justifyContent:'center',
     alignSelf:'center',
     marginTop: 28,
     marginBottom:40
     
  },
  image:{
    flex:1
  },

  checkbox:{
    backgroundColor: 'transparent'

  },
  checkBoxContainer:{
      flexDirection:'row',
      justifyContent:'center',
      marginTop:20,
      marginBottom:36

  },
  signup:{
    backgroundColor:'#64a832',
    alignItems:'center',
    padding:10,
    
    
  },
  loginB:{
    //position: 'absolute',
    bottom:0,
   // left:0,
      
  }
});