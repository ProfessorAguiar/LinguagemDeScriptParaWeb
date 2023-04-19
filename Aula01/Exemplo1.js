const form=document.querySelector('form')
form.addEventListener('submit',(e)=>{
    e.preventDefault()
    const pessoa={
        nome:form.nome.value,
        email:form.email.value,
        idade:Number(form.idade.value) 
    }
    // const nome=form.nome.value
    // const email=form.email.value
    // const idade=Number(form.idade.value)
    console.log(pessoa.nome)
    const resp=document.createElement('p')
    document.querySelector('body').append(resp)
    resp.innerHTML=`nome: ${pessoa.nome}<br>
    email: ${pessoa.email}<br>
    Idade: ${pessoa.idade}`
}) 