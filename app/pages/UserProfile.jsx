import { Button, StyleSheet, Text, View } from "react-native";
import { useAuth } from "../context/AuthContext";
import AuthScreen from "./AuthScreen";

export default function UserProfile() {
    const { token, logout, loading } = useAuth();

    if (!token) return <AuthScreen />;

    return (
        <View style={styles.container}>
            <Text style={styles.heading}>Logged In</Text>
            <Text style={styles.info}>Your token is active.</Text>
            <Button title="Log Out" onPress={logout} />
        </View>
    );
}

const styles = StyleSheet.create({
    container: { flex: 1, justifyContent: "center", alignItems: "center" },
    heading: { fontSize: 28, fontWeight: "800", marginBottom: 10 },
    info: { fontSize: 18, marginBottom: 10 },
});
