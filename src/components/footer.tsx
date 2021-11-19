import NextLink from "next/link";
import { ReactElement } from "react";
import styled from "styled-components";
import { ToggleTheme } from "../utils/theme";
import { Icon } from "./icon";
import { Moon } from "./icons/Moon";

export function Footer(): ReactElement {
  return (
    <Container>
      <LeftContainer>
        <NextLink href="/" passHref>
          <Link>dstn.to</Link>
        </NextLink>
        <Text style={{ paddingLeft: "10px", paddingRight: "10px" }}>•</Text>
        <Text>{new Date().getFullYear()}</Text>
      </LeftContainer>
      <RightContainer>
        <MoonIcon icon={Moon} size={15} onClick={ToggleTheme} />
        <Text style={{ paddingLeft: "10px", paddingRight: "10px" }}>•</Text>
        <NextLink
          href="https://github.com/dustinrouillard/personal-site"
          passHref
        >
          <ExtLink
            target="_blank"
            href={"https://github.com/dustinrouillard/personal-site"}
          >
            View Source
          </ExtLink>
        </NextLink>
      </RightContainer>
    </Container>
  );
}

const Text = styled.div`
  font-family: "FiraCode-Light";
  color: var(--text);
  opacity: 50%;
`;

const LeftContainer = styled.div`
  left: 0;
  margin-left: 40px;
  margin-right: 40px;
  flex-direction: row;
  display: flex;
`;

const RightContainer = styled.div`
  right: 0;
  margin-left: 40px;
  margin-right: 40px;
  flex-direction: row;
  display: flex;
`;

const ExtLink = styled.a`
  font-family: "FiraCode-Light";
  color: var(--text);
  text-decoration: none;
  opacity: 50%;
  :hover {
    cursor: pointer;
    color: #127796;
    text-decoration: underline;
  }
`;

const Link = styled.a`
  text-decoration: none;
  font-family: "FiraCode-Light";
  color: var(--text);
  opacity: 50%;
  :hover {
    cursor: pointer;
    color: #127796;
    text-decoration: underline;
  }
`;

const Container = styled.div`
  position: fixed;
  bottom: 0;
  display: flex;
  flex-direction: row;
  min-width: fit-content;
  padding-top: 40px;
  width: 100%;
  max-height: max-content;
  justify-content: space-between;
  padding-bottom: 40px;
  background-color: var(--background);
`;

const MoonIcon = styled(Icon)`
  text-decoration: none;
  font-family: "FiraCode-Light";
  color: var(--text);
  opacity: 50%;
  :hover {
    cursor: pointer;
    color: #127796;
  }
`;
