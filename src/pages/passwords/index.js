import { useState, useEffect } from "react";
import { View, Text, StyleSheet, FlatList } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useIsFocused } from "@react-navigation/native";
import useStorage from "../../hooks/useStorage";
import { PasswordItem } from "./components/passwordItem";

export function Passwords() {
    const [listPasswords, setListPasswords] = useState([])
    const focused = useIsFocused();
    const { getItem, removeItem } = useStorage();

    useEffect(() => {
        async function loadPasswords() {
            const passwords = await getItem("@pass")
            setListPasswords(passwords)
        }
        loadPasswords();
    }, [focused])

    async function handleDeletePassword(item) {
        const passwords = await removeItem("@pass", item)
        setListPasswords(passwords)
    }

    return (
        <SafeAreaView style={{ flex: 1, }}>
            <View style={styles.header}>
                <Text style={styles.title}>Minhas Senhas</Text>
            </View>

            <View style={styles.content}>
                <FlatList 
                    style={{flex: 1, paddingTop: 12,}}
                    data={listPasswords}
                    keyExtractor={ (item) => String(item)}
                    renderItem={ ({ item }) => <PasswordItem data={item} removePassword={ () => handleDeletePassword(item) } />}
                />
            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    header: {
        backgroundColor: "#286291",
        paddingTop: 50,
        paddingBottom: 12,
        paddingHorizontal: 10,
    },
    title: {
        fontSize: 18,
        color: "#fff",
        fontWeight: "bold"
    },
    content: {
        flex: 1, 
        paddingHorizontal: 12,
    }
})