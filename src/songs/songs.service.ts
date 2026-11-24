import { HttpException, HttpStatus, Injectable , NotFoundException } from '@nestjs/common';
import { error } from 'console';
import { retry } from 'rxjs';
let id  = 1
type Song = {id : number , name : string , artist : string}
type UpdateSong = Partial<Omit<Song, 'id'>>
@Injectable()
export class SongsService {

    private  songs : Song[] = [{id : id , name : 'Abc', artist: "XYX"}]
    

    findAll(){
        return this.songs
    }

    findOne(id : number){
        let s = this.songs.find( i => i.id === id)
        if(!s) {
            throw new HttpException('Song not found' , HttpStatus.NOT_FOUND)
            return
        }
        return `Returning song of id ${id}`
    }

    create(data : {name : string , artist : string}) {
        id++;
        let s : Song= {id : id , name :data.name , artist : data.artist }
        this.songs.push(s)
        return `Adding new song to data base ${data.name }`
    }

    replaceSong(id : number , data : UpdateSong) {
        let index = this.songs.findIndex(i => i.id == id)
        if(index == -1) {
            throw new NotFoundException("Song not found");
        }
        this.songs[index] = {...this.songs[index] , ...data}
        return `Replacing song with id ${id}`
    }


 updateSong(id: number, data: UpdateSong) {
    let index = this.songs.findIndex(i => i.id === id)

    if (index === -1) {
        throw new NotFoundException('Song not found')
    }

    this.songs[index] = {
        ...this.songs[index],
        ...data
    }

    return this.songs[index]
}

    deleteSong(id : number) {
        let s = this.songs.filter(i => i.id != id)
        this.songs = s
        return `Deleting song with id ${id}`
    }

    simulateError(){
        throw new Error('Db connection failed')
        return
    }
}



