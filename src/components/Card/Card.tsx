import React, { useState } from "react";
import Modal from "../Modal/Modal";

import {
  CardImage,
  Container,
  DescriptionCard,
  DescriptionWrapper,
  Point,
  TextCardWrapper,
  TitleCard,
} from "./Card.styled";

export interface cardsProps {
  title: string;
  date: string;
  place: string;
  description?: string;
  image?: string;
  href?: string;
}

const Card: React.FC<cardsProps> = ({
  title,
  date,
  place,
  image,
  description,
  href,
}) => {
  const [modalActive, setModalActive] = useState(false);
  console.log(modalActive);
  const inner = (
    <>
      <Container onClick={() => setModalActive(true)}>
        <div>{image && <CardImage src={image} alt="" />}</div>

        <TextCardWrapper>
          <TitleCard dangerouslySetInnerHTML={{ __html: title }} />
          {description && <DescriptionCard>{description}</DescriptionCard>}
          {date && <Point />}
        </TextCardWrapper>
        <DescriptionWrapper>{date}</DescriptionWrapper>
      </Container>
      <Modal
        active={modalActive}
        setActive={setModalActive}
        text={place}
        href={href}
      />
    </>
  );
  return <div>{inner}</div>;
};

export default Card;
