import { useState } from "react";
import { Alert, StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";

export default function Login({ setAuthScreen, setToken }) {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleLogin = async () => {
        if (!email || !password) {
            return Alert.alert("Error", "Email and password are required.");
        }

        try {
            const response = await fetch("http://192.168.0.107:5000/auth/login", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ email, password })
            });

            const data = await response.json();

            if (!response.ok) {
                return Alert.alert("Error", data.message || "Login failed");
            }

            setToken(data.token);

        } catch (error) {
            Alert.alert("Error", "Server error");
        }
    };

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Login</Text>

            <TextInput
                style={styles.input}
                placeholder="Email"
                placeholderTextColor="#999"
                value={email}
                onChangeText={setEmail}
            />

            <TextInput
                style={styles.input}
                placeholder="Password"
                placeholderTextColor="#999"
                secureTextEntry
                value={password}
                onChangeText={setPassword}
            />

            <TouchableOpacity style={styles.button} onPress={handleLogin}>
                <Text style={styles.buttonText}>Login</Text>
            </TouchableOpacity>

            <TouchableOpacity onPress={() => setAuthScreen("signup")}>
                <Text style={styles.link}>Don't have an account? Sign up</Text>
            </TouchableOpacity>

        </View>
    );
}

const styles = StyleSheet.create({
    container: { padding: 20, marginTop: 100 },
    title: { fontSize: 28, fontWeight: "bold", marginBottom: 20 },
    input: {
        borderWidth: 1,
        borderColor: "#ccc",
        borderRadius: 8,
        padding: 12,
        marginBottom: 15
    },
    button: {
        backgroundColor: "#333",
        padding: 15,
        borderRadius: 8,
        alignItems: "center"
    },
    buttonText: { color: "#fff", fontWeight: "bold" },
    link: { marginTop: 15, color: "#555", textAlign: "center" }
});
