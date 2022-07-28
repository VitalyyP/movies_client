import { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import Typography from "@mui/material/Typography";
import { useQuery } from "@apollo/client";

import { moviesByIdsQuery } from "./queries";
import { number } from "prop-types";
import { Identity } from "@mui/base";

interface Params {
  title: string | null;
  ids: number[] | undefined;
}

type Id = string | number;

const Recommend = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [params, setParams] = useState<Params>({ title: "", ids: [] });
  // const [title, setTitle] = useState<string>("");
  // const [ids, setIds] = useState<number[]>([]);

  // const titleFromParams = searchParams.get("title");
  // const idsFromParams = searchParams
  //   .get("ids")
  //   ?.split(",")
  //   .map((id) => +id);

  // setParams({ title: titleFromParams, ids: idsFromParams });

  // titleFromParams && setTitle(titleFromParams);
  // idsFromParams && setIds(idsFromParams);

  const { loading, error, data } = useQuery(moviesByIdsQuery, {
    variables: {
      ids: searchParams
        .get("ids")
        ?.split(",")
        .map((id: Id) => Number(id)),
    },
  });

  console.log("data: ", data);

  // useEffect(() => {
  //   const titleFromParams = searchParams.get("title");
  //   const idsFromParams = searchParams.get("ids")?.split(",");
  //   titleFromParams && setTitle(titleFromParams);
  //   idsFromParams && setIds(idsFromParams);
  // }, [searchParams]);

  return (
    <>
      <Typography variant="h2" component="h2" gutterBottom>
        {params.title}
      </Typography>
    </>
  );
};

export default Recommend;
