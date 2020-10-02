import React, { useState, useEffect } from "react";
import { ScrollView, TouchableHighlight, View, Text, Image } from "react-native";
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

export default function Followers({ route, navigation }) {

  const user = route.params.user;
  const [name, setName] = useState([]);
  const [avatarurl, setAvatarUrl] = useState([]);

  useEffect(() => {
    fetch(`https://api.github.com/users/${user}/followers`)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setName(data.map((r) => r.login));
        setAvatarUrl(data.map((r) => r.avatar_url));
      });
  }, []);

  const Voltar = () => {
    navigation.goBack();
  };

  console.log(name);
  console.log(avatarurl);

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
          {name.length} Seguindo
        </UserName>
      </Header>
      <Container>
        <ScrollView style={{ width: "100%" }}>
          {name.map((key, index) => (
            <View
              style={{
                height: 200,
                borderBottomWidth: 1,
                width: "100%",
                borderBottomColor: "#696969",
                flexDirection: "row",
                alignItems: 'center',
              }}
            >
              <Image
            style={{
              width: 100,
              height: 100,
              borderBottomLeftRadius: 100,
              borderBottomRightRadius: 100,
              borderTopRightRadius: 100,
              borderTopLeftRadius: 100,
              overflow: "hidden",
              marginLeft: 20
            }}
            source={{
              uri: avatarurl[index],
            }}
          />
              <Text
                style={{
                  color: "white",
                  fontWeight: "bold",
                  fontSize: 15,
                  margin: 10,
                }}
              >
                #{name[index]}
              </Text>
            </View>
          ))}
        </ScrollView>
      </Container>
    </>
  );
}