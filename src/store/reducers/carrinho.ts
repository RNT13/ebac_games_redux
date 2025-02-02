import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { Game } from '../../App'

type CarrinhoState = {
  itens: Game[]
}

const initialState: CarrinhoState = {
  itens: []
}

console.log('Carrinho Reducer carregado')

const carrinhoSlice = createSlice({
  name: 'carrinho',
  initialState,
  reducers: {
    adicionar: (estado, action: PayloadAction<Game>) => {
      const jogo = action.payload

      if (estado.itens.find((game) => game.id === jogo.id)) {
        alert('Item já adicionado')
      } else {
        estado.itens.push(jogo)
      }
    }
  }
})

export const { adicionar } = carrinhoSlice.actions
export default carrinhoSlice.reducer
