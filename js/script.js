// provide the validation code here
function submitContact(event) {
    let contact = {
      firstName: event.target[0].value,
      lastname: event.target[1].value,
      email: event.target[2].value,
      homeNo: event.target[3].value,
      contactAddedOn: event.target[6].value,
    };
    if(validateNameFirst(contact.firstName)==true&&validateNameLast(contact.lastname)==true&&validateEmail(contact.email)==true&&validatePhoneNumberWork(contact.homeNo)==true&&validateBirthDate(contact.contactAddedOn)){
      persistSubmittedContact(contact);
  }
  else
  alert("Error in From");
  }
  document.getElementById("btn").addEventListener("click", () => {
    showPersistedData()
      .then((response) => {
        let contacts = JSON.parse(response);
        contacts.forEach((contact) => {
          let li = document.createElement("li");
          li.appendChild(
            document.createTextNode(`${contact.firstName} ${contact.lastname}`)
          );
          document.getElementById("contact-list").appendChild(li);
        });
      })
      .catch((error) => {
        console.error(error);
      });
  });
  
  function validateNameFirst(name){
    let regex = /^[a-zA-Z ]{2,30}$/;
    if(!regex.test(name)){
        document.getElementById('firstNameError').innerHTML="Error in First Name";
        return false;
    }else{
    //document.getElementById('firstNameError').innerHTML="";
    return true;
    }
  }
  
  function validateNameLast(name){
    let regex = /^[a-zA-Z ]{2,30}$/;
    if(!regex.test(name)){
        document.getElementById('lastNameError').innerHTML="Error in Last Name";
        return false;
    }else{
    //document.getElementById('lastNameError').innerHTML="";
    return true;
    }
  }
  
  function validatePhoneNumberHome(number){
    const regex = /^\+?\d.\s?\(?\d{3}\)?[-.\s]?\d{3}[-.\s]?\d{4}?/; 
    if(!regex.test(number)){
        document.getElementById('homeNoError').innerHTML="Error in Home Phone Number";
        return false;
    }else{
    //document.getElementById('homeNoError').innerHTML="";
    return true;
    }
  }
  
  function validatePhoneNumberWork(number){
    const regex = /^\+?\d.\s?\(?\d{3}\)?[-.\s]?\d{3}[-.\s]?\d{4}?/; 
    if(!regex.test(number)){
        document.getElementById('workNoError').innerHTML="Error in Work Phone Number";
        return false;
    }else{
    //document.getElementById('workNoError').innerHTML="";
    return true;
    }
  }
  
  function validateEmail(email){
    let regex=/^\w+([\.-]?\w+)@\w+([\.-]?\w+)(\.\w{2,3})+$/;
    if(!regex.test(email)){
      document.getElementById('emailError').innerHTML="Error in Email";
      return false;
    }else{
      // document.getElementById('emailError').innerHTML="";
      return true;
    }
  }
  
  function validateBirthDate(birthDate){
    let birthDateError = '';
    if (isFieldBlank(birthDate))
    {
        document.getElementById('birthDateError').innerHTML="Birth Date cannot be left blank";
        return false;
    }
    else{
       // document.getElementById('birthDateError').innerHTML="";
        return true;
    }
  }
  const isFieldBlank = (value) => {
    return value === '' || value === undefined || value === null;
  }
