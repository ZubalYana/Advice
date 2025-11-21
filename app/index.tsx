import { useState } from "react";
import { StyleSheet, View } from "react-native";
import "./global.css";

import Navigation from "./components/Navigation";
import CreateAdvice from "./pages/CreateAdvice";
import RandomAdvice from "./pages/RandomAdvice";
import SettingsPage from "./pages/Settings";
import UserProfile from "./pages/UserProfile";

export default function Index() {
  const [activeTab, setActiveTab] = useState("advice");

  return (
    <View style={styles.container}>
      <View style={styles.content}>
        {activeTab === "advice" && <RandomAdvice />}
        {activeTab === "create" && <CreateAdvice />}
        {activeTab === "profile" && <UserProfile />}
        {activeTab === "settings" && <SettingsPage />}
      </View>

      <Navigation activeTab={activeTab} setActiveTab={setActiveTab} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  content: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});
