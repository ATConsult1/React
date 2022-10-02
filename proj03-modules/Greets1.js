
const greets1 = "hi!!";
const greets2 = "Привет!"

class Greets{
    constructor(name,sname) {
        this.name = name;
        this.sname = sname;
    }

    sayGreets = () => {

        return `Hi, ${this.name} ${this.sname}`
    }
    ///...

}
//...
//common.js
module.exports =  {greets1,greets2,Greets};