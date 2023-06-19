import Banner from '../../components/Banner'
import ProductsList from '../../components/ProductsList'

import FractureCase from '../../assets/images/FractureCase.png'
import ClutchCase from '../../assets/images/ClutchCase.png'
import DreamsNightmaresCase from '../../assets/images/DreamsNightmaresCase.png'
import RevolutionCase from '../../assets/images/RevolutionCase.png'
import Game from '../../models/Game'

const promocoes: Game[] = [
  {
    id: 1,
    category: 'Case',
    description:
      'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iusto, at.',
    title: 'Case',
    system: 'Windows',
    infos: ['10%', 'R$250,00'],
    image: FractureCase
  },
  {
    id: 2,
    category: 'Case',
    description:
      'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iusto, at.',
    title: 'Case',
    system: 'Windows',
    infos: ['10%', 'R$250,00'],
    image: ClutchCase
  },
  {
    id: 3,
    category: 'Case',
    description:
      'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iusto, at.',
    title: 'Case',
    system: 'Windows',
    infos: ['10%', 'R$250,00'],
    image: DreamsNightmaresCase
  },
  {
    id: 4,
    category: 'Case',
    description:
      'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iusto, at.',
    title: 'Case',
    system: 'Windows',
    infos: ['10%', 'R$250,00'],
    image: RevolutionCase
  }
]
const emBreve: Game[] = [
  {
    id: 5,
    category: 'Case',
    description:
      'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iusto, at.',
    title: 'Case',
    system: 'Windows',
    infos: ['10%', 'R$250,00'],
    image: FractureCase
  },
  {
    id: 6,
    category: 'Case',
    description:
      'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iusto, at.',
    title: 'Case',
    system: 'Windows',
    infos: ['10%', 'R$250,00'],
    image: ClutchCase
  },
  {
    id: 7,
    category: 'Case',
    description:
      'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iusto, at.',
    title: 'Case',
    system: 'Windows',
    infos: ['10%', 'R$250,00'],
    image: DreamsNightmaresCase
  },
  {
    id: 8,
    category: 'Case',
    description:
      'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iusto, at.',
    title: 'Case',
    system: 'Windows',
    infos: ['10%', 'R$250,00'],
    image: RevolutionCase
  }
]

const Home = () => (
  <>
    <Banner />
    <ProductsList games={promocoes} title="Promoções" background="gray" />
    <ProductsList games={emBreve} title="Novidades" background="black" />
  </>
)

export default Home
