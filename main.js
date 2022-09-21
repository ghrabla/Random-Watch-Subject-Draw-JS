var alldata;
fetch("./students.json")
.then(response => response.json())
.then(data => {
    alldata = data;
    console.log(data)
})

let day = new Date();
localStorage.setItem("lastmonth",day.getMonth()*1+1)
localStorage.setItem("lastdate",day.getDate())
localStorage.setItem("year",day.getFullYear())
function remind(){
    // console.log(alldata)
    // document.writeln(JSON.stringify(alldata))
    // let studentsarr = JSON.stringify(alldata);
    // document.getElementById("table").innerHTML = studentsarr;
    let day = new Date();
    let month = localStorage.getItem("lastmonth")*1;
    let lastday = localStorage.getItem("lastdate")*1+1;
    let year = localStorage.getItem("year")*1;
    localStorage.setItem("lastmonth", month);
    localStorage.setItem("lastdate", lastday);
 
    if(lastday>30){
        localStorage.setItem("lastdate",0)
        localStorage.setItem("lastmonth",month*1+1)
    }
    if(month==12 && lastday>30){
        
        localStorage.setItem("lastmonth",1);
        localStorage.setItem("year",year*1+1);
        
    }
    let pre_date = lastday +"/"+ month +"/"+ year;
    let displaydat = JSON.stringify(alldata[Math.floor(alldata.length * Math.random())].name)+ " : " + pre_date;
    document.getElementById("table").innerHTML = displaydat;
    // let values = Object.values(alldata)
    // console.log(values)
    // const result = values.filter(alldata[Math.floor(alldata.length * Math.random())]);
    // console.log(result); 
    // alldata = alldata.filter(alldata[0])
    // console.log(alldata)

}



