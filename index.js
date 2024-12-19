// Write your solution in this file!
const employee = {
    name: "John Doe",
    streetAddress: "123 Main St"
  };
  
 
  
function updateEmployeeWithKeyAndValue (employee){
    employee = {};
    employee.name = 'Sam';
    employee.streetAddress= "11 Broadway"

    return employee

}

function destructivelyUpdateEmployeeWithKeyAndValue(employee) {
    employee['streetAddress'] ="12 Broadway";
    return employee;

    
}


function deleteFromEmployeeByKey(employee) {
   
    const newEmployee = {  name: 'joe', streetAddress: '12 Broadway' };
    delete newEmployee['name']
    return newEmployee
    
}

// Destructive delete function
function destructivelyDeleteFromEmployeeByKey(employee, key) {
    delete employee[key]; 
    return employee;  
}

