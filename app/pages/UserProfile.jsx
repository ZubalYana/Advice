import AsyncStorage from "@react-native-async-storage/async-storage";
import { Link } from "expo-router";
import { useEffect, useState } from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

export default function UserProfile() {
    const [token, setToken] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const loadToken = async () => {
            const savedToken = await AsyncStorage.getItem("token");
            setToken(savedToken);
            setLoading(false);
        };
        loadToken();
    }, []);

    if (loading) {
        return (
            <View style={styles.container}>
                <Text style={styles.loading}>Loading...</Text>
            </View>
        );
    }

    if (!token) {
        return (
            <View style={styles.container}>
                <Text style={styles.heading}>Welcome!</Text>
                <Text style={styles.subtext}>
                    You are not logged in yet.
                </Text>

                <Link href="/login" asChild>
                    <TouchableOpacity style={styles.btn}>
                        <Text style={styles.btnText}>Login</Text>
                    </TouchableOpacity>
                </Link>

                <Link href="/register" asChild>
                    <TouchableOpacity style={[styles.btn, styles.btnOutline]}>
                        <Text style={styles.btnOutlineText}>Sign Up</Text>
                    </TouchableOpacity>
                </Link>
            </View>
        );
    }

    const logout = async () => {
        await AsyncStorage.removeItem("token");
        setToken(null);
    };

    return (
        <View style={styles.container}>
            <Text style={styles.heading}>Your Profile</Text>

            <Text style={styles.info}>You are logged in ✔</Text>

            <TouchableOpacity style={styles.logoutBtn} onPress={logout}>
                <Text style={styles.logoutText}>Logout</Text>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        paddingHorizontal: 20,
        width: "100%",
    },
    heading: {
        fontSize: 28,
        fontWeight: "800",
        marginBottom: 10,
    },
    subtext: {
        fontSize: 16,
        color: "#555",
        marginBottom: 30,
    },
    btn: {
        width: "80%",
        backgroundColor: "#5b6eff",
        paddingVertical: 12,
        borderRadius: 12,
        marginBottom: 15,
        alignItems: "center",
    },
    btnText: {
        color: "white",
        fontSize: 16,
        fontWeight: "700",
    },
    btnOutline: {
        backgroundColor: "white",
        borderWidth: 2,
        borderColor: "#5b6eff",
    },
    btnOutlineText: {
        color: "#5b6eff",
        fontSize: 16,
        fontWeight: "700",
    },
    loading: {
        fontSize: 17,
        color: "#666",
    },
    info: {
        fontSize: 18,
        marginBottom: 25,
        color: "#333",
    },
    logoutBtn: {
        backgroundColor: "#ff5b5b",
        paddingVertical: 12,
        paddingHorizontal: 30,
        borderRadius: 12,
    },
    logoutText: {
        color: "#fff",
        fontSize: 16,
        fontWeight: "700",
    },
});
