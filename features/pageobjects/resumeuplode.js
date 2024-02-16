class resume{
    get file(){
        return $("//input[@id='myFile']");
    }
}
module.exports=new resume()