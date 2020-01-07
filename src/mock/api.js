import Mock from 'mockjs'

Mock.mock('/api/user/login',{
    "status":0,
    "data":{
        "id":12,
        "username":"@cname"
    }
})