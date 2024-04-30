import Heading from "@theme/Heading";
import { Col, Row } from "@site/lib";

type FeatureItem = {
  title: string;
  imgSrc: string;
  description: JSX.Element;
};

const FeatureList: FeatureItem[] = [
  {
    title: "Easy to Use",
    imgSrc: "img/pluto-easy-to-use.png",
    description: (
      <>
        React-awesome-styled-grid was designed from the ground up to be easily
        installed and used to make responsive web applications in minutes with
        zero configuration.
      </>
    )
  },
  {
    title: "Focus on What Matters",
    imgSrc: "img/pluto-focus-on-what-matters.png",
    description: (
      <>
        You can redirect your focus towards developing the core functionalities
        of your React application. This allows for more efficient allocation of
        time and resources, accelerating the overall development process while
        ensuring that your application remains responsive and user-friendly
      </>
    )
  },
  {
    title: "Consistency and Reliability",
    imgSrc: "img/pluto-consistency-and-reliability.png",
    description: (
      <>
        Responsive design involves ensuring that your application looks and
        functions well across various devices and screen sizes. By adopting
        react-awesome-styled-grid, you ensure consistency in design and behavior
        across various devices and screen sizes. This library has been
        thoroughly tested and is regularly updated, guaranteeing reliability and
        compatibility with the latest devices and browsers. Your application
        will maintain a polished and professional appearance regardless of the
        platform it&apos;s accessed from.
      </>
    )
  },
  {
    title: "Time Efficiency",
    imgSrc: "img/pluto-time-efficiency.png",
    description: (
      <>
        Leveraging react-awesome-styled-grid streamlines the implementation of
        responsive design features, saving considerable time and effort. Instead
        of manually crafting complex CSS media queries, you can utilize the
        pre-built components and utilities provided by the library to quickly
        achieve responsiveness in your React application.
      </>
    )
  }
];

function Feature({ title, imgSrc, description }: FeatureItem) {
  return (
    <Col sm={4} lg={6}>
      <div className="text--center">
        <img
          role="img"
          src={imgSrc}
          style={{ height: 200, width: 200, objectFit: "contain" }}
        />
      </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
      </div>
    </Col>
  );
}

export default function HomepageFeatures(): JSX.Element {
  return (
    <section
      style={{
        display: "flex",
        alignItems: "center",
        padding: "2rem 0",
        width: "100%"
      }}
    >
      <div className="container">
        <Row>
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </Row>
      </div>
    </section>
  );
}
