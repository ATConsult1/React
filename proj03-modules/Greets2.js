const greets1 = "hi!!";
const greets2 = "Привет!"

export default class Greets{
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

export {greets1,greets2}