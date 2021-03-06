import React, { useContext } from "react";
import styled from "styled-components";
import { Row, Col } from "antd";

import { ProjectContext } from "../../contexts/ProjectContext";
import { UserContext } from "../../contexts/UserContext";
import { ProposalContext } from "../../contexts/ProposalContext";

import UserProjects from "./UserProjects";
import UserProposals from "./UserProposals";

const PageTitle = styled.h1`
  font-size: 20px;
  font-weight: bold;
`;

const PanelWrapper = styled.div`
  max-height: calc(100vh - 120px);
  overflow-y: auto;
`;

const MyProjects = () => {
  const [user] = useContext(UserContext);
  const [project, setProject] = useContext(ProjectContext);

  const [proposal, setProposal] = useContext(ProposalContext);

  //Temporary code to retrieve client's projects from all projects.
  //After frontend is connected to backed, we can have an API call to GET all projects for particular user.
  const myprojects = [];
  project.forEach((p) => {
    if (p.client === user.userName) {
      //console.log(p);
      myprojects.push(p);
    }
  });
  //console.log(myprojects);

  const myproposals = [];
  proposal.forEach((p) => {
    if (p.client === user.userName) {
      //console.log(p);
      myproposals.push(p);
    }
  });
  //console.log(myproposals);

  return (
    <Row gutter={24}>
      <Col span={12}>
        <PanelWrapper>
          <PageTitle>My Projects</PageTitle>
          {myprojects.map((proj) => (
            <UserProjects key={proj.projId} proj={proj} />
          ))}
        </PanelWrapper>
      </Col>
      <Col span={12}>
        <PanelWrapper>
          <PageTitle>My Proposals</PageTitle>
          {myproposals.map((pro) => (
            <UserProposals
              key={pro.propId}
              topic={pro.topic}
              title={pro.title}
              description={pro.description}
              status={pro.status}
            />
          ))}
        </PanelWrapper>
      </Col>
    </Row>
  );
};

export default MyProjects;
