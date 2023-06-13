import { loadStripe } from "@stripe/stripe-js";
import Checkout from "./Checkout";
import { Elements } from "@stripe/react-stripe-js";
import useSelectedClass from "../../../../Hooks/useSelectedClass";
import { useParams } from "react-router-dom";



const stripePromise = loadStripe(import.meta.env.VITE_Payment_Gateway_PK);
const Payment = () => {
    const { id } = useParams();
    const [selectedClass] = useSelectedClass() 
    const total = selectedClass?.reduce((sum, item) => sum + item.price, 0)
    const price = parseFloat(total?.toFixed(2))
    const filter = selectedClass.find(item => item.ClassId === id)
    
    return (

        <div>
            <h2 className="text-3xl text-center font-bold">Payment | Total Price: <span className="text-red-500">${filter.price}</span></h2>
            <Elements stripe={stripePromise}>
                <Checkout filter={filter} id={id} price={price}></Checkout>
            </Elements>
        </div>
    );
};

export default Payment;