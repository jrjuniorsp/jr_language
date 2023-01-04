import {
  Box,
  FormControl,
  FormControlLabel,
  FormLabel,
  Radio,
  RadioGroup,
} from "@mui/material";
import React from "react";
import Breadcrumb from "@components/atoms/Breadcrumb";
import Paragraph from "@components/atoms/Paragraph";
import AppButton from "@components/atoms/AppButton";
import { useRouter } from "next/router";

const Vocabulary = () => {
  const router = useRouter();

  const doStart = () => {
    router.push("/vocabulary/game");
  };

  return (
    <React.Fragment>
      <Breadcrumb page="Vocabulário" />
      <Paragraph text="Essa sessão você pode estudar o significado das palavras. Existem XXXX palavras" />
      <FormControl>
        <FormLabel id="demo-row-radio-buttons-group-label">
          Escolha o tipo do jogo (palavra que irá aparecer):
        </FormLabel>
        <RadioGroup
          row
          aria-labelledby="demo-row-radio-buttons-group-label"
          defaultValue="france"
          name="row-radio-buttons-group"
        >
          <FormControlLabel
            value="france"
            control={<Radio />}
            label="Em Francês"
          />
          <FormControlLabel
            value="portuguese"
            control={<Radio />}
            label="Em Português"
          />
          <FormControlLabel value="both" control={<Radio />} label="Ambos" />
        </RadioGroup>
      </FormControl>
      <Box>
        <AppButton label="Iniciar" handlerClick={doStart} />
      </Box>
    </React.Fragment>
  );
};

export default Vocabulary;
