import React from "react";
import { SpotifyTypes } from "../../../core/interface/home";
import { Flex, Box, Image, useColorModeValue } from "@chakra-ui/react";

export default function InfoCard(props: SpotifyTypes) {
  return (
    <a
      rel="noreferrer"
      href={props.external_urls.spotify}
      target="_blank"
      key={props.external_urls.spotify}
    >
      <Flex maxWidth="250px" p={2} alignItems="center" justifyContent="center">
        <Box
          bg={useColorModeValue("white", "gray.800")}
          borderWidth="1px"
          rounded="lg"
          shadow="lg"
          position="relative"
        >
          <Image
            width="100%"
            fallbackSrc="https://via.placeholder.com/150"
            fit="cover"
            height="200px"
            src={props.images.length > 0 ? props.images[0].url : ""}
            alt={`Picture of ${
              props.images.length > 0 ? props.images[0].url : ""
            }`}
            roundedTop="lg"
          />

          <Box p="6">
            <Flex
              mt="1"
              justifyContent="space-between"
              alignContent="center"
              flexDir="column"
            >
              <Box
                textAlign="left"
                fontSize="larger"
                fontWeight="semibold"
                as="h4"
                maxW="160px"
                lineHeight="tight"
                isTruncated
              >
                {props.name}
              </Box>
            </Flex>
          </Box>
        </Box>
      </Flex>
    </a>
  );
}
