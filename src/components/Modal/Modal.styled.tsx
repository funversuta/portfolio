import styled from "styled-components";

export const ModalContainer = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.4);
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  transform: scale(0);
  z-index: 9999;

  &.active {
    transform: scale(1);
  }
`;

export const ModalContent = styled.div`
  padding: 20px;
  border-radius: 12px;
  background-color: white;
  height: 400px;
  width: 450px;
  color: black;

  .link {
    margin-top: 25%;
    display: block;
    text-decoration: none;
    color: black;
    transition: 0.3s color ease-in-out;

    &:hover {
      color: lightblue;
    }
  }
`;

export const ModalExitBtn = styled.div`
  display: block;
  cursor: pointer;
  margin-left: 20px;
  margin-bottom: 400px;
  width: 30px;
  height: 30px;
  --weight: 3px;
  --aa: 1px; /* anti-aliasing */
  --color: black;
  border-radius: 3px;
  background: linear-gradient(
      45deg,
      transparent calc(50% - var(--weight) - var(--aa)),
      var(--color) calc(50% - var(--weight)),
      var(--color) calc(50% + var(--weight)),
      transparent calc(50% + var(--weight) + var(--aa))
    ),
    linear-gradient(
      -45deg,
      transparent calc(50% - var(--weight) - var(--aa)),
      var(--color) calc(50% - var(--weight)),
      var(--color) calc(50% + var(--weight)),
      transparent calc(50% + var(--weight) + var(--aa))
    );
`;
