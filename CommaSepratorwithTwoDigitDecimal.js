///////////////////////////////////////////////

  function numberWithCommas(n) {
    const parts = parseFloat(n).toFixed(2).toString().split(".");
    const numberPart = parts[0];
    const decimalPart = parts[1];
    const thousands = /\B(?=(\d{3})+(?!\d))/g;
    return numberPart.replace(thousands, ",") + (decimalPart ? "." + decimalPart : "");
  }
  
  let result = numberWithCommas(31214235324)
  console.log(result)
