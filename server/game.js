const uuid = require('uuid')

class User {
    constructor(ws){
        this.id = uuid.v4()
        this.ws = ws
    }
    send(data) {
        this.ws.send(JSON.stringify(data))
    }
}

class Rooms {
    constructor() {
        this.games = []
    }
    addGame(game) {
        this.games.push(game)
    }
    removeGame(game) {
        this.games.splice(this.games.indexOf(game), 1)
    }
    join(user) {

        // todo with find
        let oldGame = null
        this.games.forEach(game => {
            if (game.addUser(user)) {
                oldGame = game
            }
        })
        if (oldGame) {
            return oldGame
        }
        console.log('CREATE NEW GAME')
        let game = new Game()
        game.addUser(user)
        this.addGame(game)
        return game
    }
}

class Game {
    constructor() {
        this.users = []
        this.max_user = 2
    }
    addUser(user) {

        if (this.users.length < this.max_user) {
            this.users.push(user)
            return true
        } else {
            return false
        }
        
    }
    removeUser(user) {
        let index = this.users.indexOf(user)
        if (index !== -1) {
            this.users.splice(this.users.indexOf(user), 1)
        }
    }
    sendAll(data) {
        this.users.forEach(user => {
            user.send(data)
        })
    }
    sendOther(main_user, data) {
        console.log('SEND OTHER', data)
        console.log(this.users)
        this.users.forEach(user => {
            if (user !== main_user) {
                
                user.send(data)
            }
        })
    }
}

module.exports = {User, Rooms, Game}