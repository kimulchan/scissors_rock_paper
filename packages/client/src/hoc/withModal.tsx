import ReactDOM from "react-dom";
import styled from "styled-components";

export const withModal = <T extends {}>(
  ModalElement: (props: T) => JSX.Element
) => {
  const modalContainer = (props: T) => {
    const portalElement = document.querySelector("#modal");
    return (
      portalElement &&
      ReactDOM.createPortal(
        <ModalContainer>
          <ModalElement {...props} />
        </ModalContainer>,
        portalElement
      )
    );
  };
  return modalContainer;
};

const ModalContainer = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
`;
