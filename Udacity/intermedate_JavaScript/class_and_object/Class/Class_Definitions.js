class Developer{
    constructor(name){
        this.name = name;
    }

    introduce(){
        console.log(`Hi, I'm ${this.name}`);
        
    }
}

let dev = new Developer(`Omar`);
dev.introduce();