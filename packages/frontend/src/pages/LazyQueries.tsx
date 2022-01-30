import React, { useState } from "react";
import { gql, useLazyQuery } from "@apollo/client";
import {
  Button,
  ButtonGroup,
  Card,
  Grid,
  TextField,
  Typography,
} from "@mui/material";
import styled from "@emotion/styled";

const GETUSERBYEMAIL_QUERY = gql`
  query GetUserByEmailQuery($email: String!) {
    getUserByEmail(email: $email) {
      _id
      name
      email
      active
    }
  }
`;

type GetUserByEmailProps = {
  getUserByEmail: {
    _id: string;
    name: string;
    email: string;
    active: boolean;
  };
};

export function LazyQueries() {
  const [email, setEmail] = useState<string | null>(null);
  const [handleUsers, { data, loading, error }] =
    useLazyQuery<GetUserByEmailProps>(GETUSERBYEMAIL_QUERY);

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

  const onListDefaultUser = async () =>
    handleUsers({
      variables: {
        email: "teste1@gmail.com",
      },
    });

  const onListUser = async () =>
    handleUsers({
      variables: {
        email,
      },
    });

  return (
    <Grid container>
      <Grid item xs={12} marginBottom={4}>
        <Typography align="center" variant="h1">
          Lazy Queries
        </Typography>
        <Typography align="center" variant="body1" marginY={2}>
          Só quando clica no botão a query é executada :)
        </Typography>
      </Grid>
      <Grid item xs={6} paddingX={4}>
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
          <Button type="submit" disabled={!email} onClick={onListUser}>
            Criar usuário
          </Button>
          <Button color="secondary" onClick={onListDefaultUser}>
            Clique aqui para listar usuário com email "teste1@gmail.com"
          </Button>
        </ButtonGroup>
      </Grid>
      {data && (
        <Grid item xs={6} paddingX={4}>
          <StyledCard>
            <Typography align="center" variant="body2">
              id:{data.getUserByEmail._id}
            </Typography>
            <Typography align="left" variant="body2">
              name: {data.getUserByEmail.name}
            </Typography>
            <Typography align="left" variant="body2">
              email: {data.getUserByEmail.email}
            </Typography>
            <Typography align="left" variant="body2">
              active: {data.getUserByEmail.active ? "true" : "false"}
            </Typography>
          </StyledCard>
        </Grid>
      )}
    </Grid>
  );
}

const StyledCard = styled(Card)`
  padding: 1rem;
  max-width: 500px;
`;
