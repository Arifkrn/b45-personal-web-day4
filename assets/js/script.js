let isiProject = []

function addProject(event){
    event.preventDefault();

    let projectName = document.getElementById("projectName").value;
    let startDate = document.getElementById("startDate").value;
    let endDate = document.getElementById("endDate").value;
    let description = document.getElementById("description").value;
    // let mycheckbox = document.querySelectorAll('input[type="checkbox"]:checked');
    let mycheckbox1 = document.getElementById('mycheckbox1').value;
    let mycheckbox2 = document.getElementById('mycheckbox2').value;
    let mycheckbox3 = document.getElementById('mycheckbox3').value;
    let mycheckbox4 = document.getElementById('mycheckbox4').value;
    let image = document.getElementById("input-image").files[0];
    let imageURL = URL.createObjectURL(image)
    

    if(projectName === ""){
        return alert("please input your Project Name")
    }else if(startDate === ""){
        return alert("Please input your start Date")
    }else if(endDate === ""){
        return alert("please input your end Date")
    }else if(description === ""){
        return alert("pelase input your description")
    }else if(!document.getElementById('mycheckbox1').checked && !document.getElementById('mycheckbox2').checked && !document.getElementById('mycheckbox3').checked  && !document.getElementById('mycheckbox4').checked){
        return alert("pelase input your checkbox")
    }
    // 3 kondisi
    else if(!document.getElementById('mycheckbox2').checked && !document.getElementById('mycheckbox3').checked && !document.getElementById('mycheckbox4').checked){
        mycheckbox2 = null,
        mycheckbox3 = null,
        mycheckbox4 = null
    }else if(!document.getElementById('mycheckbox1').checked && !document.getElementById('mycheckbox3').checked && !document.getElementById('mycheckbox4').checked){
        mycheckbox1 = null,
        mycheckbox3 = null, 
        mycheckbox4 = null
    }else if(!document.getElementById('mycheckbox1').checked && !document.getElementById('mycheckbox2').checked && !document.getElementById('mycheckbox4').checked){
        mycheckbox1 = null, 
        mycheckbox2 = null, 
        mycheckbox4 = null
    }else if(!document.getElementById('mycheckbox1').checked && !document.getElementById('mycheckbox2').checked && !document.getElementById('mycheckbox3').checked){
        mycheckbox1 = null, 
        mycheckbox2 = null, 
        mycheckbox3 = null
    }
    //2 kondisi
    else if(!document.getElementById('mycheckbox3').checked && !document.getElementById('mycheckbox4').checked){
        mycheckbox3 = null,
        mycheckbox4 = null
    }else if(!document.getElementById('mycheckbox1').checked && !document.getElementById('mycheckbox4').checked){
        mycheckbox1 = null,
        mycheckbox4 = null
    }else if(!document.getElementById('mycheckbox2').checked && !document.getElementById('mycheckbox4').checked){
        mycheckbox2 = null,
        mycheckbox4 = null
    }else if(!document.getElementById('mycheckbox2').checked && !document.getElementById('mycheckbox3').checked){
        mycheckbox2 = null,
        mycheckbox3 = null
    }else if(!document.getElementById('mycheckbox1').checked && !document.getElementById('mycheckbox2').checked){
        mycheckbox1 = null,
        mycheckbox2 = null
    }else if(!document.getElementById('mycheckbox1').checked && !document.getElementById('mycheckbox3').checked){
        mycheckbox1 = null,
        mycheckbox3 = null
    }
    //1 kondisi
    else if(!document.getElementById('mycheckbox1').checked){
        mycheckbox1 = null
    }else if(!document.getElementById('mycheckbox2').checked){
        mycheckbox2 = null
    }else if(!document.getElementById('mycheckbox3').checked){
        mycheckbox3 = null
    }else if(!document.getElementById('mycheckbox4').checked){
        mycheckbox4 = null
    }
    else if (imageURL === "") {
        return alert("Please entered your image!")
    
    // }else if(mycheckbox2.checked == true){
    //     return mycheckbox2.value
    // }else if(mycheckbox2.checked == false){
    //     return false
    // }else if(!mycheckbox1.checked) {
    //     mycheckbox1 = "oi"
    }if (startDate > endDate) {
        return alert("The end date cannot be less than the start date")
    // }if(!document.getElementById('mycheckbox1').checked){
    //     mycheckbox1 = null
    // }else if(!document.getElementById('mycheckbox2').checked){
    //     mycheckbox2 = null
    // }else if(!document.getElementById('mycheckbox3').checked){
    //     mycheckbox3 = null
    // }else if(!document.getElementById('mycheckbox4').checked){
    //     mycheckbox4 = null
    }

    isiProject.push({
        projectName: projectName,
        startDate: startDate,
        endDate: endDate,
        description: description,
        mycheckbox1: mycheckbox1,
        mycheckbox2: mycheckbox2,
        mycheckbox3: mycheckbox3,
        mycheckbox4: mycheckbox4,
        image: imageURL,
    })
    console.log(isiProject);

    newData()
}
function newData(){
    document.getElementById("wrap-project").innerHTML = ""

    for (let i = 0; i < isiProject.length; i++) {
        const project = isiProject[i]

        document.getElementById("wrap-project").innerHTML += `
        <div class="mylistProject" id="mylistProject">
        <div class="wrap-project" id="wrap-project">
            <div class="card">
                <img src="${project.image}" alt="">
                <div>
                    <h4>${project.projectName}</h4>
                    <div class="wrap-date-view">
                        <p class="dateStart" id="dateStart">${project.startDate}</p>
                        <p class="dateEnd" id="dateEnd">${project.endDate}</p>
                    </div>
                </div>
                <div>
                    <p>${project.description}</p>
                </div>
                <div class="form-technology" id="form-technology">
                    <a href="https://nodejs.org/en">
                        <img src="./assets/img/facebook.png" alt="NodeJS">
                    </a>
                    <a href="https://nextjs.org/">
                        <img src="./assets/img/instagram.png" alt="NextJS">
                    </a>
                    <a href="https://react.dev/">
                        <img src="./assets/img/linkedin.png" alt="ReactJS">
                    </a>
                    <a href="https://www.typescriptlang.org/">
                        <img src="./assets/img/twitter.png" alt="Typescript">
                    </a>
                </div>
                <div class="form-button" id="form-button">
                    <button class="detail">
                        <a href="./detail-project.html">Detail</a>
                    </button>
                    <button class="delete">Delete</button>
                </div>
            </div>
        </div>
    </div>
    </div>
        `
    }
}