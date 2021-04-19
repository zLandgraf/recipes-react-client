import {
  Button,
  Grid,
  Paper,
  makeStyles,
  Typography, TableContainer, Table, TableHead, TableRow, TableCell, TableBody, TextField } from '@material-ui/core'
import { Autocomplete } from '@material-ui/lab';
import React, { useState } from 'react';
import { IShoppingItems } from '../../Models/Recipe';

const useStyles = makeStyles((theme) => ({
  root:{
    padding: theme.spacing(4,12,4,12),
  },
  receitasContainer:{
    minHeight: '50vh',
  },
  resumoContainer:{
    minHeight: '30vh',
  },
  receitasPaper:{
    padding: theme.spacing(2),
    height: '100%',
  },
  resumoMain:{
    borderRadius: '1rem',
    padding: theme.spacing(2),
    backgroundColor:'#f7f7f7', 
    height: '100%',
  }
}));

interface props {
  shoppingItems: IShoppingItems[],
  handleContinueAdding:Function, 
}

export const ShoppingList : React.FC<props> = ({shoppingItems, handleContinueAdding}) => {
  const theme = useStyles();
  
  return (
    <>
      <Grid container className={theme.root} spacing={3}>
        <Grid item xs={9} className={theme.receitasContainer}>
          <Paper className={theme.receitasPaper} elevation={1}>
            <Typography variant='h5' gutterBottom={true}> Lista de compra</Typography>
            <TableContainer>
              <Table>
                <TableHead>
                  <TableRow>
                    <TableCell width={'10%'}>Núm.</TableCell>
                    <TableCell width={'30%'}>Receita</TableCell>
                    <TableCell width={'15%'}>Dia</TableCell>
                    <TableCell width={'15%'}>Refeição</TableCell>
                    <TableCell width={'10%'} align='center'>Ações</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {shoppingItems.map((item, i) => (
                    <TableRow key={i}>
                      <TableCell>{i + 1}</TableCell>
                      <TableCell>{item.recipe.name}</TableCell>
                      <TableCell>
                        <Autocomplete
                          id="combo-box-demo"
                          options={['segunda', 'terça', 'quarta']}
                          getOptionLabel={(option) => option}
                          style={{ width: '100%' }}
                          renderInput={(params) => <TextField {...params} variant="outlined" />}
                        />
                      </TableCell>
                      <TableCell>
                        <Autocomplete
                          id="combo-box-demo"
                          options={['café', 'almoço', 'janta']}
                          getOptionLabel={(option) => option}
                          style={{ width: '100%' }}
                          renderInput={(params) => <TextField {...params} variant="outlined" />}
                        />
                      </TableCell>
                      <TableCell align='center'>Ações</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
          </Paper>
        </Grid>
        <Grid item xs={3} className={theme.resumoContainer}>
          <div className={theme.resumoMain}>
            <Typography variant='h5'> Resumo</Typography>
            <Button onClick={()=> handleContinueAdding()}>Continue adding !</Button>
          </div>
        </Grid>
      </Grid>
    </>
  )
}