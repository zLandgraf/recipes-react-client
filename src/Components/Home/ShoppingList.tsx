import {
  Button,
  Grid,
  Paper,
  makeStyles,
  Typography, TableContainer, Table, TableHead, TableRow, TableCell, TableBody, TextField, IconButton } from '@material-ui/core'
import { Autocomplete } from '@material-ui/lab';
import React, { useState } from 'react';
import { IShoppingItems } from '../../Models/Recipe';
import ShoppingCartRoundedIcon from '@material-ui/icons/ShoppingCartRounded';
import DeleteIcon from '@material-ui/icons/Delete';
import AddCircleRoundedIcon from '@material-ui/icons/AddCircleRounded';

const useStyles = makeStyles((theme) => ({
  root:{
    padding: theme.spacing(4,12,4,12),
  },
  receitasContainer:{
    minHeight: '50vh',
  },
  resumoContainer:{
    minHeight: '300px',
  },
  receitasPaper:{
    padding: theme.spacing(4,6,8,6),
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
  handleContinueAdding: () => void,
  handleDuplicateItem: (item:IShoppingItems) => void,
  handleRemoveItem: (id:number) => void, 
  handleSelect: (id:number, target:string, value:string | null) => void,
}

export const ShoppingList : React.FC<props> = ({shoppingItems, handleContinueAdding, handleDuplicateItem, handleRemoveItem, handleSelect }) => {
  const theme = useStyles();
  
  return (
    <>
      <Grid container className={theme.root} spacing={3}>
        <Grid item xs={9} className={theme.receitasContainer}>
          <Paper className={theme.receitasPaper} elevation={1}>
            <Typography variant='h4' gutterBottom={true} color='primary' ><ShoppingCartRoundedIcon fontSize='inherit'/></Typography>
            <TableContainer>
              <Table>
                <TableHead>
                  <TableRow>
                    <TableCell width={'10%'}>Núm.</TableCell>
                    <TableCell width={'30%'}>Receita</TableCell>
                    <TableCell width={'15%'}>Dia</TableCell>
                    <TableCell width={'15%'}>Refeição</TableCell>
                    <TableCell width={'15%'} align='center'>Ações</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {shoppingItems.map((item) => (
                    <TableRow key={item.id}>
                      <TableCell>{item.id}</TableCell>
                      <TableCell>{item.recipe.name}</TableCell>
                      <TableCell>
                        <Autocomplete
                          options={['segunda', 'terça', 'quarta']}
                          getOptionLabel={(option) => option}
                          style={{ width: '100%' }}
                          getOptionSelected={(option, value) => option === value}
                          value={item.day}
                          onChange={(e:any, value:string | null) => handleSelect(item.id, 'day', value)}
                          renderInput={(params) => <TextField {...params} variant='outlined'/>}
                        />
                      </TableCell>
                      <TableCell>
                        <Autocomplete
                          options={['café', 'almoço', 'janta']}
                          getOptionLabel={(option) => option}
                          getOptionSelected={(option, value) => option === value}
                          value={item.meal}
                          style={{ width: '100%' }}
                          onChange={(e:any, value:string | null) => handleSelect(item.id, 'meal', value)}
                          renderInput={(params) => <TextField {...params} variant='outlined'/>}
                        />
                      </TableCell>
                      <TableCell align='center'> 
                        <IconButton aria-label="delete" color='primary' onClick={() => handleDuplicateItem(item)}>
                          <AddCircleRoundedIcon />
                        </IconButton>
                        <IconButton aria-label="delete" color='secondary' onClick={() => handleRemoveItem(item.id)}>
                          <DeleteIcon />
                        </IconButton>
                      </TableCell>
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