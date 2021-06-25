import React from "react";
import { SpotifyAuth } from "react-spotify-auth";
import "react-spotify-auth/dist/index.css"; // if using the included styles

export default function Login() {
  return (
    <React.Fragment>
      <SpotifyAuth
        redirectUri="http://localhost:3000/logged/"
        clientID="e6d9caaba21c4b62b02c649d3bea569d"
      />
    </React.Fragment>
  );
}
