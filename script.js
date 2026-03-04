// add javascript here
document.getElementById("correctAnswer1")?.addEventListener("click", () => {
    const answer = document.getElementById("correctAnswerEx1");
    answer.classList.toggle("hidden");
});

document.getElementById("correctAnswer2")?.addEventListener("click", () => {
    const answer = document.getElementById("correctAnswerEx2");
    answer.classList.toggle("hidden");
});

document.getElementById("correctAnswer3")?.addEventListener("click", () => {
    const answer = document.getElementById("correctAnswerEx3");
    answer.classList.toggle("hidden");
});

document.getElementById("incorrectAnswer1")?.addEventListener("click", () => {
    const answer = document.getElementById("incorrectAnswerEx1");
    answer.classList.toggle("hidden");
});

document.getElementById("incorrectAnswer2")?.addEventListener("click", () => {
    const answer = document.getElementById("incorrectAnswerEx2");
    answer.classList.toggle("hidden");
});

document.getElementById("incorrectAnswer3")?.addEventListener("click", () => {
    const answer = document.getElementById("incorrectAnswerEx3");
    answer.classList.toggle("hidden");
});

document.getElementById("incorrectAnswer4")?.addEventListener("click", () => {
    const answer = document.getElementById("incorrectAnswerEx4");
    answer.classList.toggle("hidden");
});

document.getElementById("incorrectAnswer5")?.addEventListener("click", () => {
    const answer = document.getElementById("incorrectAnswerEx5");
    answer.classList.toggle("hidden");
});

document.getElementById("incorrectAnswer6")?.addEventListener("click", () => {
    const answer = document.getElementById("incorrectAnswerEx6");
    answer.classList.toggle("hidden");
});

document.getElementById("incorrectAnswer7")?.addEventListener("click", () => {
    const answer = document.getElementById("incorrectAnswerEx7");
    answer.classList.toggle("hidden");
});

document.getElementById("incorrectAnswer8")?.addEventListener("click", () => {
    const answer = document.getElementById("incorrectAnswerEx8");
    answer.classList.toggle("hidden");
});

document.getElementById("incorrectAnswer9")?.addEventListener("click", () => {
    const answer = document.getElementById("incorrectAnswerEx9");
    answer.classList.toggle("hidden");
});




const locationSubmit = document.getElementById("locationFinder");
const locationInsert = document.getElementById("locationInput");
const chat = document.getElementById("whatBirdYouHave");

locationSubmit.addEventListener("click", () => {
    const reply = document.createElement("h4");
    if(locationInsert.value.includes("North")){
        reply.textContent = "Then there may be a California Condor in your backyard!"
    }else if(locationInsert.value.includes("South")){
        reply.textContent = "Then there may be an Anna's Hummingbird in your backyard!"
    }else if(locationInsert.value.includes("West")){
        reply.textContent = "Then there may be a Black Phoebe in your backyard!"
    }else if(locationInsert.value.includes("Central")){
        reply.textContent = "Then there may be an Acorn Woodpecker in your backyard!"
    }else if(locationInsert.value.includes("East")){
        reply.textContent = "Then there may be a Greater Sage-Grouse in your backyard!" 
    }else{
        reply.textContent = "I'm sorry... I can't seem to find your bird" 
    }
    chat.appendChild(reply)
})