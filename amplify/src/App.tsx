import React from "react";
import { Connect, withAuthenticator } from "aws-amplify-react";
import { graphqlOperation } from "aws-amplify";

import "@aws-amplify/ui/dist/style.css";
import "./App.css";

import { createBlog } from "./graphql/mutations";
import { Form } from "./Form";
import { Blogs } from "./Blogs";

function App() {
  return (
    <div style={{ textAlign: "center" }}>
      <Connect mutation={graphqlOperation(createBlog)}>
        {({ mutation }: any) => (
          <Form
            onSubmit={async (input) => {
              const response = await mutation({
                input,
              });
              console.log(response);
            }}
          />
        )}
      </Connect>
      <Blogs />
    </div>
  );
}

export default withAuthenticator(App);
