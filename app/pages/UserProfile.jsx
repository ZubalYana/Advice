import { StyleSheet, Text, View } from "react-native";

export default function UserProfile() {
    return (
        <View style={styles.container}>
            <Text style={styles.heading}>User Profile</Text>

            <Text style={styles.info}>
                This is your profile page.
            </Text>

            <Text style={styles.subtext}>
                Add your personal details, stats, or preferences here.
            </Text>
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
    info: {
        fontSize: 18,
        marginBottom: 10,
        color: "#333",
    },
    subtext: {
        fontSize: 15,
        color: "#666",
        textAlign: "center",
        marginTop: 10,
    },
});
