
export default function ProductDetails({params}:{params:{productid:string}}) {
    return (
      <h1>
        Product Details {params.productid}
      </h1>
    )
  }