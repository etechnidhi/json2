$(document).ready(function(){
    var object;
        object = {"employees":[    
            {"firstname":"Nidhi", "lastname":"Sharma", "dob":"19-08-1994"},    
            {"firstname":"Shweta", "lastname":"Sharma", "dob":"17-07-1996"},  
            {"firstname":"Ruchi", "lastname":"Gautama", "dob":"25-12-1995"},    
            {"firstname":"Manish", "lastname":"Joy", "dob":"--/--/1990"}   
        ]} ;
    var firstname, lastname, dob, data;
        for (var i = 0; i < object.employees.length; i++) {
            firstname = object.employees[i].firstname;
            lastname = object.employees[i].lastname;
            dob = object.employees[i].dob;
            data = "<tr><td>" + (i + 1) + "</td><td>" + firstname + "</td><td>" + lastname + "</td><td>" + dob + "</td>";
            $("#demo").append(data);
        }
   
});
