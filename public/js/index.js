const $form = document.getElementsByClassName("form-container");
console.log($form);

$form[0].addEventListener("submit", (e) => {
  e.preventDefault();
  // fetch('./contact').then((e)=>{
  //  return e.json()
  // }).then(e=>console.log(e))
  console.log($form[0].childNodes);
  const description = $form[0].childNodes[1].childNodes[1].value;
  const business = $form[0].childNodes[3].childNodes[1].value;
  const contact = $form[0].childNodes[5].childNodes[1].value;
  const email = $form[0].childNodes[7].childNodes[1].value;
  const telephone = $form[0].childNodes[7].childNodes[3].value;
  const country = $form[0].childNodes[9].childNodes[1].value;
  const zip = $form[0].childNodes[9].childNodes[3].value;
  const serviceType = $form[0].childNodes[11].childNodes[1].value;
  const comments = $form[0].childNodes[13].childNodes[1].value;
  const message = document.createElement("p");
  const data = {
    description,
    business,
    contact,
    email,
    telephone,
    country,
    zip,
    serviceType,
    comments,
  };
  let error = false;
  if (
    !description ||
    !business ||
    !contact ||
    !email ||
    !telephone ||
    !country ||
    !zip ||
    !serviceType ||
    !comments
  ) {
    error = true;
    console.log("rellene");
    message.innerHTML = "Rellene Los datos";
    console.log($form[0].childNodes)
    // !$form[0].childNodes[13] && error && $form[0].appendChild(message);
    $form[0].childNodes[19].innerHTML = ""
    $form[0].childNodes[19].appendChild(message)
  }

  !error &&
    fetch("./contact", {
      method: "POST", // or 'PUT'
      body: JSON.stringify(data), // data can be `string` or {object}!
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((response) => {
        $form[0].childNodes[1].childNodes[1].value = "";
        $form[0].childNodes[3].childNodes[1].value = "";
        $form[0].childNodes[5].childNodes[1].value = "";
        $form[0].childNodes[7].childNodes[1].value = "";
        $form[0].childNodes[7].childNodes[3].value = "";
        $form[0].childNodes[9].childNodes[1].value = "";
        $form[0].childNodes[9].childNodes[3].value = "";
        $form[0].childNodes[11].childNodes[1].value = "";
        $form[0].childNodes[13].childNodes[1].value = "";
        console.log("Success:", response);
        message.innerHTML;
        response && $form[0].appendChild(message);
      })
      .catch((error) => {
        console.error("Error:", error);
        message.innerHTML = "Rellene Los datos";
        error && $form[0].appendChild(message);
      });
});
