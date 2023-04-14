import type { Metadata } from "next";
import Stacks from "./components/Stacks";
import Projects from "./components/Projects";
import Intro from "./components/Intro";
import Cover from "./components/Cover";
import Contact from "./components/Contact";
import client from "./lib/apollo-client";
import { gql } from "@apollo/client";
import Service from "./components/Service";

async function getPortfolios() {
  const { data } = await client.query({
    query: GET_PORTFOLIOS,
    variables: { sort: ["publishDate:DESC"] },
  });
  return data.portfolios.data;
}

export const metadata: Metadata = {
  title: "李大毛没有猫",
  description: "设计师、开发者李大毛",
};

export default async function Home() {
  const data = await getPortfolios();

  return (
    <main>
      <Cover />
      <Intro/>
      <Stacks />
      <Projects portfolios={data} />
      <Service />
      <Contact />
    </main>
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