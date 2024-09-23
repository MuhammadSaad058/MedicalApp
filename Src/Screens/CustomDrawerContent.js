import React, { useState } from "react";
import { StyleSheet, ScrollView, View, Text, TouchableOpacity, Modal } from "react-native";
import { DrawerContentScrollView, DrawerItem } from "@react-navigation/drawer";
import Icon from "react-native-vector-icons/Ionicons";

const CustomDrawerContent = (props) => {
  const [modalVisible, setModalVisible] = useState(false);

  const handleLogout = () => {
    // Close the modal and navigate to SignUpScreen
    setModalVisible(false);
    props.navigation.navigate("SignUpScreen"); // Or your logout flow
  };

  return (
    <>
      <DrawerContentScrollView
        {...props}
        contentContainerStyle={styles.drawerContent}
      >
        <ScrollView>
          <DrawerItem
            label="Home"
            icon={() => <Icon name="home-outline" size={22} color="black" />}
            onPress={() => props.navigation.navigate("HomeDrawer")}
          />
          <DrawerItem
            label="MyPostScreen"
            icon={() => <Icon name="create-outline" size={22} color="black" />}
            onPress={() => props.navigation.navigate("MyPostScreen")}
          />
          {/* Logout Item */}
          <DrawerItem
            label="Logout"
            icon={() => <Icon name="log-out-outline" size={22} color="black" />}
            onPress={() => setModalVisible(true)} // Show the modal
          />
        </ScrollView>
      </DrawerContentScrollView>

      {/* Logout Confirmation Modal */}
      <Modal
        transparent={true}
        animationType="slide"
        visible={modalVisible}
        onRequestClose={() => setModalVisible(false)}
      >
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <Text style={styles.modalText}>Are you sure you want to logout?</Text>
            <View style={styles.buttonContainer}>
              <TouchableOpacity 
                style={styles.button}
                onPress={handleLogout} // Confirm logout
              >
                <Text style={styles.buttonText}>Yes</Text>
              </TouchableOpacity>
              <TouchableOpacity 
                style={styles.button}
                onPress={() => setModalVisible(false)} // Close the modal
              >
                <Text style={styles.buttonText}>No</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal>
    </>
  );
};

const styles = StyleSheet.create({
  drawerContent: {
    paddingTop: 30,
    backgroundColor: "#f4f4f4", // Background color of the drawer
  },
  logoContainer: {
    alignItems: "center",
    marginBottom: 20,
  },
  logo: {
    width: 100,
    height: 100,
    resizeMode: "contain",
  },
  modalContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0, 0, 0, 0.5)", // Semi-transparent background
  },
  modalContent: {
    width: 300,
    padding: 20,
    backgroundColor: "white",
    borderRadius: 10,
    alignItems: "center",
  },
  modalText: {
    fontSize: 18,
    marginBottom: 20,
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
  },
  button: {
    flex: 1,
    padding: 10,
    margin: 5,
    borderRadius: 5,
    backgroundColor: "#007BFF",
    alignItems: "center",
  },
  buttonText: {
    color: "white",
    fontSize: 16,
  },
});

export default CustomDrawerContent;
