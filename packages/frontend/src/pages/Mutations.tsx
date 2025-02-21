import React, { useState } from "react";
import { gql, useMutation } from "@apollo/client";
import {
  Button,
  ButtonGroup,
  Card,
  Grid,
  TextField,
  Typography,
} from "@mui/material";
import styled from "@emotion/styled";

const CREATEUSER_MUTATION = gql`
  mutation CreateUserMutation($name: String!, $email: String!) {
    createUser(name: $name, email: $email) {
      _id
      name
      email
      active
    }
  }
`;

export function Mutations() {
  const [name, setName] = useState<string | null>(null);
  const [email, setEmail] = useState<string | null>(null);

  const [handleCreateUser, { data, loading, error }] =
    useMutation(CREATEUSER_MUTATION);

  if (loading)
    return (
      <Typography align="center" variant="h3">
        Carregando...
      </Typography>
    );
  if (error)
    return (
      <Typography align="center" variant="h3">
        Erro :(
      </Typography>
    );

  async function onCreateUserDefault() {
    await handleCreateUser({
      variables: {
        name: "User Example",
        email: "User.example@email.com",
      },
    });
  }

  async function onCreateUser() {
    await handleCreateUser({
      variables: {
        name,
        email,
      },
    });
    setName(null);
    setEmail(null);
  }

  return (
    <Grid container>
      <Grid item xs={12} marginBottom={4}>
        <Typography align="center" variant="h1">
          Mutations
        </Typography>
        <Typography align="center" variant="body1" marginY={2}>
          Quando clica no botão a mutation criará um dado novo
        </Typography>
      </Grid>
      <Grid item xs={6} paddingX={4}>
        <Grid>
          <TextField
            label="Digite um nome"
            variant="filled"
            fullWidth
            onChange={(e) => setName(e.target.value)}
          />
        </Grid>
        <Grid paddingY={5}>
          <TextField
            type="email"
            label="Digite um email"
            variant="filled"
            fullWidth
            onChange={(e) => setEmail(e.target.value)}
          />
        </Grid>
        <ButtonGroup variant="contained" size="large">
          <Button
            type="submit"
            disabled={!name && !email}
            onClick={onCreateUser}
          >
            Criar usuário
          </Button>
          <Button color="secondary" onClick={onCreateUserDefault}>
            Clique aqui para criar usuário automático
          </Button>
        </ButtonGroup>
      </Grid>
      {data && (
        <Grid item xs={6} paddingX={4}>
          <StyledCard>
            <Typography align="center" variant="body2">
              id:{data.createUser._id}
            </Typography>
            <Typography align="left" variant="body2">
              name: {data.createUser.name}
            </Typography>
            <Typography align="left" variant="body2">
              email: {data.createUser.email}
            </Typography>
            <Typography align="left" variant="body2">
              active: {data.createUser.active ? "true" : "false"}
            </Typography>
          </StyledCard>
        </Grid>
      )}
    </Grid>
  );
}

const StyledCard = styled(Card)`
  padding: 1rem;
`;
