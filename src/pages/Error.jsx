import React from "react";
import { useRouteError } from "react-router-dom";

function Error() {
  const error = useRouteError();

  return (
    <div style={{ padding: "2rem", textAlign: "center" }}>
      <h1>Oops!</h1>
      <p>Sorry, an unexpected error has occurred.</p>
      <p style={{ color: "red" }}>
        <i>{error.statusText || error.message}</i>
      </p>
    </div>
  );
}

export default Error;