import React from 'react'
import { View, Text } from 'react-native'

import {Container, Input, Button, ButtonText} from '../../style/style';
import { Ionicons } from '@expo/vector-icons';

export default function Home() {
  return (
    <Container>
      
      <Ionicons name="logo-github" size={88} color="#FFD700" style={{marginBottom: 30}}/>
      <Input
        placeholder='Usuário'
      />
      <Button>
        <ButtonText>
          Entrar
        </ButtonText>
      </Button>
     
      
    </Container>
  )
}
