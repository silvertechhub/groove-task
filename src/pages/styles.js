import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100vh;
  @media (max-width: 440px) {
    height 640px;
  }
`;

export const UpperNav = styled.div`
  background-color: var(--grey-nav);

  width: 100%;
  height: 60px;
  padding: 1.4rem 2.2rem;

  position: sticky;
  top: 0;
  z-index: 3;

  display: flex;
  align-items: center;

  color: #fff;
`;

export const Content = styled.div`
  padding: .5rem .5rem;

  color: #fff;
`;

export const Title = styled.h2`

  font-size: 1rem;
  text-transform: none;
`;

export const Description = styled.p`
  margin-top: 0.4rem;

  font-size: 14px;
  color: var(--grey-text);
`;
