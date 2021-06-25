import { Center, Container, SimpleGrid, Spinner } from "@chakra-ui/react";
import React, { useEffect, useMemo, useState } from "react";
import { useHistory, useParams } from "react-router-dom";
import { SpotifyTypes } from "../../core/interface/home";
import { HomeServices } from "../../core/services/home";
import InfoCard from "./components/card";
import { Text } from "@chakra-ui/react";
export default function Info() {
  const auth = useMemo(() => localStorage.getItem("auth"), []),
    [loading, setLoading] = useState(false),
    [data, setData] = useState<Array<SpotifyTypes>>([]),
    homeServices = useMemo(() => new HomeServices(), []),
    [page, setPage] = useState(window.innerWidth);

  const { replace } = useHistory();
  const { id, name } = useParams<{ id: string; name: string }>();
  useEffect(() => {
    window.addEventListener("resize", () => {
      setPage(window.innerWidth);
    });
    homeServices.getID(id).then((res) => {
      setLoading(true);
      console.log(res);
      setData(res.items);
    });

    if (!auth) {
      return replace("/login");
    }

    return window.removeEventListener("resize", () => {});
  }, [auth, homeServices, id, replace]);

  return (
    <React.Fragment>
      <Container>
        <Text fontSize="xx-large" fontWeight="medium">
          {name}
        </Text>
        <Text fontSize="medium" fontWeight="medium" opacity="0.8">
          Albums
        </Text>
      </Container>

      <Center>
        <SimpleGrid columns={page < 720 ? 2 : page < 800 ? 3 : 4}>
          {!loading ? (
            <Spinner size="xl" marginTop="20px" />
          ) : (
            data.map((res) => <InfoCard {...res} />)
          )}
        </SimpleGrid>
      </Center>
    </React.Fragment>
  );
}
