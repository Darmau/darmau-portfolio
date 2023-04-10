import { gql } from "@apollo/client";
import client from "../lib/apollo-client";

export default async function Projects() {
  const { data } = await client.query({
    query: GET_PORTFOLIOS,
    variables: { sort: ["publishDate:DESC"] },
  });
  return (
    <div className="bg-transparent border-y border-black py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {data.portfolios.data.map((item) => {
          return <div>{item.attributes.title}</div>;
        })}
      </div>
    </div>
  );
}

export const revalidate = 5;

const GET_PORTFOLIOS = gql`
  query Portfolios($sort: [String]) {
    portfolios(sort: $sort) {
      data {
        attributes {
          title
          description
          slug
          cover {
            data {
              attributes {
                formats
              }
            }
          }
        }
      }
    }
  }
`;