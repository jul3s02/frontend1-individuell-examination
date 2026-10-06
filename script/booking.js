// ----- defing var
const bookingForm = document.getElementById("bookingForm")
const bookingList = document.getElementById("bookingList")
const listSort = document.getElementById("listSorting")
const noBookings = document.getElementById("noBookingId")
const viewBooked = document.getElementById("viewBooked")

let allBookings = []
let oldSort = ""
let order = true


//classes

class Booking {
    constructor(customName, dogName, service, bookDate) {
        this.customName = customName
        this.dogName = dogName
        this.service = service
        this.bookDate = bookDate
        this.id = Date.now()
    }    

    createLi() {
        const li =document.createElement("li")
        li.id = this.id
        li.className = "listBookings listCommon"
        li.innerHTML =
            `
            <p>${this.customName}</p>
            <p>${this.dogName}</p>
            <p>${this.service}</p>
            <p>${this.bookDate}</p>
            <button class="deleteListing">delete</button>
            `;

        const deleteListing = li.querySelector(".deleteListing")
        deleteListing.addEventListener("click", () => {
            deleteBooking(this.id) 
        })

        return li
    }
}


//functions

function loop() {
    bookingList.innerHTML = ""
    allBookings.forEach(element => {
        bookingList.appendChild(element.createLi())
    });
    noBook()
}

function deleteBooking(deleteId) {
    allBookings = allBookings.filter(Booking => Booking.id !== deleteId)
    loop()
}

function sortIndi(chosenSort) {
    const buttons = listSort.querySelectorAll("button")

    buttons.forEach(button => {
        button.classList.remove("active-sort")
        button.textContent = button.textContent.replace(" ↑","").replace(" ↓", "")
    })
    chosenSort.classList.add("active-sort")
    chosenSort.textContent += order ? " ↑" : " ↓"

}

function checkSort(newSort) {
    if (oldSort === newSort){
        order = !order
    }else {
        oldSort = newSort
        order = true
    }
}

function noBook(){
    if (allBookings != "") {
        noBookings.classList.add("hideNoBook")
        viewBooked.classList.remove("hideNoBook")

    } else{
        noBookings.classList.remove("hideNoBook")
        viewBooked.classList.add("hideNoBook")
    }
}

//event listener

bookingForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const customerName = document.getElementById("customerName").value.trim()
    const dogName = document.getElementById("dogName").value.trim()
    const service = document.getElementById("service").value
    const bookDate = document.getElementById("bookDate").value

    if (!customerName || !dogName || !service || !bookDate) {
        console.log("nej de fel, den ska inte va fel")
        //fix error to html
    } else {
    const newBooking = new Booking(customerName, dogName, service, bookDate)
    allBookings.push(newBooking)
    loop()
    }

})


listSort.addEventListener("click", (e) => {
    if (e.target.tagName !== "BUTTON") return;
    const sort = e.target.id

    if (!sort) return

    checkSort(sort)

    allBookings.sort((a, b) => {
        const result = a[sort].localeCompare(b[sort]);
        return order ? result : -result;
    });

    sortIndi(e.target)

    loop()

})

