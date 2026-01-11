import React from "react";
import { ScrollView, View, Text, StyleSheet, Image } from "react-native";

export default function WelcomeScreen() {
  return (
    <ScrollView style={styles.container}>
      
      {/* Header : logo + nom de l'app */}
      <View style={styles.headerWrapper}>
        <Image
          source={require("../img/logo.png")} 
          style={styles.logo}
          resizeMode="contain"
        />
        <Text style={styles.headerText}>ENS Marrakech</Text>
      </View>

      {/* Sous-titre */}
      <Text style={styles.subtitle}>
        Ecole Normale Supérieure de Marrakech
      </Text>

      {/* Galerie */}
      <View style={styles.gallery}>
        <Image
          source={require("../img/photo1.png")}
          style={styles.photo}
          resizeMode="cover"
        />

        <Image
          source={require("../img/photo2.png")}
          style={styles.photo}
          resizeMode="cover"
        />

         <Image
          source={require("../img/photo3.png")}
          style={styles.photo}
          resizeMode="cover"
        />
      </View>

    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#EDEFEE"
  },

  headerWrapper: {
    flexDirection: "row",
    alignItems: "center",
    padding: 16,
    backgroundColor: "#EE9972"
  },

  logo: {
    width: 60,
    height: 60,
    borderRadius: 12,
    marginRight: 12,
    backgroundColor: "white"
  },

  headerText: {
    fontSize: 24,
    fontWeight: "bold",
    color: "black"
  },

  subtitle: {
    paddingHorizontal: 16,
    paddingTop: 16,
    fontSize: 16,
    color: "black"
  },

  gallery: {
    marginTop: 16,
    alignItems: "center"
  },

  photo: {
    width: 320,
    height: 180,
    borderRadius: 12,
    marginBottom: 16
  }
});
