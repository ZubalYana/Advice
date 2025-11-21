import { useState } from "react";
import { StyleSheet, Switch, Text, TouchableOpacity, View } from "react-native";

export default function Settings() {
    const [notifications, setNotifications] = useState(true);
    const [darkMode, setDarkMode] = useState(false);

    return (
        <View style={styles.container}>

            <Text style={styles.header}>Settings</Text>

            <View style={styles.section}>
                <Text style={styles.sectionTitle}>Account</Text>

                <TouchableOpacity style={styles.item}>
                    <Text style={styles.itemText}>Change Password</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.item}>
                    <Text style={styles.itemText}>Delete Account</Text>
                </TouchableOpacity>
            </View>

            <View style={styles.section}>
                <Text style={styles.sectionTitle}>App</Text>

                <View style={styles.itemRow}>
                    <Text style={styles.itemText}>Notifications</Text>
                    <Switch
                        value={notifications}
                        onValueChange={setNotifications}
                    />
                </View>

                <View style={styles.itemRow}>
                    <Text style={styles.itemText}>Dark Mode</Text>
                    <Switch
                        value={darkMode}
                        onValueChange={setDarkMode}
                    />
                </View>
            </View>

            <TouchableOpacity style={styles.logoutBtn}>
                <Text style={styles.logoutText}>Log out</Text>
            </TouchableOpacity>

        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: "100%",
        padding: 20,
        gap: 20,
    },
    header: {
        fontSize: 28,
        fontWeight: "700",
        marginBottom: 10,
        textAlign: "center",
    },
    section: {
        backgroundColor: "#f5f5f5",
        padding: 15,
        borderRadius: 12,
        gap: 10,
    },
    sectionTitle: {
        fontSize: 18,
        fontWeight: "600",
        marginBottom: 5,
    },
    item: {
        paddingVertical: 10,
    },
    itemText: {
        fontSize: 16,
    },
    itemRow: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        paddingVertical: 10,
    },
    logoutBtn: {
        marginTop: "auto",
        backgroundColor: "#ff3030",
        paddingVertical: 12,
        borderRadius: 10,
    },
    logoutText: {
        color: "white",
        fontSize: 16,
        fontWeight: "600",
        textAlign: "center",
    }
});
