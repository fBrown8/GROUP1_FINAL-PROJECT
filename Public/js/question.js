fetch ("https://teacher-evaluation-system.herokuapp.com/api/questions").then((data) => {
    //console.log(data);
    return data.json(); //converted to object
}).then((objectData) => {
    console.log(objectData[0].Student_Number);
    let tableData="";
    objectData.map((values) => {
        tableData+=`<tr>
        <td>${values.category}</td>
        <td>${values.question}</td>
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