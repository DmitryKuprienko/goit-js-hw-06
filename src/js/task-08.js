const formRef=document.querySelector(".login-form")
// console.log("консоль форми" ,formRef)

formRef.addEventListener("submit",hendleFormRefSubmit)

function hendleFormRefSubmit(event){
     event.preventDefault()
    const {email, password} = event.currentTarget.elements
    if (email.value ==="" || password.value ==="" ) {
       return alert("Помилка ! Поле Email або Password не заповненні!");
    
    } else {
        const formData = new FormData(event.currentTarget)
        console.log(formData)
        formData.forEach( (value,name) => {
          
            return console.log({name,value})
            })
            
            // const enteredData ={email: email.value, password: password.value,}
            // console.log(enteredData)
        }

     event.currentTarget.reset()
}


 
    //  console.log(event.currentTarget.elements.email.value)
    //  console.dir(event.currentTarget)
    // console.log("відбравка без презагрузки сторінки", )




