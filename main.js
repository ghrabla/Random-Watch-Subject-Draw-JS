fetch("http://localhost:3000/student")
.then(response => response.json())
.then(data => {
    let arr = data;
    let staticarr = data;
    // console.log(arr)
    localStorage.setItem("arrobj",JSON.stringify(arr))
    localStorage.setItem("constarr",JSON.stringify(staticarr))
})
 
let insorted = JSON.parse(localStorage.getItem("constarr"));
console.log(insorted)
for(let i=0;i<insorted.length;i++){
    let j = i+1;
    let stddata = "student " + j +": "+ insorted[i].name;
        const nodestd = document.createElement("li");
        const text = document.createTextNode(stddata);
        nodestd.appendChild(text);
    document.getElementById("std-name").appendChild(nodestd)
}


async function remind(){
    
    
    let alldata = JSON.parse(localStorage.getItem("arrobj"));
    let randnum = Math.floor(alldata.length * Math.random());
    let displaydat = alldata[randnum].name+ " : " ;
    
//    const sendsort = await axios.post('http://localhost:3000/sortedstudent', { id: "", name: alldata[randnum].name , date:pre_date });
        const node = document.createElement("li");
        const textnode = document.createTextNode(displaydat);
        node.appendChild(textnode);
        document.getElementById("table").appendChild(node);
    alldata = Object.values(alldata).filter((value , index) => {
        return index != randnum;
    });
    if(alldata.length==0){

        var element = document.getElementById("mybtn");
        element.classList.toggle("hide-btn");
        
        Swal.bindClickHandler()
           Swal.mixin({
           toast: true,
          }).bindClickHandler('data-swal-toast-template')

    }
    localStorage.setItem("arrobj",JSON.stringify(alldata))
}



 
async function adduser(){
     var x = document.getElementById("inp-name").value;
     if(x==""){
         alert("please enter valid name")
     }else{

         const result = await axios.post('http://localhost:3000/student', { id: "", name: x });
         fetch("http://localhost:3000/student")
         .then(response => response.json())
         .then(data => {
             let arr = data;
             let staticarr = data;
             // console.log(arr)
             localStorage.setItem("arrobj",JSON.stringify(arr))
             localStorage.setItem("constarr",JSON.stringify(staticarr))
         })
         alert("we added one")
        }
        
}




  



