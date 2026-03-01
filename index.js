function showTime(){
    setInterval(()=>{
        let d=new Date ()
        let msg=document.getElementById("msg")
        let rest=""
        if (d.getHours()>12){
            rest=""
        }
        else if (d.getHours()<12){
            rest=""
        }
        let dateStructure=d.getHours()+":"+d.getMinutes()+":"+d.getSeconds()+rest
        msg.innerHTML=dateStructure
    },1000)
}