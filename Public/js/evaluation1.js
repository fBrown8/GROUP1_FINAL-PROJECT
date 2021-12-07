fetch ("http://localhost:3000/api/questions").then((data) => {
    //console.log(data);
    return data.json(); //converted to object
}).then((objectData) => {
    console.log(objectData[0].Student_Number);
    let tableData="";
    objectData.map((values) => {
        tableData+= `<tr>
        <td class="first-col">${values.question}</td>
        <td><input type="radio" value="None" name="useful" required/></td>
        <td><input type="radio" value="None" name="useful" required/></td>
        <td><input type="radio" value="None" name="useful" required/></td>
        <td><input type="radio" value="None" name="useful" required/></td>
        <td><input type="radio" value="None" name="useful" required/></td>
      </tr>`;
    });
    document.getElementById("table_body").innerHTML=tableData;
}).catch((err)=>{
    console.log(err);
})