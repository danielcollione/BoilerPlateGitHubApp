import React, { useState, useEffect } from "react";
import { View, Text } from "react-native";

export default function Home({ route, navigation }) {
  const user = route.params.user;
  console.log(user);

  const [userName, setUsername] = useState("");
  const [followers, setFollowers] = useState("");
  const [following, setFollowing] = useState("");
  const [repos, setRepos] = useState("");
  const [avatar, setAvatar] = useState("");
  const [userInput, setUserInput] = useState("");
  const [error, setError] = useState(null);

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
  }) => {
    setUsername(login);
    setFollowers(followers);
    setFollowing(following);
    setRepos(public_repos);
    setAvatar(avatar_url);
  };

  return (
    <View>
      <Text></Text>
    </View>
  );
}
