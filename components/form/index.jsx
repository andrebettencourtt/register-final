import React, { useState } from "react";
import {
  BtnRegister,
  BtnText,
  ContainerForm,
  ContainerText,
  FormImput,
} from "./style";
import Dropdown from "../dropdown";
import { StatusBar } from "expo-status-bar";
import Api from "../../src/service/api";

export default function Form() {
  const [nome, setNome] = useState("");
  const [cpf, setCpf] = useState("");
  const [rg, setRg] = useState("");
  const [endereco, setEndereco] = useState("");
  const [telefone, setTelefone] = useState("");
  const [email, setEmail] = useState("");

  const postDb = () => {
    Api.post(`/seed`);
    return postDb;
  };

  const aluno = {
    nome,
    cpf,
    rg,
    endereco,
    telefone,
    email,
  };

  async function register() {
    if (
      nome == "" ||
      cpf == "" ||
      rg == "" ||
      endereco == "" ||
      telefone == "" ||
      email == ""
    ) {
      alert("Preencha todos os campos!");
      return;
    }

    try {
      await Api.post(`/alunos`, aluno);
      alert("Cadastro realizado com sucesso!");
    } catch (error) {
      console.log("Erro" + error);
      alert("Erro ao realizar o cadastro!");
    }
  }

  return (
    <ContainerForm>
      <StatusBar barStyle="dark" />
      <ContainerText>Faça seu cadastro</ContainerText>

      <FormImput
        placeholder="Seu nome"
        placeholderTextColor={"grey"}
        onChangeText={setNome}
      />
      <FormImput
        placeholder="Seu CPF"
        placeholderTextColor={"grey"}
        onChangeText={setCpf}
      />
      <FormImput
        placeholder="Seu RG"
        placeholderTextColor={"grey"}
        onChangeText={setRg}
      />
      <FormImput
        placeholder="Seu endereço"
        placeholderTextColor={"grey"}
        onChangeText={setEndereco}
      />
      <FormImput
        placeholder="Seu telefone"
        placeholderTextColor={"grey"}
        onChangeText={setTelefone}
      />
      <FormImput
        placeholder="Seu email"
        placeholderTextColor={"grey"}
        onChangeText={setEmail}
      />

      <Dropdown />

      <BtnRegister onPress={register}>
        <BtnText>Registrar</BtnText>
      </BtnRegister>
    </ContainerForm>
  );
}
