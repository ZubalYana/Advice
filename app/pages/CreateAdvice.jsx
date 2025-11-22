import { useState } from "react";
import { Alert, Keyboard, StyleSheet, Text, TextInput, TouchableOpacity, TouchableWithoutFeedback, View } from "react-native";
import { useAuth } from "../context/AuthContext";
export default function CreateAdvice() {
    const [title, setTitle] = useState("");
    const [text, setText] = useState("");
    const [type, setType] = useState("");
    const [loading, setLoading] = useState(false);
    const { token } = useAuth();

    const adviceTypes = [
        "Motivation",
        "Fitness",
        "Lifestyle",
        "Mindset",
        "Relationships",
        "Education",
        "Finance",
        "Productivity",
        "Career",
        "Health",
        "Study",
        "Mental Health",
        "Success",
        "Random",
    ];

    const handleSubmit = async () => {
        if (!title || !text) {
            Alert.alert("Error", "Title and Text are required");
            return;
        }

        setLoading(true);

        try {
            const response = await fetch("http://192.168.0.106:5000/advice", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${token}`,
                },
                body: JSON.stringify({ title, text, type }),
            });

            const data = await response.json();
            console.log("Created advice:", data);

            Alert.alert("Success", "Advice created successfully! It'll be visible once the admin approves it.");
            setTitle("");
            setText("");
            setType("");
        } catch (err) {
            console.log("Error creating advice:", err);
            Alert.alert("Error", "Failed to create advice");
        } finally {
            setLoading(false);
        }
    };

    return (
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
            <View style={styles.container}>
                <Text style={styles.heading}>Create Advice</Text>

                <TextInput
                    style={styles.input}
                    placeholder="Title"
                    placeholderTextColor="#999"
                    value={title}
                    onChangeText={setTitle}
                />

                <TextInput
                    style={[styles.input, styles.textArea]}
                    placeholder="Text"
                    placeholderTextColor="#999"
                    value={text}
                    onChangeText={setText}
                    multiline
                />

                <TextInput
                    style={styles.input}
                    placeholder="Type"
                    placeholderTextColor="#999"
                    value={type}
                    onChangeText={setType}
                />

                {/* <View style={styles.pickerContainer}>
                    <Picker
                        selectedValue={type}
                        onValueChange={(value) => setType(value)}
                        style={styles.picker}
                    >
                        <Picker.Item label="Select advice type..." value="" />

                        {adviceTypes.map((t, index) => (
                            <Picker.Item key={index} label={t} value={t} />
                        ))}
                    </Picker>
                </View> */}


                <TouchableOpacity
                    style={[styles.button, loading && styles.buttonDisabled]}
                    onPress={handleSubmit}
                    disabled={loading}
                >
                    <Text style={styles.buttonText}>
                        {loading ? "Submitting..." : "Submit"}
                    </Text>
                </TouchableOpacity>
            </View>
        </TouchableWithoutFeedback>
    );

}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        width: "100%",
        alignItems: "center",
        justifyContent: "center",
    },
    heading: {
        fontSize: 24,
        fontWeight: "700",
        marginBottom: 20,
        textAlign: "center",
    },
    input: {
        backgroundColor: "#fff",
        width: "100%",
        padding: 12,
        borderRadius: 10,
        marginBottom: 15,
        borderWidth: 1,
        borderColor: "#ddd",
        fontSize: 16,
    },
    textArea: {
        height: 120,
        textAlignVertical: "top",
    },
    pickerContainer: {
        width: "100%",
        backgroundColor: "#fff",
        borderRadius: 10,
        borderWidth: 1,
        borderColor: "#ddd",
        marginBottom: 15,
    },
    picker: {
        width: "100%",
        height: 50,
    },
    button: {
        backgroundColor: "#5b6eff",
        paddingVertical: 17,
        paddingHorizontal: 40,
        borderRadius: 12,
    },
    buttonDisabled: {
        backgroundColor: "#a0a4ff",
    },
    buttonText: {
        color: "white",
        fontWeight: "700",
        fontSize: 16,
    },
});
