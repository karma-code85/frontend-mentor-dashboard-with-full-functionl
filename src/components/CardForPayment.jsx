export default function CardFroPayment(){
  const cardImages=["maestro.png", "paypal.png","visa.png","amex.png", "mastercardVisas.png", "gpay.png"]
  return(
    <div className="bg-gray-200 rounded-lg p-4 flex flex-wrap gap-2 justify-center">
      {cardImages.map((img)=>(
        <div>
          <img src={`/images/${img}`} alt=""  className="size-[4rem] "/>
        </div>
      ))}

    </div>
  )
}