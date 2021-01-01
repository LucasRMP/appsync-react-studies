import React from "react";
import { Connect } from "aws-amplify-react";
import { graphqlOperation } from "aws-amplify";
import { createBlog } from "./graphql/mutations";

import "./App.css";
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

export default App;
