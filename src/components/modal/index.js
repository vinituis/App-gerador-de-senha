import { View, Text, StyleSheet, TouchableOpacity, Pressable } from "react-native";
import * as Clipboard from 'expo-clipboard';
import useStorage from "../../hooks/useStorage";

export function ModalPassword({ password, handleClose }) {
    const { saveItem } = useStorage();

    async function hadleCopyPassword() {
        await Clipboard.setStringAsync(password)
        await saveItem("@pass", password)
        
        alert("Senha copiada");
        handleClose();
    }

    return (
        <View style={styles.container}>
            <View style={styles.content}>
                <Text style={styles.title}>Senha Gerada</Text>
                <Pressable style={styles.innerPass} onLongPress={hadleCopyPassword}>
                    <Text style={styles.text}>
                        {password}
                    </Text>
                </Pressable>
                <View style={styles.buttonArea}>
                    <TouchableOpacity style={styles.button} onPress={handleClose}>
                        <Text style={styles.buttonText}>Voltar</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={[styles.button, styles.buttonSave]} onPress={hadleCopyPassword}>
                        <Text style={styles.buttonSaveText}>Salvar Senha</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: "rgba(24, 24, 24, 0.6)",
        flex: 1,
        alignItems: 'center',
        justifyContent: "center",
    },
    content: {
        backgroundColor: "#fff",
        width: "85%",
        paddingTop: 25,
        paddingBottom: 25,
        alignItems: "center",
        justifyContent: "center",
        borderRadius: 8,
    },
    title: {
        fontSize: 18,
        fontWeight: "bold",
        color: "000",
        marginBottom: 24,
    },
    innerPass: {
        backgroundColor: "#3f3f3f",
        width: "90%",
        padding: 12,
        borderRadius: 8,
    },
    text: {
        color: "#fff",
        textAlign: "center",
    },
    buttonArea: {
        flexDirection: "row",
        width: "90%",
        marginTop: 8,
        alignItems: "center",
        justifyContent: "space-between",
    },
    button: {
        flex: 1,
        alignItems: 'center',
        marginTop: 12,
        marginBottom: 12,
        padding: 10,
    },
    buttonSave: {
        backgroundColor: "#286291",
        borderRadius: 8,
    },
    buttonSaveText: {
        color: "#fff",
        fontWeight: "bold",
    }
})