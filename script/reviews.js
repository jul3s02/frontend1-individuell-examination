// defining variables
const reviews = [
    {
        id: 0,
        grade: 5,
        reviewBy: "Sara med hunden Ludde",
        reviewText: "Helt fantastiskt ställe! Ludde är alltid överlycklig när vi svänger in på parkeringen."
    },
    {
        id: 1,
        grade: 4,
        reviewBy: "Marcus",
        reviewText: "Professionell och trygg personal. Det stora inhägnade utomhusområdet är guld värt för energiska hundar."
    },
    {
        id: 2,
        grade: 4,
        reviewBy: "Elin",
        reviewText: "Jättenöjd med hunddagiset. Skönt att veta att hunden har det så bra medan man är på jobbet."
    },
    {
        id: 3,
        grade: 5,
        reviewBy: "Jonas och Pernilla",
        reviewText: "Vi hade våran hund på pensionat över helgen och allt flöt på hur smidigt som helst. Rekommenderas varmt!"
    },
    {
        id: 4,
        grade: 5,
        reviewBy: "Hanna",
        reviewText: "Väldigt trevligt bemötande och hunden somnar alltid gott direkt när vi kommer hem."
    }
]

const reviewContainer = document.getElementById("reviewContainer")
const switchReview = document.getElementById("switchReview")


//functions

function getReview() {
    const randomChecked = checkRandom()
    const chosenReview = reviews.find(review => review.id === randomChecked)
    displayReview(chosenReview)
}

function checkRandom() {
    const random = Math.floor(Math.random() * 5)

    const currentReview = document.querySelector(".review")
    if (!currentReview) {
        return random 
    } else if (random !== Number(currentReview.id)) {
        return random
    }else {
        return checkRandom()
    }
}

function displayReview(chosenReview) {
    reviewContainer.innerHTML = ""
    
    const currentReview = document.createElement("div")
    currentReview.classList.add("review")
    currentReview.id = chosenReview.id
    
    currentReview.append (reviewGrade(chosenReview), reviewText(chosenReview), reviewBy(chosenReview))
    reviewContainer.append (currentReview)
}

function reviewGrade(chosenReview) {
    const reviewGrade = document.createElement("div")
    reviewGrade.classList.add("reviewGrade")
    for (let i = 0; i < Number(chosenReview.grade); i++){
        const star = document.createElement("img")
        star.src = "images/star.png"
        star.classList.add("gradeStar")

        reviewGrade.appendChild(star)
    }
    const notGrade = 5 - Number(chosenReview.grade)
    for (let i = 0; i < notGrade; i++){
        const star = document.createElement("img")
        star.src = "images/notStar.png"
        star.classList.add("gradeStar")

        reviewGrade.appendChild(star)
    }

    return reviewGrade
}

function reviewText(chosenReview) {
    const reviewText = document.createElement("p")
    reviewText.classList.add("reviewText")

    reviewText.textContent = chosenReview.reviewText

    return reviewText
}

function reviewBy(chosenReview) {
    const reviewBy = document.createElement("p")
    reviewBy.classList.add("reviewBy")

    reviewBy.textContent = chosenReview.reviewBy

    return reviewBy
}

// Event Listnerners

switchReview.addEventListener("click", (e) =>{
    getReview()
})

// run functions to start

getReview()
