const formRef=document.querySelector(".login-form")
// console.log("консоль форми" ,formRef)

formRef.addEventListener("submit",hendleFormRefSubmit)

function hendleFormRefSubmit(event){
     event.preventDefault()
     
    const {elements: {email, password}} = event.currentTarget;

    if (email.value ==="" || password.value ==="" ) {
       return alert("Помилка ! Поле Email або Password не заповненні!");
    
    } else {
        const formData = {email:email.value,
        password: password.value}
        console.log(formData)
        
        }

     event.currentTarget.reset()
}


 
    //  console.log(event.currentTarget.elements.email.value)
    //  console.dir(event.currentTarget)
    // console.log("відбравка без презагрузки сторінки", )




