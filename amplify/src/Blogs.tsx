import * as React from "react";
import { graphqlOperation } from "aws-amplify";
import { Connect } from "aws-amplify-react";

import { listBlogs } from "./graphql/queries";

export const Blogs = () => {
  return (
    <Connect query={graphqlOperation(listBlogs)}>
      {({ data: { listBlogs: blogs } }: any) => {
        console.log({ blogs });
        if (!blogs) {
          return null;
        }
        return (
          <div>
            {blogs.items.map((b: any) => (
              <div key={b.id}>{b.name}</div>
            ))}
          </div>
        );
      }}
    </Connect>
  );
};
