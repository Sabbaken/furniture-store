import React, {Fragment} from 'react';
import Navbar from "../components/navbar/navbar";
import Section from "../components/sections/section";

const Main = () => {
  return (
    <Fragment>
      <Section title={"Trending"}>
        some content
      </Section>
      <Navbar/>

    </Fragment>
  );
};

export default Main;
