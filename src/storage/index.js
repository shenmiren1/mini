const STORAGE_KEY = 'mail';
export default{
    // 储存值
    setItem(key,value,model_name){

    },
    // 获取某一个模块下的属性  user 下的userName
    getItem(key,model_name){
        if(model_name){
            let val =this.getItem(model_name);
            if(val) return val[key]
        }
      return this.getStorage()[key]
    },
    getStorage(){
      return JSON.parse(window.sessionStorage.getItem(STORAGE_KEY) || '{}');
    },
    clear(){

    }
}