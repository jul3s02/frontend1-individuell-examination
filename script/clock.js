//      Self ticking clock
function clock(oldStatus) {
    
    oldStatus = openStatus(oldStatus)
    time()

    setTimeout(() => {
        clock(oldStatus)
    }, 1000)
}

//      clock logic

function time() {
    const now = new Date()
    updateTimeDate(timeFormat(now),dateFormat(now))
}

function updateTimeDate(time, date1) {
    const dateStatus = document.getElementById("dateStatus")
    const timeStatus = document.getElementById("timeStatus")

    timeStatus.textContent = time
    dateStatus.textContent = date1

}

function timeFormat(now) {
    const format = {
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
        hour12: false
    }

    const formatted = now.toLocaleTimeString("sv-SE", format)
    return formatted
}

function dateFormat(now) {
    const format = {
        weekday: "long",
        day: "numeric",
        month: "long"
    }

    const formatted = now.toLocaleDateString("sv-SE", format)
    return formatted
}

//      Logic for open check

function openStatus(oldStatus) {
    const newStatus = isOpen()
    if (oldStatus !== newStatus) {
            changeOpen(newStatus)
        } 
    return newStatus
    
}

function isOpen() {
    const now = new Date()
    const hour = now.getHours()
    const day = now.getDay()

    if (day === 0){
        return false
    } else if (day <= 5 && hour >= 7 && hour < 18){
        return true
    } else if (day === 6 && hour >= 9 && hour < 14){
        return true
    } else {
        return false
    }
}

function changeOpen(open) {
    const openStatus = document.getElementById("openStatus")

    if (open) {
        openStatus.parentElement.className = "statusOpen"
        openStatus.textContent = "Öppet Nu!"
    } else {
        openStatus.parentElement.className = "statusClosed"
        openStatus.textContent = "Stängt nu"
    }

}

// calling function to start 

clock()