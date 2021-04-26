import {
  Button,
  Grid,
  Paper,
  makeStyles,
  Typography, TableContainer, Table, TableHead, TableRow, TableCell, TableBody, TextField, IconButton } from '@material-ui/core'
import { Autocomplete } from '@material-ui/lab';
import React  from 'react';
import { IShoppingItems } from '../../Models/Recipe';
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';
import PlayForWorkRoundedIcon from '@material-ui/icons/PlayForWorkRounded';

const useStyles = makeStyles((theme) => ({
  root:{
    padding: theme.spacing(4,12,4,12),
  },
  receitasContainer:{
   
  },
  receitasPaper:{
    padding: theme.spacing(4),
    height: '100%',
  },
  resumoMain:{
    borderRadius: '1rem',
    padding: theme.spacing(2),
    backgroundColor:'#f7f7f7', 
    height: '100%',
  },
  buttonsContainer:{
    marginTop: theme.spacing(4),
  },
  buttonsEnd:{
    display:'flex',
    justifyContent:'flex-end',
  }
}));

interface props {
  shoppingItems: IShoppingItems[],
  handleContinueAdding: () => void,
  handleDuplicateItem: (item:IShoppingItems) => void,
  handleRemoveItem: (id:number) => void, 
  handleSelect: (id:number, target:string, value:string | null) => void,
  handleClearShoppingList: () => void,
}

export const ShoppingList : React.FC<props> = ({shoppingItems,
    handleContinueAdding,
    handleDuplicateItem,
    handleRemoveItem,
    handleSelect,
    handleClearShoppingList }) => {
  
  const theme = useStyles();
  
  return (
    <>
      <Grid container justify="center" className={theme.root} spacing={3}>
        <Grid item xs={10} className={theme.receitasContainer}>
          <Paper className={theme.receitasPaper} elevation={1}>
            <Typography variant='h5' gutterBottom={true}> Lista de Compras <EditIcon color="primary" /></Typography>
            <TableContainer>
              <Table>
                <TableHead>
                  <TableRow>
                    <TableCell width={'10%'}>Núm.</TableCell>
                    <TableCell width={'30%'}>Receita</TableCell>
                    <TableCell width={'15%'} align='center'>Quantidade</TableCell>
                    <TableCell width={'15%'}>Dia</TableCell>
                    <TableCell width={'15%'}>Refeição</TableCell>
                    <TableCell width={'15%'} align='center'>Ações</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {shoppingItems.map((item) => (
                    <TableRow key={item.id}>
                      <TableCell>
                        {item.id}
                      </TableCell>
                      <TableCell>
                        {item.recipe.name}
                      </TableCell>
                      <TableCell align='center'>
                        <TextField 
                          type="number"
                          value={item.amount}
                          onChange={(e) => handleSelect(item.id, 'amount', e.target.value)} />
                      </TableCell>
                      <TableCell>
                        <Autocomplete
                          options={['segunda', 'terça', 'quarta', 'quinta', 'sexta', 'sábado', 'domingo']}
                          getOptionLabel={(option) => option}
                          style={{ width: '100%' }}
                          getOptionSelected={(option, value) => option === value}
                          value={item.day}
                          onChange={(e, value:string | null) => handleSelect(item.id, 'day', value)}
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
                          <PlayForWorkRoundedIcon />
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
            <Grid container className={theme.buttonsContainer}>
              <Grid item xs={6}>
                <Button variant="contained" color="secondary" size="large" onClick={() => handleClearShoppingList()}>Limpar</Button>
              </Grid>
              <Grid item xs={6} className={theme.buttonsEnd}>
                <Button size="large" onClick={()=> handleContinueAdding()}>Continuar Adicionando</Button>
                <Button variant="contained" color="primary" size="large">Finalizar</Button>
              </Grid>
            </Grid>
          </Paper>
        </Grid>
      </Grid>
    </>
  )
}