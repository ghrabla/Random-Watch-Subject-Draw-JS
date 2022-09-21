var alldata;
fetch("./students.json")
.then(response => response.json())
.then(data => {
    alldata = data;
    console.log(data)
})


function remind(){
    // console.log(alldata)
    // document.writeln(JSON.stringify(alldata))
    // let studentsarr = JSON.stringify(alldata);
    // document.getElementById("table").innerHTML = studentsarr;
    let day = new Date();
    let month = day.getMonth()+1;
    let lastday = localStorage.getItem("lastdate")*1+1;
    localStorage.setItem("lastdate", lastday);
    let pre_date = lastday +"/"+ month +"/"+ day.getFullYear();
    let displaydat = JSON.stringify(alldata[Math.floor(alldata.length * Math.random())].name)+ " : " + pre_date;
    document.getElementById("table").innerHTML = displaydat;
    if(lastday>30){
        localStorage.setItem("lastdate",0)
    }
    // let values = Object.values(alldata)
    // console.log(values)
    // const result = values.filter(alldata[Math.floor(alldata.length * Math.random())]);
    // console.log(result); 
    // alldata = alldata.filter(alldata[0])
    // console.log(alldata)

}



