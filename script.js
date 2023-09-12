let prefix = ""
let postfix = ""

const inputData = document.getElementsByClassName("data")
let variables = ["1","2","ds","eas"]
let dataInput = ["","","",""];
let n = 0
const log = document.getElementsByClassName("log")[0]

for (input of inputData){
    input.addEventListener("blur",(e)=>{ dataInput[e.target.getAttribute("index")] = e.target.value; updateText(); updateVar() } )
}

function updateVar(){
    let gross = dataInput[2].split("//");
    let data = gross[0].split(gross[1])
    variables = data
}
function updateText(){
    let textAdd = ""
    let color = "yellow"
    for(let v of variables){
        let t = `<span style='text-overflow: ellipsis'><span style='color:${"yellow"}'>` +  dataInput[0] +"</span>" +`<span style='color:${"green"}'>` + dataInput[1] + "</span>" + "</span>" + "</br>"
        t = t.replaceAll("$$",`<span style="color:purple">${v}</span>`)

        textAdd += t
        color = "green"
    }
    log.innerHTML = textAdd
    
}



