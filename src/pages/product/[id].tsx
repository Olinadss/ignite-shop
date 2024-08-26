import { ImageContainer, ProductContainer, ProductDetail } from "@/styles/pages/product"
import { useRouter } from "next/router"

export default function Product() {
  const { query } = useRouter()
  return (
    <ProductContainer>
      <ImageContainer>

      </ImageContainer>
      <ProductDetail>
        <h1>Camiseta X</h1>
        <span>R$ 79,90</span>

        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium quam deserunt sed maiores odio laboriosam ipsam? Consectetur earum deserunt dolores, corporis similique cumque voluptates quae deleniti rerum aut perspiciatis unde?</p>

        <button>Comprar agora</button>
      </ProductDetail>
    </ProductContainer>
  )
}