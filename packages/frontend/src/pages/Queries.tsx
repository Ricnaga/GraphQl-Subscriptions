import React from "react";
import { gql, useQuery } from "@apollo/client";
import { Card, Grid, Skeleton, Typography } from "@mui/material";
import styled from "@emotion/styled";

const USERS_QUERY = gql`
  query UsersQuery {
    users {
      _id
      name
      email
      active
    }
  }
`;

type UsersProps = {
  users: Array<{
    _id: string;
    name: string;
    email: string;
    active: boolean;
  }>;
};

export function Queries() {
  const { data, loading, error } = useQuery<UsersProps>(USERS_QUERY);

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

  if (!data) return <Skeleton animation="wave" />;

  return (
    <>
      <Grid>
        <Typography align="center" variant="h1">
          Queries
        </Typography>
        <Typography align="center" variant="body1" marginY={2}>
          Query é renderizada quando a tela é carregada :)
        </Typography>
      </Grid>
      <Grid container spacing={2} paddingX={4}>
        {data.users.map((user) => (
          <Grid item xs={4} key={user._id}>
            <StyledCard variant="elevation">
              <Typography align="center" variant="body2">
                id: {user._id}
              </Typography>
              <Typography align="left" variant="body2">
                Nome: {user.name}
              </Typography>
              <Typography align="left" variant="body2">
                Email: {user.email}
              </Typography>
              <Typography align="left" variant="body2">
                Conta: {user.active ? "true" : "false"}
              </Typography>
            </StyledCard>
          </Grid>
        ))}
      </Grid>
    </>
  );
}

const StyledCard = styled(Card)`
  padding: 1rem;
`;
