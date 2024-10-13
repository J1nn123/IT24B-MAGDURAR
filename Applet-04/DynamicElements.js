
$('#search-input').on('keyup', function(){
    var value = $(this).val()
    console.log ('Value:', value)
    var data = searchTable(value, myArray)
    buildTable(data)
    })
    
    buildTable(myArray)
    
    function searchTable(value, data){
    var filteredData=[]
    for (var i = 0; i<data.length ; i++){
      value =value.toLowerCase()
    var name =data[i].name.toLowerCase();
    
      if (name.includes(value)){
    filteredData.push(data[i])
    
      }
    }
    return filteredData
    }
    
    
       
     
        
    function buildTable(data){
        var table = document.getElementById('Table')
        table.innerHTML = ''
        for (var i = 0; i < data.length; i++){
            
            var row = `<tr>
                            <td>${data[i].name}</td>
                            <td>${data[i].age}</td>
                            <td>${data[i].birthdate}</td>
                       </tr>`
            table.innerHTML += row
        }
    }
    document.getElementById("Dynamic");