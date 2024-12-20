import { Text, View, TextInput, StyleSheet } from "react-native";

export default function Index() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: '#17E6A3',
      }}
    >
      <Text style={styles.signIn}>Sign in</Text>
      <View style={styles.inputContainer}> 
        <Text style={styles.label} >Name</Text>   
        <TextInput style={styles.input}
          defaultValue="Jon Doe"
        />
      </View>
      <View style={styles.inputContainer}>
        <Text style={styles.label}>Password</Text>      
        <TextInput style={styles.input}
          defaultValue="Password"
        />
      </View>

    </View>
  );
}

const styles = StyleSheet.create({
  signIn: {
    fontSize: 20
  },
  input: {
    borderWidth: 2, 
    borderColor: '#fff',
    borderRadius: 5,
    padding: 4,
    width: 230
  },
  label: {
    fontWeight: 400,
    color:'#fff',
    marginBottom: 2
  },
  inputContainer: {
    marginBottom: 8,
  }
});