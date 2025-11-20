import { useEffect, useState } from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

export default function RandomAdvice() {
    const [adviceList, setAdviceList] = useState([]);
    const [currentAdvice, setCurrentAdvice] = useState(null);

    useEffect(() => {
        fetch("http://192.168.0.104:5000/advice")
            .then((res) => res.json())
            .then((data) => {
                setAdviceList(data);
                setCurrentAdvice(data[Math.floor(Math.random() * data.length)]);
            })
            .catch((err) => console.log(err));
    }, []);

    const generateRandom = () => {
        if (adviceList.length === 0) return;
        const random = adviceList[Math.floor(Math.random() * adviceList.length)];
        setCurrentAdvice(random);
    };

    return (
        <View style={styles.container}>
            <Text style={styles.heading}>Get random advice ✨</Text>

            {currentAdvice ? (
                <View style={styles.card}>
                    <Text style={styles.type}>{currentAdvice.type}</Text>
                    <Text style={styles.title}>{currentAdvice.title}</Text>
                    <Text style={styles.text}>{currentAdvice.text}</Text>
                </View>
            ) : (
                <Text style={styles.loading}>Loading...</Text>
            )}

            <TouchableOpacity style={styles.button} onPress={generateRandom}>
                <Text style={styles.buttonText}>Generate Random</Text>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        paddingHorizontal: 20,
        backgroundColor: "#f8f8f8",
    },
    heading: {
        fontSize: 24,
        fontWeight: "700",
        marginBottom: 20,
    },
    card: {
        backgroundColor: "white",
        width: "100%",
        padding: 20,
        borderRadius: 16,
        marginBottom: 25,
        shadowColor: "#000",
        shadowOpacity: 0.1,
        shadowRadius: 6,
        elevation: 4,
    },
    type: {
        fontSize: 13,
        fontWeight: "600",
        color: "#6b6b6b",
        marginBottom: 6,
    },
    title: {
        fontSize: 20,
        fontWeight: "700",
        marginBottom: 10,
    },
    text: {
        fontSize: 16,
        color: "#333",
    },
    loading: {
        fontSize: 16,
        color: "#666",
        marginBottom: 20,
    },
    button: {
        backgroundColor: "#5b6eff",
        paddingVertical: 12,
        paddingHorizontal: 30,
        borderRadius: 12,
    },
    buttonText: {
        color: "white",
        fontWeight: "700",
        fontSize: 16,
    },
});
