import { Home, PlusCircle, Settings, User } from "lucide-react-native";
import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

export default function Navigation({ activeTab, setActiveTab }) {
    return (
        <View style={styles.container}>
            <TouchableOpacity style={styles.tab} onPress={() => setActiveTab("advice")}>
                <Home color={activeTab === "advice" ? "#000" : "#777"} size={24} />
                <Text style={[styles.label, activeTab === "advice" && styles.activeLabel]}>Advice</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.tab} onPress={() => setActiveTab("create")}>
                <PlusCircle color={activeTab === "create" ? "#000" : "#777"} size={24} />
                <Text style={[styles.label, activeTab === "create" && styles.activeLabel]}>Create</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.tab} onPress={() => setActiveTab("profile")}>
                <User color={activeTab === "profile" ? "#000" : "#777"} size={24} />
                <Text style={[styles.label, activeTab === "profile" && styles.activeLabel]}>Profile</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.tab} onPress={() => setActiveTab("settings")}>
                <Settings color={activeTab === "settings" ? "#000" : "#777"} size={24} />
                <Text style={[styles.label, activeTab === "settings" && styles.activeLabel]}>Settings</Text>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        justifyContent: "space-around",
        alignItems: "center",
        paddingTop: 15,
        paddingBottom: 30,
        backgroundColor: "#f8f8f8",
        borderTopColor: "#ddd",
        borderTopWidth: 1,

    },
    tab: {
        justifyContent: "center",
        alignItems: "center",
    },
    label: {
        fontSize: 12,
        color: "#777",
        marginTop: 4,
    },
    activeLabel: {
        color: "#000",
        fontWeight: "600",
    },
});

// SAMPLE USAGE IN APP
// import { useState } from 'react';
// export default function App() {
//   const [activeTab, setActiveTab] = useState('advice');
//   return (
//     <View style={{ flex: 1 }}>
//       {activeTab === 'advice' && <RandomAdvice />}
//       {activeTab === 'create' && <CreateAdvice />}
//       {activeTab === 'profile' && <UserProfile />}
//       {activeTab === 'settings' && <SettingsPage />}
//       <NavBar activeTab={activeTab} setActiveTab={setActiveTab} />
//     </View>
//   );
// }
