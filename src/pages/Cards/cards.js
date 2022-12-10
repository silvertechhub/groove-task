import styled from "styled-components";

export const CardsWrap = styled.div`
  padding-bottom: .5rem;
`;

export const InlineCards = styled.div`
  display: flex;
  width: 100%;
  height: 300px;
  align-items: center;
  justify-contents: space-between;
  position:relative;

`;




export const Card = styled.div`
width: 226.38px;
height: 285.01px;
padding: 10px;
`;

export const CardImg = styled.div`
  position: relative;

  margin-bottom: 1rem;
  padding-bottom: 100%;

  box-shadow: 0 10px 30px 0 rgba(0, 0, 0, 0.3), 0 1px 2px 0 rgba(0, 0, 0, 0.2);

  img {
    width: 162.86px;
    height: 162.86px;

    position: absolute;
    top: 0;
    left: 0;
    border-radius: 2px;
  }
`;

export const CardContent = styled.div`
  min-height: 62px;

  h3 {
    font-size: 10px;
    line-height: 12px;
    text-transform: none;

    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
    max-width: 100%;
    display: inline-block;
  }

  span {
    font-size: 10px;
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    margin-top: 4px;
    white-space: normal;

    color: var(--grey-text);
  }
`;

export const Button = styled.div`
  position: absolute;
  right: 0.5rem;
  bottom: 0.5rem;
  transform: translateY(0.5rem);
  transition: all .3s ease;

  display: flex;

  width: 40px;
  height: 40px;

  background-color: var(--green-button);
  border-radius: 50%;

  svg {
    margin: auto
  }

  opacity: 0;

  &:hover {
    transform: scale(1.06);
  }
`;
export const Hero = styled.div`
width: 1580px;
height: 255px;
`