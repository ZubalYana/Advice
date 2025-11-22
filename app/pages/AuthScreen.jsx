import { useState } from "react";
import {
    StyleSheet,
    Text,
    TextInput,
    TouchableOpacity,
    View,
} from "react-native";
import { useAuth } from "../context/AuthContext";

export default function AuthScreen() {
    const { login } = useAuth();
    const [mode, setMode] = useState("login"); // "login" or "signup"
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [loading, setLoading] = useState(false);
    const [name, setName] = useState("");

    const handleAuth = async () => {
        setLoading(true);
        try {
            const response = await fetch(
                `http://192.168.0.106:5000/auth/${mode === "login" ? "login" : "register"}`,
                {
                    method: "POST",
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify(
                        mode === "login"
                            ? { email, password }
                            : { name, email, password }
                    )

                }
            );

            const data = await response.json();

            if (data.token) {
                login(data.token);
            } else {
                alert(data.message || "Something went wrong");
            }
        } catch (err) {
            alert("Server error");
        } finally {
            setLoading(false);
        }
    };

    return (
        <View style={styles.container}>
            <View style={styles.tabs}>
                <TouchableOpacity
                    onPress={() => setMode("login")}
                    style={[styles.tab, mode === "login" && styles.activeTab]}
                >
                    <Text
                        style={[styles.tabText, mode === "login" && styles.activeTabText]}
                    >
                        Login
                    </Text>
                </TouchableOpacity>

                <TouchableOpacity
                    onPress={() => setMode("signup")}
                    style={[styles.tab, mode === "signup" && styles.activeTab]}
                >
                    <Text
                        style={[styles.tabText, mode === "signup" && styles.activeTabText]}
                    >
                        Sign Up
                    </Text>
                </TouchableOpacity>
            </View>

            <Text style={styles.title}>
                {mode === "login" ? "Welcome back" : "Create an account"}
            </Text>
            {mode === "signup" && (
                <TextInput
                    placeholder="Name"
                    value={name}
                    onChangeText={setName}
                    style={styles.input}
                />
            )}

            <TextInput
                placeholder="Email"
                autoCapitalize="none"
                value={email}
                onChangeText={setEmail}
                style={styles.input}
            />

            <TextInput
                placeholder="Password"
                secureTextEntry
                value={password}
                onChangeText={setPassword}
                style={styles.input}
            />

            <TouchableOpacity style={styles.btn} onPress={handleAuth} disabled={loading}>
                <Text style={styles.btnText}>
                    {loading
                        ? "Loading..."
                        : mode === "login"
                            ? "Login"
                            : "Create Account"}
                </Text>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        paddingHorizontal: 25,
        width: "100%",
    },
    tabs: {
        flexDirection: "row",
        justifyContent: "center",
        marginBottom: 30,
    },
    tab: {
        paddingVertical: 10,
        paddingHorizontal: 25,
        borderBottomWidth: 2,
        borderColor: "transparent",
    },
    activeTab: {
        borderColor: "#333",
    },
    tabText: {
        fontSize: 18,
        color: "#999",
    },
    activeTabText: {
        color: "#000",
        fontWeight: "bold",
    },
    title: {
        fontSize: 26,
        fontWeight: "700",
        textAlign: "center",
        marginBottom: 25,
    },
    input: {
        borderWidth: 1,
        borderColor: "#ccc",
        padding: 12,
        borderRadius: 8,
        marginBottom: 15,
    },
    btn: {
        backgroundColor: "#333",
        paddingVertical: 14,
        borderRadius: 8,
        marginTop: 10,
    },
    btnText: {
        color: "white",
        textAlign: "center",
        fontSize: 18,
        fontWeight: "600",
    },
});
