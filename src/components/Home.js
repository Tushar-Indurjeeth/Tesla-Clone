import styled from "styled-components";

import Section from "./Section";

const Home = () => {
  return (
    <Container>
      <Section
        title="Model S"
        description="Order Online for Touchless Delivery"
        leftBtnText="Custom Order"
        rightBtnText="Existing Inventory"
        backgroundImg="model-s.jpg"
        dwnArrow={true}
      />
      <Section
        title="Model Y"
        description="Order Online for Touchless Delivery"
        leftBtnText="Custom Order"
        rightBtnText="Existing Inventory"
        backgroundImg="model-y.jpg"
      />
      <Section
        title="Model 3"
        description="Order Online for Touchless Delivery"
        leftBtnText="Custom Order"
        rightBtnText="Existing Inventory"
        backgroundImg="model-3.jpg"
      />
      <Section
        title="Model X"
        description="Order Online for Touchless Delivery"
        leftBtnText="Custom Order"
        rightBtnText="Existing Inventory"
        backgroundImg="model-x.jpg"
      />
      <Section
        title="Lowest Cost Solar Panels In America"
        description="Money-back guarantee"
        leftBtnText="Order Now"
        rightBtnText="Learn More"
        backgroundImg="solar-panel.jpg"
      />
      <Section
        title="Solar for new Roofs"
        description="Solar Roof costs less than a new roof plus solar panels"
        leftBtnText="Order Now"
        rightBtnText="Learn More"
        backgroundImg="solar-roof.jpg"
      />
      <Section
        title="Accessories"
        leftBtnText="Shop Now"
        backgroundImg="accessories.jpg"
      />
    </Container>
  );
};

export default Home;

const Container = styled.div`
  height: 100vh;
`;
