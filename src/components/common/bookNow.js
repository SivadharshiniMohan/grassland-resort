
export const initiateUpiPayment = (amount) => {
    const upiUrl = `upi://pay?pa="8056750121@pthdfc"&pn="Sivadharshini M"&am=${amount}&cu=INR`;
   window.location.href = upiUrl;
};


