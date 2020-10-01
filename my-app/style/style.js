import styled from 'styled-components';


const ScrollView = styled.ScrollView` 
  backgroundColor: transparent
`;

const Input = styled.TextInput.attrs({
  placeholderTextColor: "rgba(79,79,79, 0.5)"
})`
  paddingHorizontal: 20px;
  paddingVertical: 15px;
  borderBottomWidth: 0.7px;
  borderBottomColor: #808080;
  borderRadius: 15px;
  backgroundColor: white;
  marginBottom: 15px;
  marginHorizontal: 10px;
  fontSize: 16px;
  color: #1C1C1C;
  width: 75%;
`;

const UserName = styled.Text`
marginTop: 30px;
marginLeft: 15px;
  color: #FFD700;
  fontWeight: bold;
  fontSize: 16px;
`

const UserInfo = styled.Text`
  color: white;
  fontWeight: bold;
  fontSize: 30px;
`

const Header = styled.View`
  
  height: 70px;
  backgroundColor: black;
`

const Container = styled.View`
  flex: 1;
  alignItems: center;
  justifyContent: center;
  backgroundColor: #363636;
`;

const Button = styled.TouchableHighlight`
paddingHorizontal: 20px;
paddingVertical: 15px;
borderBottomWidth: 0.7px;
borderBottomColor: #808080;
borderRadius: 15px;
backgroundColor: #FFD700;
marginBottom: 15px;
marginHorizontal: 10px;
fontSize: 16px;
color: #1C1C1C;
width: 75%;
`;

const ButtonText = styled.Text`
  color: #4F4F4F;
  fontWeight: bold;
  fontSize: 16px;
  textAlign: center;
`;

export { Container, Input, Button, ButtonText, Header, UserName, UserInfo }