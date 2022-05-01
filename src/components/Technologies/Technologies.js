import React from "react";
import { DiDatabase } from "react-icons/di";

import { AiOutlineCloudServer } from "react-icons/ai";
import { RiMiniProgramLine } from "react-icons/ri";
import { GiArtificialIntelligence, GiBrain } from "react-icons/gi";
import {
  Section,
  SectionDivider,
  SectionText,
  SectionTitle,
} from "../../styles/GlobalComponents";
import {
  List,
  ListContainer,
  ListItem,
  ListParagraph,
  ListTitle,
} from "./TechnologiesStyles";

const Technologies = () => (
  <Section id="tech">
    <SectionDivider />
    <SectionTitle main>Technical Stack</SectionTitle>
    {/* <SectionText>Technologies Description</SectionText> */}
    <List>
      <ListItem>
        <RiMiniProgramLine size="4rem" />
        <ListContainer>
          <ListTitle>Programming</ListTitle>
          <ListParagraph>Python, PySpark, SQL, HiveQL</ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <GiArtificialIntelligence size="4rem" />
        <ListContainer>
          <ListTitle>Machine Learning</ListTitle>
          <ListParagraph>
            Scikit-Learn, GBDT&GBRT, Xgboost, Complex Model Structure(Ensemble,
            Hierarchical...)
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <GiBrain size="4rem" />
        <ListContainer>
          <ListTitle>Deep Learning</ListTitle>
          <ListParagraph>
            TensorFlow, Keras, Complex Network Structure(Wide&Deep, ResNet...)
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <DiDatabase size="4rem" />
        <ListContainer>
          <ListTitle>Big Data</ListTitle>
          <ListParagraph>Hadoop, Hive, Spark</ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <AiOutlineCloudServer size="4rem" />
        <ListContainer>
          <ListTitle>Cloud Computing</ListTitle>
          <ListParagraph>AWS, S3, EC2, SSE, SageMaker, DynamoDB…</ListParagraph>
        </ListContainer>
      </ListItem>
    </List>
  </Section>
);

export default Technologies;
