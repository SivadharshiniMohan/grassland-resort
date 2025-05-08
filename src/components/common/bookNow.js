
export const initiateUpiPayment = (amount) => {

  const upiUrl = `upi://pay?pa="s48@okhdfcbank"&pn="Sini"&am=${amount}&cu=INR`;

  window.location.href = upiUrl;
};


