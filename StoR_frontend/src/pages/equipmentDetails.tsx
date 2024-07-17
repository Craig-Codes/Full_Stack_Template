import { useParams } from "react-router-dom"

export const EquipmentDetailsPage = () => {
    const {id} = useParams()
    console.log('test')
    return (
    <h2>Hi, I am a Equipment Details Page! {id}</h2>
    )
  }
