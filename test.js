var btn = document.getElementById("mybtn");

function getDatesInRange(startDate) {
  const date = new Date(startDate.getTime());
  // array for pushed dates
  const dates = [];

  // put date in array and make a condition if this date in the array skipped

  function printedName(tableName) {
    let printedTable = tableName;


   const node = document.createElement("li");

   const textnode = document.createTextNode(printedTable);

   node.appendChild(textnode);

  document.getElementById("tdate").appendChild(node);
  }

  btn.addEventListener("click", () => {
    // get name of the day
    var alldata = JSON.parse(localStorage.getItem("arrobj"));
    var dayName = date.toString().split(" ")[0];
    // console.log(dayName)

    // make a condition to skipped the weekend
    if (dayName != "Fri" && alldata.length > -1) {
      // add new day after every pick
      var test = date.setDate(date.getDate() + 1);
      // change date to this format : yy-mm-dd
      var ss = new Date(test);
      var finalDate =
        ss.getFullYear() + "-" + (date.getMonth() + 1) + "-" + date.getDate();
      // push the date to an array called dates
      dates.push(finalDate);
      let lastitem = dates[dates.length-1]
      
      // console.log(lastitem)
      printedName(lastitem)
      // document.getElementById("rDate").innerHTML = dates;
    }
    // if day day pass weekends day
    else if (dayName == "Fri") {
      var test = date.setDate(date.getDate() + 3);
      // change date to this format : yy-mm-dd
      var ss = new Date(test);
      var finalDate =
        ss.getFullYear() + "-" + (date.getMonth() + 1) + "-" + date.getDate();
      // push the date to an array called dates
      dates.push(finalDate);
      let lastitem = dates[dates.length-1]
      // console.log(lastitem)
      printedName(lastitem)
      
    }
    let dayoff = dates[dates.length-1]
    dayoff = dayoff.split("-")[1] + "/" + dayoff.split("-")[2];
    console.log(dayoff)
    // if(dayoff=="10/3" || dayoff=="11/17" ||dayoff=="11/5" ||dayoff=="7/29" ||dayoff=="4/30" ||dayoff=="12/31" ||dayoff=="8/13" ||dayoff=="8/20"||dayoff=="8/19"||dayoff=="1/10"  ){
    //   var test = date.setDate(date.getDate() + 1);
    //   console.log("hi")
    // }
    let offdarr = ["10/5","9/26","9/29","11/17","11/5","7/29","4/30","12/31","8/13","8/19","1/10"]
    for (let index = 0; index < offdarr.length; index++) {
      const element = offdarr[index];
      
      if( dayoff == element ){
        var test = date.setDate(date.getDate() + 1);
        console.log("hi")
      }
    }  
  });
  return dates;
}

var today = new Date();
var current_date = today.getFullYear() + "-" + (today.getMonth() + 1) + "-" + today.getDate();
const d1 = new Date(current_date);
getDatesInRange(d1)



