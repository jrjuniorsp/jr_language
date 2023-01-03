import {
  Box,
  Button,
  FormControl,
  FormControlLabel,
  FormLabel,
  Radio,
  RadioGroup,
  Typography,
} from "@mui/material";
import React from "react";
import Breadcrumb from "@components/atoms/Breadcrumb";
import Paragraph from "@components/atoms/Paragraph";

const Vocabulary = () => {
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
        <Button variant="contained">Iniciar</Button>
      </Box>
    </React.Fragment>
  );
};

export default Vocabulary;
