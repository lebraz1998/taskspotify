import React from "react";
import { SpotifyTypes } from "../../../core/interface/home";
import { Flex, Box, Image, useColorModeValue } from "@chakra-ui/react";
import { BsStar, BsStarFill, BsStarHalf } from "react-icons/bs";
import { Link } from "react-router-dom";

interface RatingProps {
  rating: number;
  numReviews: number;
}

function Rating({ rating, numReviews }: RatingProps) {
  return (
    <Box d="flex" alignItems="center">
      {Array(5)
        .fill("")
        .map((_, i) => {
          const roundedRating = Math.round(rating * 2) / 2;
          if (roundedRating - i >= 1) {
            return (
              <BsStarFill
                key={i}
                style={{ marginLeft: "1" }}
                color={i < rating ? "teal.500" : "gray.300"}
              />
            );
          }
          if (roundedRating - i === 0.5) {
            return <BsStarHalf key={i} style={{ marginLeft: "1" }} />;
          }
          return <BsStar key={i} style={{ marginLeft: "1" }} />;
        })}
      <Box as="span" ml="2" color="gray.600" fontSize="sm">
        {numReviews} review{numReviews > 1 && "s"}
      </Box>
    </Box>
  );
}

export default function HomeCard(props: SpotifyTypes) {
  return (
    <Link to={`/user/home/${props.id}/${props.name}`}>
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

              <Box
                textAlign="left"
                fontSize="15px"
                as="h3"
                lineHeight="tight"
                isTruncated
              >
                {props.followers.total} Followers
              </Box>
            </Flex>

            <Flex justifyContent="space-between" alignContent="center">
              <Rating rating={props.popularity} numReviews={props.popularity} />
            </Flex>
          </Box>
        </Box>
      </Flex>
    </Link>
  );
}
