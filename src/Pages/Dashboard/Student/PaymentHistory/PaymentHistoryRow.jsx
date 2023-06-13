
const PaymentHistoryRow = ({ item, index }) => {
    const {
        ClassName,
        email,
        transactionId,
        price,
        date,

      } = item;
    return (
        <tr className="text-center">
        <th>{index + 1}</th>
        <td>{ClassName}</td>
        <td>{email}</td>
        <td>{price}</td>
        <td>{date}</td>
        <td>
          <button className="btn btn-outline btn-success text-white w-full font-bold">
          {transactionId}
          </button>
        </td>
      </tr>
    );
};

export default PaymentHistoryRow;