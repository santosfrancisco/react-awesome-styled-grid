import clsx from "clsx";
import Link from "@docusaurus/Link";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Layout from "@theme/Layout";
import HomepageFeatures from "@site/src/components/HomepageFeatures";
import Heading from "@theme/Heading";
import styled from "styled-components";
import { Container, config } from "@site/lib";

type HomepageHeaderProps = {
  className: string;
};

function HomepageHeader(props: HomepageHeaderProps) {
  const { siteConfig } = useDocusaurusContext();
  return (
    <header className={clsx("hero hero--primary heroBanner", props.className)}>
      <div className="container">
        <Heading as="h1" className="hero__title">
          {siteConfig.title}
        </Heading>
        <p className="hero__subtitle">{siteConfig.tagline}</p>
        <div className="buttons">
          <Link className="button button--secondary button--lg" to="/docs">
            Get started
          </Link>
          <Link
            className="try_a_demo button button--secondary button--lg"
            to="/demo"
          >
            Try a demo
          </Link>
        </div>
      </div>
    </header>
  );
}

export default styled(function Home(props): JSX.Element {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout title={siteConfig.title} description={siteConfig.tagline}>
      <HomepageHeader {...props} />
      <Container>
        <HomepageFeatures />
      </Container>
    </Layout>
  );
})`
  .heroBanner {
    padding: 4rem 0;
    text-align: center;
    position: relative;
    overflow: hidden;
  }

  .buttons {
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .try_a_demo {
    margin-left: 16px;
  }

  ${(props) => config(props).media["sm"]`
    .buttons {
      justify-content: start;
    }
`}
`;
