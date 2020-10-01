import React, { useState, useEffect } from "react";
import { Image, View, Text, TouchableHighlight } from "react-native";
import { EvilIcons, FontAwesome, SimpleLineIcons } from "@expo/vector-icons";

import {
  Container,
  Input,
  Button,
  ButtonText,
  Header,
  UserName,
  UserInfo,
} from "../../style/style";

export default function Home({ route, navigation }) {
  const user = route.params.user;
  console.log(user);

  const [userName, setUsername] = useState("");
  const [followers, setFollowers] = useState("");
  const [following, setFollowing] = useState("");
  const [repos, setRepos] = useState("");
  const [avatar, setAvatar] = useState("");
  const [bio, setBio] = useState("");
  const [company, setCompany] = useState("");
  const [location, setLocation] = useState("");
  const [userInput, setUserInput] = useState("");
  const [error, setError] = useState(null);

  const Logout = () => {
    navigation.navigate('Login');
  }

  useEffect(() => {
    fetch(`https://api.github.com/users/${user}`)
      .then((res) => res.json())
      .then((data) => {
        setData(data);
      });
  }, []);

  const setData = ({
    login,
    followers,
    following,
    public_repos,
    avatar_url,
    bio,
    company,
    location,
  }) => {
    setUsername(login);
    setFollowers(followers);
    setFollowing(following);
    setRepos(public_repos);
    setAvatar(avatar_url);
    setBio(bio);
    setCompany(company);
    setLocation(location);
  };

  return (
    <>
      <Header style={{ flexDirection: "row", justifyContent: "space-between" }}>
        <UserName>#{user}</UserName>
        <TouchableHighlight onPress={() => Logout()}>
        <SimpleLineIcons
          name="logout"
          size={24}
          color="red"
          style={{ marginTop: 30, marginRight: 15 }}
        />
        </TouchableHighlight>
        
      </Header>
      <Container>
        <View>
          <Image
            style={{
              width: 150,
              height: 150,
              borderBottomLeftRadius: 100,
              borderBottomRightRadius: 100,
              borderTopRightRadius: 100,
              borderTopLeftRadius: 100,
              overflow: "hidden",
            }}
            source={{
              uri: avatar,
            }}
          />
        </View>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            marginTop: 30,
          }}
        >
          <EvilIcons name="location" size={25} color="white" />
          <Text style={{ marginTop: 2, fontSize: 15, color: "white" }}>
            {location}
          </Text>
        </View>

        <View
          style={{
            marginTop: 10,
            flexDirection: "row",
            justifyContent: "space-between",
          }}
        >
          <FontAwesome
            name="industry"
            size={15}
            color="white"
            style={{ marginRight: 5 }}
          />
          <Text style={{ fontSize: 15, color: "white" }}>{company}</Text>
        </View>

        <View
          style={{
            flexDirection: "row",
            backgroundColor: "#A9A9A9",
            width: "100%",
            justifyContent: "space-between",
            padding: 15,
            marginTop: 30,
          }}
        >
          <View>
            <UserInfo style={{}}>{followers}</UserInfo>
            <TouchableHighlight>

            
            <Text style={{ fontSize: 15, color: "white", fontWeight: "bold" }}>
              Seguidores
            </Text>
            </TouchableHighlight>
          </View>
          <View>
            <UserInfo style={{}}>{following}</UserInfo>
            <TouchableHighlight>
            <Text style={{ fontSize: 15, color: "white", fontWeight: "bold" }}>
              Seguindo
            </Text>
            </TouchableHighlight>
          </View>
          <View>
            <UserInfo style={{}}>{repos}</UserInfo>
            <TouchableHighlight>
            <Text style={{ fontSize: 15, color: "white", fontWeight: "bold" }}>
              Seguidores
            </Text>
            </TouchableHighlight>
          </View>
        </View>
        <View style={{ marginTop: 30 }}>
          <UserInfo style={{ color: "#FFD700" }}>BIO</UserInfo>
          <Text style={{ color: "white" }}>{bio}</Text>
        </View>
      </Container>
    </>
  );
}
