class Session{
    private uid:string;
    constructor(uid:string){
        this.uid = uid;
    }
    setUid(uid:string){
        this.uid = uid;
    }
    getUid(){
        return this.uid;
    }
}

export default Session;