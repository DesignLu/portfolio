/* FAQS*/

const faqs = document.querySelectorAll(".faq");

faqs.forEach(faq => {
    faq.addEventListener("click", () => {
        faq.classList.toggle("active");
    });
});


/*PORTFOLIO*/


const portfolio = document.querySelectorAll(".faqr");

portfolio.forEach(faqr => {
    faqr.addEventListener("click", () => {
        faqr.classList.toggle("active");
    });
});




/*CONTACT FORM*/

const fname = document.getElementById('fname');
const email = document.getElementById('email');
const tel = document.getElementById('tel');
const message = document.getElementById('message');

const submit = document.getElementById('submit');

submit.addEventListener('submit',(e)=>{
    e.preventDefault();
    let econtact_container = `
    <h1>Name: </h1>${fname.value}
    <br>
    <h1>Email: </h1>${email.value}
    <br>
    <h1>Telephone: </h1>${tel.value}
    <br>
    <h1>Message: </h1>${message.value}
    `;

    Email.send({
        SecureToken : "a844a124-87c6-4409-88f4-39cdb792e3ec", //add your token here
        To : 'lucianabusiness4@gmail.com', 
        From : "lucianabusiness4@gmail.com",
        Subject : "This is the subject",
        Body : econtact_container
    }).then(
      message => alert(message)
    );
});





