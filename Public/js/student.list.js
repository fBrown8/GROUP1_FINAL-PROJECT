fetch ("https://teacher-evaluation-system.herokuapp.com/api/students").then((data) => {
    //console.log(data);
    return data.json(); //converted to object
}).then((objectData) => {
    let tableData="";
    objectData.map((values) => {
        tableData+=`<tr>
        <td>${values.Student_Number}</td>
        <td>${values.Last_Name}</td>
        <td>${values.First_Name}</td>
        <td>${values.Grade_Level}</td>
        <td class="buttons">
            <span class="btn-row-edit">Edit</span>
            <span class="btn-row-delete">Delete</span>
        </td>	
      </tr>`;
    });
    document.getElementById("table_body").innerHTML=tableData;
}).catch((err)=>{
    console.log(err);
})  


