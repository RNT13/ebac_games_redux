import * as S from './styles'

import { useSelector } from 'react-redux'
import cesta from '../../assets/cesta.png'

import { RootState } from '../../store'

console.log('valorTotal')

const Header = () => {
  const itens = useSelector((state: RootState) => state.carrinho.itens)

  const valorTotal = itens.reduce((acc, item) => {
    acc += item.preco
    return acc
  }, 0)

  return (
    <S.Header>
      <h1>EBAC Games</h1>
      <div>
        <img src={cesta} />
        <span>
          {itens.length} itens, valor total: R$ {valorTotal.toFixed(2)}
        </span>
      </div>
    </S.Header>
  )
}

export default Header
