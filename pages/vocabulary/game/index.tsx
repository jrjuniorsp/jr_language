import React from "react";
import Breadcrumb from "@components/atoms/Breadcrumb";
import Paragraph from "@components/atoms/Paragraph";
import CardGame from "@components/molecules/CardGame";
import TranslateType from "@utils/enum/translateType";

const VocabularyGame = () => {
  return (
    <React.Fragment>
      <Breadcrumb page="Game" />
      <Paragraph text="Vamos iniciar o jogo da XXXX no modo YYYYYY" />
      <CardGame word="Comment" translateType={TranslateType.French} />
    </React.Fragment>
  );
};

export default VocabularyGame;
