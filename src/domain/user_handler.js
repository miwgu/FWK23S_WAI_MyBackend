const uuid = require('uuid');

const users =[]

exports.create = (user) =>{
    user ={id: uuid.v4(), ...user};
    users.push(user);
    return user;
  }

exports.readAll =() =>{
   return users;
  }

exports.read = (id) =>{
   const user = users.find(user => user.id === id);
   return user;
  }

exports.update =(id, user) =>{
   const saveUser = users.find(aUser => aUser,id === id);
	if(user.hasOwnProperty('name')){
	savedUser.password = user.password;	
     }
	if(user.hasOwnProperty('password')){
        savedUser.password = user.password;
     }
     return savedUser;
 }

expors.delete =(id) =>{
   const index = users.findIndex(user => user.id ===id)
   if(index!== -1){
	const [user] = users.splice(index, 1);//splice returns an array
	return user;
 }
	return null;
}
