import React from "react";
import { gql, useQuery } from "@apollo/client";
import { Skeleton, Typography } from "@mui/material";

const HELLO_QUERY = gql`
  query HelloQuery {
    hello
  }
`;

export function Hello() {
  const { data, loading, error } = useQuery(HELLO_QUERY);

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
    <Typography align="center" variant="h1">
      {data.hello}
    </Typography>
  );
}
