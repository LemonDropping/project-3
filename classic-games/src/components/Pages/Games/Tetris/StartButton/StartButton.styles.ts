import styled from "styled-components";

const buttonColor = `#00FF7F`;

export const FlickeringGreenStartButton = styled.button`

  color: ${buttonColor};
  cursor: pointer;
  padding: 0.35em 1rem;
  border: 0.15em solid ${buttonColor};
  border-radius: 0.45em;
  background: none;
  perspective: 10rem;
  
  font-family: "VT323", monospace;
  font-size: 1rem;
  letter-spacing: .05em;
  align-items: center;
  text-transform: uppercase;
  height: 60px;

  -webkit-box-shadow: inset 0px 0px 0.5em 0px ${buttonColor},
  0px 0px 0.5em 0px ${buttonColor};
  -moz-box-shadow: inset 0px 0px 0.5em 0px ${buttonColor},
  0px 0px 0.5em 0px ${buttonColor};
  box-shadow: inset 0px 0px 0.5em 0px ${buttonColor},
  0px 0px 0.5em 0px ${buttonColor};
  animation: border-flicker 2s linear reverse infinite;

  &:before {
    content: '';
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    opacity: 0.7;
    filter: blur(1em);
    transform: translateY(60%) rotateX(85deg) scale(1, 0.15);
    background: ${buttonColor};
    pointer-events: none;
  }

  &:after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    opacity: 0;
    z-index: -1;
    background-color: ${buttonColor};
    box-shadow: 0 0 2em 0.2em ${buttonColor};
    transition: opacity 100ms linear;
  }

  &:hover {
    color: rgba(0, 0, 0, 0.8);
    text-shadow: none;
    animation: none;
  }

  &:hover:before {
    filter: blur(1.5em);
    opacity: 1;
  }

  &:hover:after {
    opacity: 1;
  }

  @keyframes faulty-flicker {
  0% {
    opacity: 0.1;
  }
  2% {
    opacity: 0.1;
  }
  4% {
    opacity: 0.5;
  }
  19% {
    opacity: 0.5;
  }
  21% {
    opacity: 0.1;
  }
  23% {
    opacity: 1;
  }
  80% {
    opacity: 0.5;
  }
  83% {
    opacity: 0.4;
  }

  87% {
    opacity: 1;
  }
}

  @keyframes text-flicker {
  0% {
    opacity: 0.1;
  }

  2% {
    opacity: 1;
  }

  8% {
    opacity: 0.1;
  }

  9% {
    opacity: 1;
  }

  12% {
    opacity: 0.1;
  }
  20% {
    opacity: 1;
  }
  25% {
    opacity: 0.3;
  }
  30% {
    opacity: 1;
  }

  70% {
    opacity: 0.7;
  }
  72% {
    opacity: 0.2;
  }

  77% {
    opacity: 0.9;
  }
  100% {
    opacity: 0.9;
  }
}

@keyframes border-flicker {
  0% {
    opacity: 0.1;
  }
  2% {
    opacity: 1;
  }
  4% {
    opacity: 0.1;
  }

  8% {
    opacity: 1;
  }
  70% {
    opacity: 0.7;
  }
  100% {
    opacity: 1;
  }
}

@media only screen and (max-width: 600px) {
  font-size: 1em;
`;

// const StyledSpan = styled.span`
//   -webkit-text-shadow: 0 0 0.125em hsl(0 0% 100% / 0.3),
//     0 0 0.45em ${buttonColor};
//   -moz-text-shadow: 0 0 0.125em hsl(0 0% 100% / 0.3), 0 0 0.45em ${buttonColor};
//   text-shadow: 0 0 0.125em hsl(0 0% 100% / 0.3), 0 0 0.45em ${buttonColor};
//   animation: text-flicker 3s linear infinite;

//   &:hover {
//     animation: none;
//   }
// `;
