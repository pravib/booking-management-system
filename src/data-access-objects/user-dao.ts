import {User} from '../types/user';
import fs from 'fs';
import {v1} from 'uuid';

class UserDAO {
    private databaseURI = '../database/users/';

    public save(user:User):User|undefined {
        var result = undefined;
        try {
            const userId = v1();
            user.setId(userId);
            fs.readFile('user-dao.ts',(err,data)=>{
                if(err) return console.log(err);
                console.log(data)
            });
            // fs.open(this.databaseURI+userId, 'w', function (err, file) {
            //     if (err) throw err;
            //     console.log('Created!');
            //   });
            // fs.writeFile(this.databaseURI+userId,JSON.stringify(user),(err)=>console.log(err));
        }catch(e) {
            console.log(`An exception occured : ${e}`);
        }
        return result;
    }
}

export const userDAO = new UserDAO();