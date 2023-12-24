const cycleSearchbar = (e, inputId, buttonId) => {
    const input = document.getElementById(inputId)
    const button = document.getElementById(buttonId)
    if (input.getAttribute("disabled")) {
        input.removeAttribute("disabled")
        button.removeAttribute("disabled")
        e.innerText = "Style: None"
    }
    else {
        input.setAttribute("disabled", true)
        button.setAttribute("disabled", true)
        e.innerText = "Style: Disabled"
    }
}
const cycleForm = (e, ids = []) => {
    if (document.getElementById(ids[0]).getAttribute("disabled")) {
        ids.forEach((id) => {
            document.getElementById(id).removeAttribute("disabled")
        })
        e.innerText = "Style: None"
    }
    else {
        ids.forEach((id) => {
            document.getElementById(id).setAttribute("disabled", true)
        })
        e.innerText = "Style: Disabled"
    }
}
const cycleButtons = (e, ids = []) => {
    if (document.getElementById(ids[0]).getAttribute("disabled")) {
        ids.forEach((id) => {
            document.getElementById(id).removeAttribute("disabled")
        })
        e.innerText = "Style: None"
    }
    else {
        ids.forEach((id) => {
            document.getElementById(id).setAttribute("disabled", true)
        })
        e.innerText = "Style: Disabled"
    }
}