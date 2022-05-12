import { getEmployees, getOrders } from "./database.js"

const employees = getEmployees()
const orders = getOrders()

const employeeOrders = (employee) => {
    let numOfOrders = 0

    for (const order of orders) {
        if (order.employeeId === employee.id) {
            numOfOrders += 1
        }
    }
    return numOfOrders
}


export const Employees = () => {
    let html = "<ul>"
    
    for (const employee of employees) {
        html += `<li id="employee--${employee.id}">${employee.name}</li>`
    }
    
    html += "</ul>"
    
    return html
}

document.addEventListener(
    "click",
        (clickEvent) => {
            const itemClicked = clickEvent.target
            if (itemClicked.id.startsWith("employee")) {
                const [,employeeId] = itemClicked.id.split("--")
            
                for (const employee of employees) {
                    if (employee.id === parseInt(employeeId)) {

                        let totalOrders = employeeOrders(employee)
                        if (totalOrders < 2) {
                        window.alert(`${employee.name} sold ${totalOrders} product!`)
                    }
                    else {
                        window.alert(`${employee.name} sold ${totalOrders} products!`)
                    }
                }
            }           
        }
    }
)
// Add click event
// 