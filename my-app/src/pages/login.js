import React, { useState, useEffect } from "react";
import { Formik } from "formik";
import {View} from 'react-native';

import { Container, Input, Button, ButtonText } from "../../style/style";
import { Ionicons } from "@expo/vector-icons";



export default function Login({navigation}) {
  const [user, setUser] = useState("");

  HandleSubmitUser = (values) => {
    console.log(values.user);
    navigation.navigate('Home', {user: values.user})
  }

  return (
    
      <Formik
        initialValues={{
          user: ''
        }}
        onSubmit={(values) => HandleSubmitUser(values)}
      >
        {({values, handleChange, handleSubmit}) => (
          <Container>
          <Ionicons
            name="logo-github"
            size={88}
            color="#FFD700"
            style={{ marginBottom: 30 }}
          />
            <Input 
            placeholder="Usuário" 
            value={values.user}
            onChangeText={handleChange('user')}
            />
            <Button onPress={() => handleSubmit()}>
              <ButtonText>Entrar</ButtonText>
            </Button>
            </Container>
        )}
      </Formik>
    
  );
}
