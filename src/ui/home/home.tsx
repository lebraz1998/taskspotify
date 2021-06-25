import { SearchIcon } from "@chakra-ui/icons";
import { Button, Center, Input, SimpleGrid, Spinner } from "@chakra-ui/react";
import React, { useEffect, useMemo, useState } from "react";
import { useHistory } from "react-router-dom";
import { SpotifyTypes } from "../../core/interface/home";
import { HomeServices } from "../../core/services/home";
import HomeCard from "./components/card";

export default function Home() {
  const auth = useMemo(() => localStorage.getItem("auth"), []),
    [loading, setLoading] = useState(false),
    [data, setData] = useState<Array<SpotifyTypes>>([]),
    homeServices = useMemo(() => new HomeServices(), []),
    [page, setPage] = useState(window.innerWidth),
    [search, setSearch] = useState("");

  const { replace } = useHistory();
  useEffect(() => {
    window.addEventListener("resize", () => {
      setPage(window.innerWidth);
    });

    if (!auth) {
      return replace("/login");
    }

    return window.removeEventListener("resize", () => {});
  }, [auth, replace]);
  return (
    <React.Fragment>
      <Center>
        {" "}
        <Input
          size="md"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          variant="outline"
          placeholder="Search for an artist..."
          maxW="md"
        />
        <Button
          onClick={() => {
            setLoading(true);
            homeServices
              .getSearch({ q: search, type: "artist" })
              .then((res) => {
                setLoading(false);

                setData(() => res.artists.items);
              });
          }}
        >
          <SearchIcon />
        </Button>
      </Center>

      <Center>
        <SimpleGrid columns={page < 720 ? 2 : page < 800 ? 3 : 4}>
          {loading ? (
            <Spinner size="xl" marginTop="20px" />
          ) : (
            data.map((res) => <HomeCard {...res} />)
          )}
        </SimpleGrid>
      </Center>
    </React.Fragment>
  );
}
