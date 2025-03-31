import { Metadata } from "next";

type Props = {
  params: {
    productid: string;
  };
};
export const generateMetadata = ({params}:Props):Metadata=>{
  return {
    title :`Product ${params.productid}`
  }
}



export default function ProductDetails({ params }: Props) {
  return (
    <h1>
      Product Details {params.productid}
    </h1>
  )
}