import { Helmet } from "react-helmet-async";
import PaymentHistoryRow from "./PaymentHistoryRow";
import usePayment from "../../../../Hooks/usePayment";


const PaymentHistory = () => {
    const [payment,paymentloading,refetch] = usePayment()
    return (
        <>
        <Helmet>
          <title>Payment History | KnockOut</title>
        </Helmet>
        <h2 className="text-3xl text-center font-bold mb-5">Payment History</h2>
          <div className="container mx-auto">
          <div className="overflow-x-auto w-full">
            <table className="table table-zebra w-full">
              <thead>
                <tr className="text-center font-bold text-black text-sm">
                  <th>SL.</th>
                  <th>Class Name</th>
                  <th>Email</th>
                  <th>Price</th>
                  <th>Date</th>
                  <th>Transaction ID</th>
                </tr>
              </thead>
              <tbody>
                {payment.map((item, idx) => (
                  <PaymentHistoryRow key={item._id} item={item} paymentloading={paymentloading} refetch={refetch} index={idx}></PaymentHistoryRow>
                ))}
              </tbody>
            </table>
          </div>
        </div>
        </>
    );
};

export default PaymentHistory;