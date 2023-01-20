const emojiEls = document.querySelectorAll(".emoji");
const btnEl = document.getElementById("btn");
const containerEl = document.getElementById("container");
let selectedEmoji = '';
const removeActive = ()=>{
    emojiEls.forEach((emojiEl)=>{
        emojiEl.classList.remove("active");
    })
}
const fun_call = (event)=>{
    // console.log(event.target.innerText || event.target.parentNode.innerText);
    removeActive();
    selectedEmoji  = event.target.innerText || event.target.parentNode.innerText;
    event.target.classList.add("active");
    event.target.parentNode.classList.add("active");
}
emojiEls.forEach((emojiEl)=>{
    emojiEl.addEventListener("click",fun_call);
})

btnEl.addEventListener("click",()=>{
    if(selectedEmoji !==''){
        containerEl.innerHTML = `
        <strong>Thank You!</strong>
        <br>
        <br>
        <strong>Feedback:${selectedEmoji}</strong>
        <p>We'll use your feedback to improve our customer support. </p>
        `
    }

})

