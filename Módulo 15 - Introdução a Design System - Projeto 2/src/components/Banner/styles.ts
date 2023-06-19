import styled from 'styled-components'
import { TagContainer } from '../Tag/styles'

export const Imagem = styled.div`
  width: 100%;
  height: 560px;
  display: block;
  background-repeat: no-repeat;
  background-size: cover;
  font-weight: bold;
  padding-top: 10px;

  .container {
    position: relative;
    padding-top: 40px;
  }

  ${TagContainer} {
    position: absolute;
    top: 200px;
  }
`

export const Titulo = styled.h2`
  font-size: 36px;
  max-width: 450px;
`

// export const Descricao = styled.p`
//   font-size: 24px;
//   margin-top: 24px;
// `

// export const Precos = styled.p`
//   font-size: 24px;

//   span {
//     text-decoration: line-through;
//   }
// `
