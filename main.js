fetch("http://localhost:3000/student")
.then(response => response.json())
.then(data => {
    let arr = data;
    console.log(arr)
    localStorage.setItem("arrobj",JSON.stringify(arr))
})
 
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
         alert("we added one")
        }

        
}




  



