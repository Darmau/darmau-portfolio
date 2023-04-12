import { gql } from "@apollo/client";
import client from "../lib/apollo-client";
import Body from "./Body";

type Portfolio = {
  attributes: {
    title: string;
    slug: string;
    main: string;
    description: string;
  };
};

// 生成页面地址
export async function generateStaticParams() {
  const { data } = await client.query({
    query: GET_PATHS,
  });
  return data.portfolios.data.map((portfolio: Portfolio) => ({
    slug: portfolio.attributes.slug,
  }));
}

// 生成页面内容
async function getPortfolio(slug: string) {
  const filters = {
    slug: { eq: slug },
  };
  const { data } = await client.query({
    query: GET_PORTFOLIO,
    variables: { filters },
  });
  const portfolioData = await data.portfolios.data;

  if (!portfolioData || portfolioData.length === 0) {
    throw new Error(`No portfolio found`);
  }

  return {
    portfolio: portfolioData[0].attributes,
  };
}

export default async function Project(context: any) {

  const {slug} = context.params;
  const { portfolio } = await getPortfolio(slug);

  return (
    <main className="bg-transparent py-16 px-6 max-w-5xl mx-auto flex flex-col-reverse gap-8 lg:py-32 lg:px-8">
      <div className="w-full text-base leading-7 text-gray-700">
        <div className="text-base leading-7 text-gray-700">
          <h1 className="font-serif text-4xl font-bold mb-8">{portfolio.title}</h1>
          <Body html={portfolio.main} />
        </div>
      </div>
    </main>
  );
}

const GET_PATHS = gql`
  query Portfolios {
    portfolios {
      data {
        attributes {
          slug
        }
      }
    }
  }
`;

const GET_PORTFOLIO = gql`
  query Portfolio($filters: PortfolioFiltersInput) {
    portfolios(filters: $filters) {
      data {
        attributes {
          title
          slug
          main
          description
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
