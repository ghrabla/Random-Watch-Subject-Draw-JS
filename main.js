fetch("http://localhost:3000/student")
.then(response => response.json())
.then(data => {
    let arr = data;
    console.log(arr)
    localStorage.setItem("arrobj",JSON.stringify(arr))
})
 




  

async function remind(){
   
    let alldata = JSON.parse(localStorage.getItem("arrobj"));
    
   

    
     
    // let pre_date = l;
    let pre_date = "sorry no engless";
    
    let randnum = Math.floor(alldata.length * Math.random());
    let displaydat = JSON.stringify(alldata[randnum].name)+ " : " ;
//    const sendsort = await axios.post('http://localhost:3000/sortedstudent', { id: "", name: alldata[randnum].name , date:pre_date });
    // for (let index = 0; index < alldata.length; index++) {
         
    // }

    

        // Create an "li" node:
        const node = document.createElement("li");
        
        // Create a text node:
        const textnode = document.createTextNode(displaydat);
        
        // Append the text node to the "li" node:
        node.appendChild(textnode);
        // Create an "li" node:
        // const nodet = document.createElement("li");
        
        // Create a text node:
        // const textnodet = document.createTextNode(pre_date);
        
        // Append the text node to the "li" node:
        // node.appendChild(textnodet);
        
        // Append the "li" node to the list:
        document.getElementById("table").appendChild(node);
        // document.getElementById("tdate").appendChild(nodet);
        




    // document.getElementById("table").innerHTML = displaydat;
    
    alldata = Object.values(alldata).filter((value , index) => {
        // console.log(index)
        return index != randnum;
    });
    // console.log(alldata)
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




  



