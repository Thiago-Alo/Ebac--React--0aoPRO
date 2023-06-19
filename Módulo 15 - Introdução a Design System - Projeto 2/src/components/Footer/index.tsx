import { Container, FooterSection, Link, Links, SectionTitle } from './styles'

const currentYear = new Date().getFullYear()

const Footer = () => (
  <Container>
    <div className="container">
      <FooterSection>
        <SectionTitle>Categorias</SectionTitle>
        <Links>
          <li>
            <Link>Guns</Link>
          </li>
        </Links>
        <Links>
          <li>
            <Link>Knives</Link>
          </li>
        </Links>
        <Links>
          <li>
            <Link>Gloves</Link>
          </li>
        </Links>
        <Links>
          <li>
            <Link>Cases</Link>
          </li>
        </Links>
      </FooterSection>
      <FooterSection>
        <SectionTitle>Acesso Rapido</SectionTitle>
        <Links>
          <li>
            <Link>Novidades</Link>
          </li>
        </Links>
        <Links>
          <li>
            <Link>Promoções</Link>
          </li>
        </Links>
      </FooterSection>
      <p>{currentYear} - &copy; CS:GO Todos os direitos reservados</p>
    </div>
  </Container>
)

export default Footer
