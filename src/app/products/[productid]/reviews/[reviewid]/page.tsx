export default function ReviewDetails({params}:{params:{reviewid:string,productid:string}}) {
    return (
      <h1>
        Review Details for product {params.productid} is {params.reviewid}
      </h1>
    )
  }