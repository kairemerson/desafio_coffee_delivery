import { AddToCart, CardContainer, FooterCard, Image, PriceFooter, Subtitle, Tag, Title } from "./styles";
import { ShoppingCart } from "phosphor-react";
import { ButtonQuantity } from "../../../../components/ButtonQuantity";
import { useContext, useState } from "react";
import { CartContext } from "../../../../contexts/CartProvider";

interface CoffeeProps {
    coffee: {
        id: string;
        title: string;
        description: string;
        tags: string[];
        price: number;
        image: string;

    }
}

export function ProductCard({coffee}: CoffeeProps) {

    const [quantity, setQuantity] = useState(1)

    const {addItem} = useContext(CartContext)

    function handleAddItem() {
        addItem({id: coffee.id, quantity})
        setQuantity(1)
    }

    function incrementQuantity() {
        setQuantity((state: number) => state + 1)
    }

    
    function decrementQuantity() {
        if(quantity == 1) {  
            return
        }
        setQuantity((state: number) => state - 1)
    }

    return (
        <CardContainer>
            <Image src={coffee.image}/>

            <div>
                {
                    coffee.tags.map((tag)=> (
                        <Tag>{tag.toUpperCase()}</Tag>

                    ))
                }

            </div>
            <Title>{coffee.title}</Title>
            <Subtitle>{coffee.description}</Subtitle>
            <FooterCard>
                <PriceFooter>
                    R$
                    <span>{coffee.price.toFixed(2)}</span>
                </PriceFooter>
                <ButtonQuantity quantity={quantity} incrementQuantity={incrementQuantity} decrementQuantity={decrementQuantity}/>

                <AddToCart onClick={handleAddItem}>
                    <ShoppingCart size={22} fill="#fff" weight="fill"/>
                </AddToCart>
            </FooterCard>

        </CardContainer>
    )
}