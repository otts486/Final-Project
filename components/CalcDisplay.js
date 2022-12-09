
import React from "react";
import { StyleSheet, View, Text, TouchableOpacity } from "react-native";

export default class CalcDisplay extends React.Component{
static defaultProps = {
    display: "",
}

render(){
    return(
        <View style={styles.Container}>
            <Text style={styles.display}>{this.props.display}</Text>
        </View>
    );
}
}

const styles = StyleSheet.create({
    Container: { },
    display: {fontSize: 70, color: "white", textAlign: "right", },
});