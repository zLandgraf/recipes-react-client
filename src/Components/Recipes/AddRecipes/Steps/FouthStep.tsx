import { Button, Grid } from "@material-ui/core";
import { useState } from "react";
import ImageIcon from '@material-ui/icons/Image';

export const FouthStep = () => {
  const [image, setImage] = useState<any>();

  const handleTeste = (event:any) => {
    const newImage = event.target?.files?.[0];
    if (newImage) {
      setImage(URL.createObjectURL(newImage));
    }
  };
  return (
     <Grid item xs={12}>
        <input
          style={{ display: "none" }}
          id="contained-button-file"
          type="file"
          onChange={handleTeste}
        />
        <label htmlFor="contained-button-file">
          <Button variant="contained" color="primary" component="span">
            <ImageIcon />
          </Button>
        </label>
        <img src={image} />
      </Grid>
  )
}
