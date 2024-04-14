import clsx from "clsx";
import Link from "@docusaurus/Link";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Layout from "@theme/Layout";
import HomepageFeatures from "@site/src/components/HomepageFeatures";
import Heading from "@theme/Heading";
import styled from "styled-components";
import { Container, config } from "@site/lib";

function HomepageHeader() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <header className={clsx("hero hero--primary heroBanner")}>
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

export default styled(({ className }) => {
  const { siteConfig } = useDocusaurusContext();
  return (
    <div className={className}>
      <Layout title={siteConfig.title} description={siteConfig.tagline}>
        <HomepageHeader />
        <Container>
          <HomepageFeatures />
        </Container>
      </Layout>
    </div>
  );
})`
  .heroBanner {
    padding: 2rem;
    text-align: center;
    position: relative;
    overflow: hidden;
  }

  .buttons {
    display: flex;
    align-items: center;
    justify-content: center;

    .button + .button {
      margin-left: 16px;
    }
  }

  ${(props) => config(props).media["sm"]`
    .heroBanner {
      padding: 4rem 0;
      text-align: left;
    }
    
    .buttons {
      justify-content: start;
    }
`}
`;
