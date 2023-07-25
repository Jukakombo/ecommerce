import { useState } from "react";
import { PayPalButton } from "react-paypal-button-v2";
import { Link } from "react-router-dom";

function PayPal() {
  const [paymentDone, setPaymentDone] = useState(false);
  return (
    <>
      {paymentDone ? (
        <div className="py-8 rounded bg-blue-50 font-bold text-center text-xl text-green-500 p-4">
          Congratulation! Payment done
          <h1 className="text-center text-lg text-[#008eCC]">
            Thank you for purchasing our phone we promised to deliver your
            Product within 4-10 working days 💕🎁
          </h1>
          <Link to="/">
            <button className="text-white p-4 rounded font-bold text-xl bg-[#008eCC]">
              Exit
            </button>
          </Link>
        </div>
      ) : (
        <PayPalButton
          amount="5"
          clientId="sb"
          // shippingPreference="NO_SHIPPING" // default is "GET_FROM_FILE"
          onSuccess={(details, data) => {
            alert("Transaction completed by " + details.payer.name.given_name);
            setPaymentDone(true);
            // OPTIONAL: Call your server to save the transaction
            return fetch("/paypal-transaction-complete", {
              method: "post",
              body: JSON.stringify({
                orderID: data.orderID,
              }),
            });
          }}
          // options={{
          //   clientId: "PRODUCTION_CLIENT_ID",
          // }}
        />
      )}
    </>
  );
}

export default PayPal;
