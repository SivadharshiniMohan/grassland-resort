
export const initiateUpiPayment = (amount) => {
    const upiId = "63932317@upi"; // UPI ID from the image
    const name = "Greenlane Hotels and Resorts Pvt Ltd"; // Merchant name
    const currency = "INR";

    // Create the UPI URL
    const upiUrl = `upi://pay?pa=${upiId}&pn=${name}&am=${amount}&cu=${currency}`;
    window.location.href = upiUrl; // This will open the UPI payment screen
};


