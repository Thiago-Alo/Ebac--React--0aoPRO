import ProductsList from '../../components/ProductsList'
import Game from '../../models/Game'

import AK47 from '../../assets/images/AK47.png'
import MAG7 from '../../assets/images/MAG7.png'
import MP7 from '../../assets/images/MP7.png'
import Tec9 from '../../assets/images/Tec9.png'

import ButterflyKnife from '../../assets/images/ButterflyKnife.png'
import FalchionKnife from '../../assets/images/FalchionKnife.png'
import FlipKnife from '../../assets/images/FlipKnife.png'
import HuntsmanKnife from '../../assets/images/HuntsmanKnife.png'

import FractureCase from '../../assets/images/FractureCase.png'
import ClutchCase from '../../assets/images/ClutchCase.png'
import DreamsNightmaresCase from '../../assets/images/DreamsNightmaresCase.png'
import RevolutionCase from '../../assets/images/RevolutionCase.png'

import BloodhoundGloves from '../../assets/images/BloodhoundGloves.png'
import BrokenFangGloves from '../../assets/images/BrokenFangGloves.png'
import DriverGloves from '../../assets/images/DriverGloves.png'
import HydraGloves from '../../assets/images/HydraGloves.png'

const Guns: Game[] = [
  {
    id: 1,
    category: 'Guns',
    description:
      'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iusto, at.',
    title: 'AK-47',
    system: 'Windows',
    infos: ['10%', 'R$250,00'],
    image: AK47
  },
  {
    id: 2,
    category: 'Guns',
    description:
      'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iusto, at.',
    title: 'MAG-7',
    system: 'Windows',
    infos: ['10%', 'R$250,00'],
    image: MAG7
  },
  {
    id: 3,
    category: 'Guns',
    description:
      'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iusto, at.',
    title: 'MP7',
    system: 'Windows',
    infos: ['10%', 'R$250,00'],
    image: MP7
  },
  {
    id: 4,
    category: 'Guns',
    description:
      'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iusto, at.',
    title: 'Tec-9',
    system: 'Windows',
    infos: ['10%', 'R$250,00'],
    image: Tec9
  }
]
const Knives: Game[] = [
  {
    id: 5,
    category: 'Knives',
    description:
      'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iusto, at.',
    title: 'Safari Mesh',
    system: 'Windows',
    infos: ['10%', 'R$250,00'],
    image: ButterflyKnife
  },
  {
    id: 6,
    category: 'Knives',
    description:
      'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iusto, at.',
    title: 'Marble Fade',
    system: 'Windows',
    infos: ['10%', 'R$250,00'],
    image: FalchionKnife
  },
  {
    id: 7,
    category: 'Knives',
    description:
      'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iusto, at.',
    title: 'Doppler',
    system: 'Windows',
    infos: ['10%', 'R$250,00'],
    image: FlipKnife
  },
  {
    id: 8,
    category: 'Knives',
    description:
      'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iusto, at.',
    title: 'Black Laminate',
    system: 'Windows',
    infos: ['10%', 'R$250,00'],
    image: HuntsmanKnife
  }
]

const Cases: Game[] = [
  {
    id: 5,
    category: 'Case',
    description:
      'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iusto, at.',
    title: 'Revolution Case',
    system: 'Windows',
    infos: ['10%', 'R$250,00'],
    image: RevolutionCase
  },
  {
    id: 6,
    category: 'Case',
    description:
      'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iusto, at.',
    title: 'Dreams & Nightmares Case',
    system: 'Windows',
    infos: ['10%', 'R$250,00'],
    image: DreamsNightmaresCase
  },
  {
    id: 7,
    category: 'Case',
    description:
      'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iusto, at.',
    title: 'Clutch Case',
    system: 'Windows',
    infos: ['10%', 'R$250,00'],
    image: ClutchCase
  },
  {
    id: 8,
    category: 'Case',
    description:
      'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iusto, at.',
    title: 'Fracture Case',
    system: 'Windows',
    infos: ['10%', 'R$250,00'],
    image: FractureCase
  }
]

const Gloves: Game[] = [
  {
    id: 5,
    category: 'Gloves',
    description:
      'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iusto, at.',
    title: 'Charred',
    system: 'Windows',
    infos: ['10%', 'R$250,00'],
    image: BloodhoundGloves
  },
  {
    id: 6,
    category: 'Gloves',
    description:
      'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iusto, at.',
    title: 'Unhinged',
    system: 'Windows',
    infos: ['10%', 'R$250,00'],
    image: BrokenFangGloves
  },
  {
    id: 7,
    category: 'Gloves',
    description:
      'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iusto, at.',
    title: 'Racing Green',
    system: 'Windows',
    infos: ['10%', 'R$250,00'],
    image: DriverGloves
  },
  {
    id: 8,
    category: 'Glove',
    description:
      'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iusto, at.',
    title: 'Case Hardened',
    system: 'Windows',
    infos: ['10%', 'R$250,00'],
    image: HydraGloves
  }
]

const Categories = () => (
  <>
    <ProductsList games={Guns} title="Guns" background="gray" />
    <ProductsList games={Knives} title="Knives" background="black" />
    <ProductsList games={Gloves} title="Gloves" background="gray" />
    <ProductsList games={Cases} title="Cases" background="black" />
  </>
)

export default Categories
