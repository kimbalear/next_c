import react from "react";
import { useRouter } from "next/router";

const ProductItem = () => {
    const {
        query: {productId},
    } = useRouter();

    return (
        <div>Esta es la página de productos: {productId}</div>
    )
}
export default ProductItem