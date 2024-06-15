import styled from "styled-components/native";

export const ContainerForm = styled.View`
  display: flex;
  flex: 1;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: aliceblue;
  border: 1px solid black;
  gap: 10px;
`;

export const ContainerText = styled.Text`
  font-size: 35px;
  color: #e30613;
  font-weight: 800;
  margin-bottom: 30px;
`;

export const FormImput = styled.TextInput`
  width: 270px;
  height: 30px;
  outline: none;
  border-bottom-width: 1;
  margin-bottom: 12px;
`;

export const BtnRegister = styled.TouchableOpacity`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 30px;
  width: 150px;
  background-color: #e30613;
  color: white;
  height: 45px;
  border-radius: 30px 0px;
  font-weight: 800;
`;

export const BtnText = styled.Text`
  color: white;
  font-weight: 800;
  font-size: 20px;
`;
