import { Center, Spinner } from "@chakra-ui/react";
import React, { useEffect } from "react";
import { useHistory, useLocation } from "react-router-dom";

export default function Logged() {
  const { hash } = useLocation();
  const { replace } = useHistory();

  useEffect(() => {
    try {
      localStorage.setItem("auth", hash.split("=")[1].split("&")[0]);
      return replace("/user/home");
    } catch {
      replace("/login");
    }
  }, [hash, replace]);
  return (
    <React.Fragment>
      <Center marginTop="10px">
        <Spinner size="xl" />
      </Center>
    </React.Fragment>
  );
}
