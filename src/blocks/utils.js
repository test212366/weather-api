//many items append
export function customAppendChild(array, item) {
    array.forEach(element => {
        item.appendChild(element)
    })
}
//create item
export function createElement(tag, classItem, text = '') {
    const item = document.createElement(tag)
    item.classList.add(classItem)
    item.textContent = text
    return item
}