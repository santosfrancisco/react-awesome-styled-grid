import styled, { ThemeProvider } from "styled-components";
import { Container, Row, Col, ScreenClass, ScreenBadge } from "@site/lib";
import Layout from "@theme/Layout";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";

const customConf = {
  mediaQuery: "only screen",
  columns: {
    xs: 4,
    sm: 8,
    md: 8,
    lg: 12,
    xl: 12
  },
  gutterWidth: {
    xs: 1,
    sm: 1,
    md: 1.5,
    lg: 1.5,
    xl: 1.5
  },
  paddingWidth: {
    xs: 1,
    sm: 1,
    md: 1.5,
    lg: 1.5,
    xl: 1.5
  },
  container: {
    xs: "full", // 'full' = max-width: 100%
    sm: "full", // 'full' = max-width: 100%
    md: "full", // 'full' = max-width: 100%
    lg: 90, // max-width: 1440px
    xl: 90 // max-width: 1440px
  },
  breakpoints: {
    xs: 1,
    sm: 48, // 768px
    md: 64, // 1024px
    lg: 90, // 1440px
    xl: 120 // 1920px
  }
};

type DemoProps = {
  className: string;
};

const Demo = ({ className }: DemoProps) => {
  return (
    <ThemeProvider theme={{ awesomegrid: customConf }}>
      <div className={className}>
        <Container className="grid-container" debug>
          <div>
            <p>Resize your browser window and see what happens!</p>
          </div>
          <ScreenBadge />
          <Row>
            <Col>
              <ScreenClass
                render={(screen) => (
                  <p
                    style={{
                      color: ["sm", "md"].includes(screen) ? "green" : "yellow"
                    }}
                  >
                    Current screen is {screen.toUpperCase()}
                  </p>
                )}
              />
            </Col>
          </Row>
          <Row>
            <Col xs={2} sm={3} md={4} lg={3} xl={6}>
              <div className="grid-col">
                xs={2} sm={3} md={4} lg={3} xl={6}
              </div>
            </Col>
            <Col xs={2} sm={5} md={4} lg={3} xl={6}>
              <div className="grid-col">
                xs={2} sm={5} md={4} lg={3} xl={6}
              </div>
            </Col>
            <Col xs={4} sm={5} md={4} lg={6} xl={6}>
              <div className="grid-col">
                xs={4} sm={5} md={4} lg={6} xl={6}
              </div>
            </Col>
            <Col xs={4} sm={3} md={4} lg={12} xl={6}>
              <div className="grid-col">
                xs={4} sm={3} md={4} lg={12} xl={6}
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </ThemeProvider>
  );
};

export default styled(({ className }) => {
  const { siteConfig } = useDocusaurusContext();

  return (
    <Layout
      title={siteConfig.title}
      description={`${siteConfig.title} demonstration`}
    >
      <main>
        <Demo className={className} />
      </main>
    </Layout>
  );
})`
  display: flex;
  padding-top: 48px;

  .grid-container {
    padding-top: 20px;
    position: relative;
    background-color: rgb(243, 100, 2, 0.3);
    border-radius: 2px;
  }

  .grid-col {
    width: 100%;
    background-color: rgb(243, 4, 242, 0.3);
    min-height: 100px;
    margin-bottom: 20px;
    border-radius: 2px;
  }
`;
