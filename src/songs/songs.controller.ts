import { Controller  , Get , Post , Put , Patch , Delete , Param , Body , Query} from '@nestjs/common';
import { SongsService } from './songs.service.js';
@Controller('songs')
export class SongsController {
    constructor(private readonly songsService : SongsService ) {

    }


    @Get()
    findAll() {
        return this.songsService.findAll()
    }
    @Get(':id') 
    findOne(@Param('id') id : string)
    {
        return this.songsService.findOne(id)
    }

    @Post()
    create(@Body() data : {name : string , artist : string}){
        return this.songsService.create(data)
    }
    

    @Put(':id')
    replaceSong(@Param('id') id : string , @Body() data : {name : string , artist: string}) {
        return this.songsService.replaceSong(id , data)
    }

    @Patch(':id')
    updateSong(@Param('id') id : string , @Body() data : {name : string , artist : string}){
        return this.songsService.updateSong(id , data)
    }

    @Delete(':id')
    deleteSong(@Param('id') id : string ){
        return this.songsService.deleteSong(id)
    }
}
