import React from 'react'
import { StyleSheet, Text, View,ScrollView ,Image,TouchableOpacity} from 'react-native';
import trial from "../assets/trial.png";


const Home = () => {
    
    const styles = StyleSheet.create({
        container: {
            flex: 1,
            flexDirection: 'column', // Main axis is vertical
            paddingTop:40,
            backgroundColor: '#100E1B',
            justifyContent:"space-between"
        },
        header:{
            //marginTop:40,
            height:'50', // Fixed height
            backgroundColor: '#100E1B',
            alignItems: 'center',
            borderBottomWidth:0.5,
            borderBottomColor:'white',
        },
       
        image: {
            width: 200,
            height: 200,
        },
        scanbox:{
            height:'50',
            position:'relative'
        },
        Scan:{
            position: 'absolute',
            
        },
   
        text:{
            color:'#C7D1C8',
            fontSize:20,
            fontFamily: 'Arial',
            textAlign:'center',
            alignItems:'center'
        },
        textHero:{
            color:'#C7D1C8',
            fontSize:20,
            fontFamily: 'Arial',
            marginBottom:'20',
           
        },
        hero:{
            //backgroundColor:'white',
            width:'100%',
            height:'730',
            flexDirection:'column',
            justifyContent:'space-between',
            paddingHorizontal:'20',
            paddingVertical:'50',
        },
        HeroTop:{
            height:'300'
        },
        HeroBottom:{
            height:'300'
        },
        trial:{
            marginHorizontal: 10,
        },
        
    });
    
    

      
  return (
       <View style={styles.container}>
           <View style={styles.header}>
                <Text style={styles.text}>
                    Jane Doe
                </Text>
           </View>
           <View style={styles.hero}>
                <View style={styles.HeroTop}>
                    <Text style={styles.textHero}>
                        SCANNED HISTORY
                    </Text>
                    <ScrollView horizontal={true} showsHorizontalScrollIndicator={false} style={styles.ScrollView}>
                        <Image source={trial} style={styles.trial}/>
                        <Image source={trial} style={styles.trial}/>
                        <Image source={trial} style={styles.trial}/>
                        <Image source={trial} style={styles.trial}/>
                        <Image source={trial} style={styles.trial}/>
                    </ScrollView>
                </View>
                <View  style={styles.HeroBottom}>
                    <Text style={styles.textHero}>
                        RECOMMENDER FOR YOU
                    </Text>
                    <ScrollView horizontal={true} showsHorizontalScrollIndicator={false} style={styles.ScrollView}>
                        <Image source={trial} style={styles.trial}/>
                        <Image source={trial} style={styles.trial}/>
                        <Image source={trial} style={styles.trial}/>
                        <Image source={trial} style={styles.trial}/>
                        <Image source={trial} style={styles.trial}/>
                    </ScrollView>
                </View>
           </View>
           
                   
        
                   
                
                    
            
        </View>
       
  )
}

export default Home