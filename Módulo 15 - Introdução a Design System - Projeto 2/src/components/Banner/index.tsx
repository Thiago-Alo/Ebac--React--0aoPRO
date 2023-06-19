import { Imagem, Titulo } from './styles'

import bannerImg from '../../assets/images/Banner-cs.png'

import Button from '../Button'

const Banner = () => (
  <Imagem style={{ backgroundImage: `url(${bannerImg})` }}>
    <div className="container">
      <Titulo>Check out all the newest items!</Titulo>
      <br />

      <Button
        type="link"
        to="/produto"
        title="Clique aqui para aproveitar essa oferta"
      >
        Aproveitar
      </Button>
    </div>
  </Imagem>
)

export default Banner
