fetch("http://localhost:3000/student")
.then(response => response.json())
.then(data => {
    let arr = data;
    console.log(arr)
    localStorage.setItem("arrobj",JSON.stringify(arr))
})
 
let day = new Date();
localStorage.setItem("lastmonth",day.getMonth()+1)
localStorage.setItem("lastdate",day.getDate())
localStorage.setItem("year",day.getFullYear())



  

async function remind(){
   
    let alldata = JSON.parse(localStorage.getItem("arrobj"));
    
    let month = localStorage.getItem("lastmonth")*1;
    let lastday = localStorage.getItem("lastdate")*1+1;
    let year = localStorage.getItem("year")*1;
    localStorage.setItem("lastmonth", month);
    localStorage.setItem("lastdate", lastday);

    if(lastday==23){
        localStorage.setItem("lastdate", lastday+2);
    }
    if(lastday>30){
        
        localStorage.setItem("lastdate",0)
        localStorage.setItem("lastmonth",month*1+1)
    }
    if(month==12 && lastday>30){
        
        localStorage.setItem("lastmonth",1);
        localStorage.setItem("year",year*1+1);
        
    }
    let pre_date = lastday +"/"+ month +"/"+ year;
    
    let randnum = Math.floor(alldata.length * Math.random());
    let displaydat = JSON.stringify(alldata[randnum].name)+ " : " + pre_date;
//    const sendsort = await axios.post('http://localhost:3000/sortedstudent', { id: "", name: alldata[randnum].name , date:pre_date });
    // for (let index = 0; index < alldata.length; index++) {
         
    // }

    

        // Create an "li" node:
        const node = document.createElement("li");
        
        // Create a text node:
        const textnode = document.createTextNode(displaydat);
        
        // Append the text node to the "li" node:
        node.appendChild(textnode);
        
        // Append the "li" node to the list:
        document.getElementById("table").appendChild(node);
        



    // document.getElementById("table").innerHTML = displaydat;
    
    alldata = Object.values(alldata).filter((value , index) => {
        // console.log(index)
        return index != randnum;
    });
    console.log(alldata)
    if(alldata.length==0){
     
          const node = document.createElement("h4");
          const textnode = document.createTextNode("we sorted all the students thanks!");
          node.appendChild(textnode);
        document.getElementById("table").appendChild(node);

        var element = document.getElementById("mybtn");
        element.classList.toggle("hide-btn");
        
        Swal.bindClickHandler()
           Swal.mixin({
           toast: true,
          }).bindClickHandler('data-swal-toast-template')

    }
    // console.log(alldata)
    localStorage.setItem("arrobj",JSON.stringify(alldata))
    

    

}



 
async function adduser(){
     var x = document.getElementById("inp-name").value;
     if(x==""){
         alert("please enter valid name")
     }else{

         const result = await axios.post('http://localhost:3000/student', { id: "", name: x });
         alert("we added one")
        }

        
}




  



