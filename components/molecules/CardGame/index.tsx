import {
  Box,
  Card,
  CardHeader,
  Avatar,
  Divider,
  CardContent,
  TextField,
  Button,
} from "@mui/material";
import React from "react";
import { red } from "@mui/material/colors";
import TranslateType from "@utils/enum/translateType";

type Props = {
  word: String;
  translateType: TranslateType;
};

const CardGame = (props: Props) => {
  let subheaderText = "";
  switch (props.translateType) {
    case TranslateType.French:
      subheaderText = "Francês para Português";
      break;
    case TranslateType.Portuguese:
      subheaderText = "Português para Francês";
      break;
  }

  return (
    <Box sx={{ paddingTop: 2 }} component="div">
      <Card>
        <CardHeader
          avatar={
            <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
              T
            </Avatar>
          }
          title={props.word}
          subheader={subheaderText}
        />
        <Divider />
        <CardContent>
          <TextField
            id="outlined-basic"
            label="Digite a Tradução"
            variant="outlined"
            fullWidth
          />
          <Box sx={{ paddingTop: 1 }}>
            <Button variant="contained">Verificar</Button>
          </Box>
        </CardContent>
      </Card>
    </Box>
  );
};

export default CardGame;
