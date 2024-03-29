import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { cinzaBGBG, verdeBG } from "../../styles/UI/variaveis";
import Resumo from "./Resumo";
import FotoMinha from "./FotoMinha";
import ModalConfidencial from "./ModalConfidencial";
import { useGlobalContext } from "../Context";

export default function About() {
  const [pessResumo, setPessResumo] = useState(false);
  const [profResumo, setProfResumo] = useState(true);
  const [ConfidencialTxt, setConfidencialTxt] = useState(false);
  const { confidencialModal, isAutenticado } = useGlobalContext();
  useEffect(() => {
    if (confidencialModal) {
      document.body.classList.add("no-scroll");
    } else if (!confidencialModal) {
      document.body.classList.remove("no-scroll");
    }
  }, [confidencialModal]);
  return (
    <AboutSection id="sobre">
      <ContentDiv>
        {confidencialModal && !isAutenticado ? <ModalConfidencial /> : ""}
        <FotoMinha />
        <Resumo />
      </ContentDiv>
    </AboutSection>
  );
}

const AboutSection = styled.section`
  justify-content: center;
  position: relative;
  font-family: "Azeret Mono", monospace;
  background-color: ${verdeBG};
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 6rem;
  h2 {
    font-size: 1.875rem;
    margin: 30px 0;
  }
  &::after {
    position: absolute;
    z-index: 3;
    width: 100%;
    height: 90vh;
    left: 0;
    bottom: -9rem;
    content: "";
    background: ${verdeBG};
    transform: skewY(356deg);
    display: block;
  }
  &::before {
    position: absolute;
    z-index: 3;
    width: 100%;
    height: 90vh;
    left: 0;
    top: -3rem;
    z-index: 3;
    content: "";
    background: ${verdeBG};
    transform: skewY(356deg);
    display: block;
  }
`;

const ContentDiv = styled.div`
  z-index: 4;
  max-width: 1200px;
  display: flex;
  align-items: flex-start;
  justify-content: center;
  flex-direction: row;
  color: white;
  padding: 0 2rem;
  margin-top: 8rem;
  @media (max-width: 900px) {
    flex-wrap: wrap;
    align-items: center;
    flex-direction: column;
    align-content: center;
  }
`;
