import React from "react";
import { View, Text, StyleSheet, Pressable } from "react-native";

export function PasswordItem({ data, removePassword }) {
    return (
        <Pressable onLongPress={removePassword} style={styles.container}>
            <Text style={styles.text}>{data}</Text>
        </Pressable>
    );
}

const styles = StyleSheet.create({
    container:{
        backgroundColor: "#286291",
        padding: 12,
        width: "100%",
        marginBottom: 12,
        borderRadius: 8,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
    },
    text: {
        color: "#fff",
    }
})