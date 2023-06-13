import { loadStripe } from "@stripe/stripe-js";
import Checkout from "./Checkout";
import { Elements } from "@stripe/react-stripe-js";
import useSelectedClass from "../../../../Hooks/useSelectedClass";
import { useParams } from "react-router-dom";



const stripePromise = loadStripe(import.meta.env.VITE_Payment_Gateway_PK);
const Payment = () => {
    const { ClassID } = useParams();
    const [selectedClass] = useSelectedClass() 
    const total = selectedClass?.reduce((sum, item) => sum + item.price, 0);
    const price = parseFloat(total?.toFixed(2))
    return (
        <div>
            <h2 className="text-3xl text-center">Payment</h2>
            <Elements stripe={stripePromise}>
                <Checkout selectedClass={selectedClass} ClassID={ClassID} price={price}></Checkout>
            </Elements>
        </div>
    );
};

export default Payment;