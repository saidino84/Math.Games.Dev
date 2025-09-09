class UserViewModel: ViewModel(){
    private val _users = MutableStateFlow<List<User>>(emptyList())
    val users = _users.asStateFlow()

    private val _localUser = MutableStateFlow<User?>(null)
    val localUser _localUser.asStateFlow()


    fun onUserJoined(User:user){
        _users.update{it + user}
        if(user.id == "local"){
            _localUser.update{user}
        }
    }

    fun onUserInfoUpdated(user:User){
        _users.update{it:List<User>
            it.map{curUser ->
                if(curUser.id == user.id) user else curUser
            }
        }
        if(user.id =="local"){
            _localUser.update{user}
        }
    }
}


//Model

data class User{
    val id:String,
    val email:String,
    val name:String,
    val avatarUrl:String
}