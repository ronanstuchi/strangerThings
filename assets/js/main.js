import { subscriptionToHellfireClub } from './firebase/hellfire-clube.js'

const txtName = document.getElementById('txtName') 
const txtEmail = document.getElementById("txtEmail")
const txtLevel = document.getElementById("txtLevel")
const txtCharacter = document.getElementById("txtCharacter")

const btnSubscribe = document.getElementById("btnSubscribe")

btnSubscribe.addEventListener('click',async () => {
    const subscription = {
        name: txtName.value,
        email: txtEmail.value,
        level: txtLevel.value,
        Character: txtCharacter.value,
    }

    const subscriptionId = await subscriptionToHellfireClub(subscription)
     /* console.log(`Inscrito com Sucesso: ${subscriptionId }`) */

    txtName.value =''
    txtEmail.value =''
    txtLevel.value =''
    txtCharacter.value =''

    alert(`Inscrito com Sucesso: ${subscriptionId }`)
})