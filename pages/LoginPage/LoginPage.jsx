import React, { useRef, useState } from 'react'
import { StyleSheet, View, Button, TextInput, Image, _View } from 'react-native'
import { Ionicons } from '@expo/vector-icons';

const LoginPage = ({ navigation }) => {
    const [inputValue, setInputValue] = useState("");
    const [isPasswordSecure, setIsPasswordSecure] = useState(true);

    const pin1Ref = useRef(null);
    const pin2Ref = useRef(null);
    const pin3Ref = useRef(null);
    const pin4Ref = useRef(null);
    const pin5Ref = useRef(null);

    const checkKey = () => {
        if (inputValue == "") {
            console.warn("plese enter key")
            return;
        }
        if (inputValue == "12345") {
            navigation.navigate('Home');
            setInputValue("")
        } else {
            console.warn("Wrong key");
            setInputValue("");
        }
    }

    console.log(inputValue)
    return (
        <View style={styles.container}>
            <Image
                source={require('../../assets/homeIcon.png')}
                style={styles.image}
            />
            <View style={styles.textInputBox}>
                <TextInput
                    ref={pin1Ref}
                    secureTextEntry={isPasswordSecure}
                    maxLength={1}
                    onChangeText={(value) => {
                        if (value !== "") {
                            pin2Ref.current.focus();
                        }
                        setInputValue(inputValue + value)
                    }}
                    style={styles.input}
                />
                <TextInput
                    ref={pin2Ref}
                    secureTextEntry={isPasswordSecure}
                    maxLength={1}
                    onChangeText={(value) => {
                        if (value !== "") {
                            pin3Ref.current.focus();
                        } if (value == "") {
                            pin1Ref.current.focus();
                        }
                        setInputValue(inputValue + value)
                    }}
                    style={styles.input}
                />
                <TextInput
                    ref={pin3Ref}

                    secureTextEntry={isPasswordSecure}
                    maxLength={1}
                    onChangeText={(value) => {
                        if (value !== "") {
                            pin4Ref.current.focus();
                        } if (value == "") {
                            pin2Ref.current.focus();

                        }
                        setInputValue(inputValue + value)
                    }}
                    style={styles.input}
                />
                <TextInput
                    ref={pin4Ref}
                    secureTextEntry={isPasswordSecure}
                    maxLength={1}
                    onChangeText={(value) => {
                        if (value !== "") {
                            pin5Ref.current.focus();
                        } if (value == "") {
                            pin3Ref.current.focus();

                        }
                        setInputValue(inputValue + value)
                    }}
                    style={styles.input}
                />
                <TextInput
                    ref={pin5Ref}
                    secureTextEntry={isPasswordSecure}
                    maxLength={1}
                    onChangeText={(value) => {
                        if (value == "") {
                            pin4Ref.current.focus();
                            return;
                        } else {
                            setInputValue(inputValue + value)
                        }
                    }}
                    style={styles.input}
                />
                <Ionicons
                    onPress={() => isPasswordSecure ? setIsPasswordSecure(false) : setIsPasswordSecure(true)}
                    name={isPasswordSecure ? "eye-off" : "eye"} color='black' size={24}
                />
            </View>
            <Button
                title="Submit"
                onPress={checkKey}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        marginTop: '100px',
        marginLeft: '20px',
        marginRight: '20px'
    },
    input: {
        width: '30px',
        borderWidth: '1px',
        fontWeight: 'bold',
        fontSize: 30,
        borderLeftWidth: '0px',
        borderRightWidth: '0px',
        borderTopWidth: '0px',
        borderBottomWidth: '2px',
        marginBottom: "20px",
        outlineStyle: 'none',
        marginRight: '15px',
        textAlign: 'center'
    },
    textInputBox: {
        display: 'inline-block',
        marginLeft: 'auto',
        marginRight: 'auto'
    },
    image: {
        height: '100px',
        width: '130px',
        marginLeft: 'auto',
        marginRight: 'auto',
        marginBottom: "60px",

    }
});

export default LoginPage;