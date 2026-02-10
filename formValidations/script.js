

const objReturn = {
    "full-name": "false","email": "false",
    "order-no": "false","product-code": "false",
    "quantity": "false","complaints-group": "false",
    "complaint-description": "false",
    "solutions-group": "false",
    "solution-description": "false",

  }

function validateForm() {
  // full name
  if (document.getElementById('full-name').validity.valid) {
    document.getElementById('full-name').style.border = "none";
    objReturn["full-name"] = true;
  } else { objReturn["full-name"] = false;document.getElementById('full-name').style.border = "2px solid red";}
  // email
   if (document.getElementById('email').validity.valid) {
    document.getElementById('email').style.border = "none";
    objReturn["email"] = true;
  } else { objReturn["email"] = false;document.getElementById('email').style.border = "2px solid red";}
  // order no
  if (document.getElementById('order-no').validity.valid) {
    document.getElementById('order-no').style.border = "none";
    objReturn["order-no"] = true;
  } else { objReturn["order-no"] = false;document.getElementById('order-no').style.border = "2px solid red";}
  // product code
   if (document.getElementById('product-code').validity.valid) {
    document.getElementById('product-code').style.border = "none";
    objReturn["product-code"] = true;
  } else { objReturn["product-code"] = false;document.getElementById('product-code').style.border = "2px solid red";}
  // quantity
   if (document.getElementById('quantity').validity.valid) {
    document.getElementById('quantity').style.border = "none";
    objReturn["quantity"] = true;
  } else { objReturn["quantity"] = false;document.getElementById('quantity').style.border = "2px solid red";}
  // complaints-group checkbox
  const checkboxes = document.querySelectorAll('input[type="checkbox"]');
  const checkedOne = Array.from(checkboxes).some(x => x.checked) ? Array.from(checkboxes).find(x => x.checked).value : null;
  if (checkedOne != null) {
    objReturn["complaints-group"] = true;
  } else {
    objReturn["complaints-group"] = false;
  }
  //  complaints description
  const complaintDes = document.getElementById("complaint-description");
  if (checkedOne == "other") {
    if (complaintDes.textContent.length > 20) {
      objReturn["complaint-description"] = true;
    } else {objReturn["complaint-description"]  = false;}
  } else {objReturn["complaint-description"] = true;}
  // solutions-group radio
  const radioBtns = document.querySelectorAll('input[type="radio"]');
  const radioOne = Array.from(radioBtns).some(x => x.checked) ? Array.from(radioBtns).find(x => x.checked).value : null;
  if (radioOne != null) {
    objReturn["solutions-group"] = true;
  } else {
    objReturn["solutions-group"] = false;
  }
  // solution-description    
  const solutionDes = document.getElementById("solution-description");
  if (radioOne == "other") {
    if (solutionDes.textContent.length > 20) {
      objReturn["solution-description"] = true;
    } else {objReturn["solution-description"] = false;}
  } else {objReturn["solution-description"] = true;}

  return objReturn;
}



document.getElementById("form").addEventListener("submit", function(event) {  
    const values = validateForm();
    event.preventDefault();
    console.log(values);
    const allValid = Object.values(values).every(value => value === true);
    if (!allValid) {
      // console.log("validation failed");
      return;
    } else {
        localStorage.setItem('formValues', JSON.stringify(values));
        window.location.href = './result.html';
    }
});