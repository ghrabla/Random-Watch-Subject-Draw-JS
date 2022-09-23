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

    // document.getElementById("tdate").innerHTML = printedTable;
  }
  // printedName(student,"allStudents")

  btn.addEventListener("click", () => {
    // get name of the day
    var alldata = JSON.parse(localStorage.getItem("arrobj"));
    var dayName = date.toString().split(" ")[0];

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
      
    }else if (true) {


      // console.log("stop please");
    }
  });
  //  console.log(dates)
  return dates;
}

// 
var today = new Date();
var current_date = today.getFullYear() + "-" + (today.getMonth() + 1) + "-" + today.getDate();
const d1 = new Date(current_date);
getDatesInRange(d1)



