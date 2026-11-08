import { Injectable , NotFoundException } from '@nestjs/common';
import { retry } from 'rxjs';
let id  = 1
type Song = {id : string , name : string , artist : string}
@Injectable()
export class SongsService {

    private  songs : Song[] = [{id : `${id}` , name : 'Abc', artist: "XYX"}]
    

    findAll(){
        return this.songs
    }

    findOne(id : string){
        let s = this.songs.find( i => i.id === id)
        if(!s) {
            return 'Song with this id not found'
        }
        return `Returning song of id ${id}`
    }

    create(data : {name : string , artist : string}) {
        id++;
        let s : Song= {id : `${id}` , name :data.name , artist : data.artist }
        this.songs.push(s)
        return `Adding new song to data base ${data.name }`
    }

    replaceSong(id : string , data : {name : string , artist : string}) {
        let index = this.songs.findIndex(i => i.name == id)
        this.songs[index] = {id : id , ...data}

        return `Replacing song with id ${id}`
    }


    updateSong(id : string , data : {name : string , artist : string}) {
        let index = this.songs.findIndex(i => i.name == id)
        this.songs[index] = {id : id , ...data}
        return `Updating song with id ${id}`
    }


    deleteSong(id : string) {
        let s = this.songs.filter(i => i.id != id)
        this.songs = s
        return `Deleting song with id ${id}`
    }
}
