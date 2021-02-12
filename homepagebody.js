import React from 'react';
//import { Button } from 'react-native-elements';
import { TouchableOpacity, Button, Image, TextInput, ImageBackground, StyleSheet, Text, View} from 'react-native';
//import LinearGradient from 'react-native-linear-gradient';
import { StatusBar } from 'expo-status-bar';



export default function homepagebody() {

        return (

            <ImageBackground source={require('./assets/fcbhome.png')} style={styles.homebackground}>
                    <View style={styles.logoposition}>
                        <Image source={require('./assets/Barcelone-logo.png')} style={styles.logofcb} />
                    </View>
                    <View style={styles.container}>
                        <StatusBar style="light" />
                        <TextInput
                                style={styles.logininput}
                                placeholder={"Login"}
                                placeholderTextColor={"#A51E4A"}
                        />
                        <TextInput
                                style={styles.passwordinput}
                                placeholder={"Password"}
                                placeholderTextColor={"#A51E4A"}
                        />
                        <TouchableOpacity
                            style={styles.submitbtn}
                            //onPress={onPressLearnMore}
                            title="Connexion"
                            >
                            <Text style={styles.subtextbtn}> Connexion </Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                            style={styles.submitbtn}
                            //onPress={onPressLearnMore}
                            title="Inscription"
                            >
                            <Text style={styles.subtextbtn}> Inscription </Text>
                        </TouchableOpacity>
                    </View>
            </ImageBackground>
        )
    }


const styles = StyleSheet.create({

    logoposition: {
        flex:2,
        justifyContent: "center",
        alignItems: 'center',
        marginTop: 100,

    },
    homebackground: {
        flex: 2,
        justifyContent: 'space-evenly',
        alignItems: 'center',
    },
    container: {
        flex: 3,
        marginTop: 20,
        position: "relative",
        flexDirection: "column",
        alignItems: 'center',
    },

    logofcb: {
        flex: 1,
        resizeMode: 'contain'
    },

    text: {
        color: "white",
        fontSize: 42,
        fontWeight: "bold",
        textAlign: "center",
        backgroundColor: "#000000a0"
    },
    logininput:{
        height: 40,
        width: 270,
        textAlign: "center",
        justifyContent: "center",
        borderColor: '#004A96',
        borderWidth: 1,
        borderRadius: 25,
        color: '#A51E4A',
        alignItems: 'center',
        marginBottom: 10
        //placeholderTextColor: "white"
    },

    passwordinput:{
        height: 40,
        width: 270,
        textAlign: "center",
        justifyContent: "center",
        borderColor: '#004A96',
        borderWidth: 1,
        borderRadius: 25,
        color: '#A51E4A',
        alignItems: 'center',
        marginBottom: 28
        //placeholderTextColor: "white"
    },

    submitbtn:{

        height: 40,
        width: 180,
        justifyContent: "center",
        alignItems: 'center',
        marginLeft:30,
        marginRight:30,
        //backgroundColor:'#00BCD4',
        borderWidth: 1,
        borderColor: '#A51E4A',
        borderRadius: 25,
        marginBottom: 10
    },

    subtextbtn:{

        color: "#FFE000"
    }
});
