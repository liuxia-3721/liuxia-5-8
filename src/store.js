import {observable,action} from "mobx";
//abservable 定义组件的状态（数据）
//action 修改数据

class Store {
    id = Math.random();
    @observable title="飞飞";
    @observable finished = false;
    @action cTitle =()=>{
        this.title = Math.random() + "刘"
    }
}
export  default  new Store()
