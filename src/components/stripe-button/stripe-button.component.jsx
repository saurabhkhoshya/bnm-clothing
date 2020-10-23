import React from 'react';
import StripeCheckout from 'react-stripe-checkout';

const StripeCheckoutButton = ({ price }) => {
    const priceForStripe = price * 100;
    const publishableKey = "pk_test_51HfTK8D7HRoOlt5E12pUyqepugXCrlZfJlyiG9pEPcFD9HKeR5sAaxInTpvyhSzPfXrm9YL8itFZZR7uhFmih2EG00uWRnsvuM";

    const onToken = token => {
        console.log(token);
        alert("Payment Sucessfull");
    }
    return (
       <StripeCheckout
            label="Pay Now"
            name= "BNM Clothing Ltd."
            billingAddress
            shippingAddress
            image='https://svgshare.com/i/CUz.svg'
            description={`Your total value is $${price}`}
            amount={priceForStripe}
            panelLabel="Pay Now"
            token={onToken}
            stripeKey={publishableKey}
       />
    );
};

export default StripeCheckoutButton;