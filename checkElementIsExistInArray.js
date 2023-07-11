const employees = [
    { name: "Alice", title: "Manager", department: "Marketing" },
    { name: "Bob", title: "Developer", department: "Engineering" },
    { name: "Charlie", title: "Manager", department: "Marketing" },
    { name: "Dave", title: "Designer", department: "Design" },
];




for(let i=0; i<employees.length;i++){
      if(employees.indexOf(employees[i]) !==-1){    // condition for exist element in array
        console.log('Items Found In Array')
    }else{
        console.log('Items Not Found In Array')
    }
     console.log(employees[0])                       // get array first Element
     console.log(employees[employees.length-1])     // get array last Element
     break;
}
