import React, { useState, useEffect } from "react";
import { ScrollView, TouchableHighlight, View, Text } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { Foundation } from "@expo/vector-icons";

import {
  Container,
  Input,
  Button,
  ButtonText,
  Header,
  UserName,
  UserInfo,
} from "../../style/style";

export default function Repos({ route, navigation }) {
  const user = route.params.user;
  const [nameRepo, setNameRepo] = useState([]);
  const [description, setDescription] = useState([]);

  useEffect(() => {
    fetch(`https://api.github.com/users/${user}/repos`)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setNameRepo(data.map((r) => r.name));
        setDescription(data.map((r) => r.description));
      });
  }, []);

  const Voltar = () => {
    navigation.goBack();
  };

  console.log(nameRepo);
  console.log(description);

  return (
    <>
      <Header
        style={{
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <TouchableHighlight onPress={() => Voltar()}>
          <Ionicons
            name="ios-arrow-back"
            size={45}
            color="white"
            style={{ margin: 10, marginTop: 30, marginLeft: 18 }}
          />
        </TouchableHighlight>

        <UserName style={{ marginRight: 18 }}>
          {nameRepo.length} Repositórios
        </UserName>
      </Header>
      <Container>
        <ScrollView style={{ width: "100%" }}>
          {nameRepo.map((key, index) => (
            <View
              style={{
                height: 200,
                justifyContent: "center",
                borderBottomWidth: 1,
                width: "100%",
                borderBottomColor: "#696969",
              }}
            >
              <Text
                style={{
                  color: "white",
                  fontWeight: "bold",
                  fontSize: 15,
                  margin: 10,
                }}
              >
                {nameRepo[index]}
              </Text>
              <Text style={{ color: "#ccc", fontSize: 11, margin: 10 }}>
                {description[index]}
              </Text>
              <View style={{flexDirection: 'row'}}>
              <Text style={{margin: 10, color: "#ccc"}}>10  <Foundation name="like" size={24} color="#ccc" /></Text>
              <Text style={{margin: 10, color: "#ccc"}}>1  <Foundation name="dislike" size={24} color="#ccc" /></Text>
              </View>
            </View>
          ))}
        </ScrollView>
      </Container>
    </>
  );
}
