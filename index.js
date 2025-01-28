const inp = document.getElementById("ip");
const resultDiv = document.getElementById("result");


function revStr(str){
  return str.split("").reverse().join("");

}

function check() {
  const value = inp.value.trim(); 
  const rev = revStr(value);

  if (value === "") {
    resultDiv.textContent = "Please enter a value.";
    resultDiv.style.color = "rgb(209, 31, 46)";
    return;
  }

  if (value === rev) {
    resultDiv.textContent = "Palindrome";
    resultDiv.style.color = " rgb(51, 255, 51)";
  } else {
    resultDiv.textContent = "Not a Palindrome";
    resultDiv.style.color = "rgb(209, 31, 31)";
  }

  inp.value = "";
}
