import React from "react";
import { gql, useMutation, useSubscription } from "@apollo/client";
import { Card, Grid, Typography } from "@mui/material";
import styled from "@emotion/styled";
import { Mutations } from "./Mutations";

const USERADDED_SUBSCRIPTION = gql`
  subscription UserAddedSubscription {
    userAdded {
      _id
      name
      email
      active
    }
  }
`;

export function Subscriptions() {
  const { data, loading, error } = useSubscription(USERADDED_SUBSCRIPTION);

  if (error)
    return (
      <Typography align="center" variant="h3">
        Erro :(
      </Typography>
    );

  return (
    <Grid container>
      <Grid item xs={12} >
        <Typography align="center" variant="h1">
          Subscriptions
        </Typography>
        <Typography align="center" variant="body1" marginY={2}>
          Ao tentar gerar um usuário novo, a subscriptions estará escutando o resultado e imprimindo na tela :)
        </Typography>
      </Grid>
      <Grid item xs={6} paddingX={4}>
        <Mutations />
      </Grid>
      {!loading && (
        <Grid item xs={6} paddingX={4}>
            <Typography align="center" variant="body2">
              Toda vez que uma mutation é disparada é feita a publicação na
              subscription :)
            </Typography>
          <StyledCard>
            <Typography align="center" variant="body2">
              id:{data.userAdded._id}
            </Typography>
            <Typography align="left" variant="body2">
              name: {data.userAdded.name}
            </Typography>
            <Typography align="left" variant="body2">
              email: {data.userAdded.email}
            </Typography>
            <Typography align="left" variant="body2">
              active: {data.userAdded.active ? "true" : "false"}
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
