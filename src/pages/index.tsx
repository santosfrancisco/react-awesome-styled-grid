import clsx from "clsx";
import Link from "@docusaurus/Link";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Layout from "@theme/Layout";
import HomepageFeatures from "@site/src/components/HomepageFeatures";
import Heading from "@theme/Heading";
import { Container } from "@site/lib";

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

export default function IndexPage() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout title={siteConfig.title} description={siteConfig.tagline}>
      <HomepageHeader />
      <Container>
        <HomepageFeatures />
      </Container>
    </Layout>
  );
}
