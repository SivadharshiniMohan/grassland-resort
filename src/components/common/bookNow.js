
export const initiateUpiPayment = (amount) => {
  const upiUrl = `upi://pay?pa="sivadharshini9948@okhdfcbank"&pn="Siva Dharshini"&am=${amount}&cu=INR`;

  window.location.href = upiUrl;
};


