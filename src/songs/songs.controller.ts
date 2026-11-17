import { Controller  , Get , Post , Put , Patch , Delete , Param , Body , Query, HttpException, HttpStatus, ParseIntPipe, DefaultValuePipe} from '@nestjs/common';
import { SongsService } from './songs.service.js';
import { CreateSongDto } from './dto/create-song.dto.js';
import { UpdateSongDto } from './dto/update-song.dto.js';
@Controller('songs')
export class SongsController {
    constructor(private readonly songsService : SongsService ) {

    }


    @Get('error')
    simulateError(){
        try {
        return this.songsService.simulateError()
        }
        catch(e) {
            throw new HttpException('My error bitch' , HttpStatus.UNAUTHORIZED , {cause : e})
            return
        }
        
    }
    @Get()
    findAll(@Query('id' , new DefaultValuePipe(1) , ParseIntPipe) id : number ) {
        console.log(id)
        return this.songsService.findAll()
    }
    @Get(':id') 
    findOne(@Param('id' , ParseIntPipe) id : number )
    {
       
        return this.songsService.findOne(id)
    }

    @Post()
    create(@Body() data : CreateSongDto){
        return this.songsService.create(data)
    }
    

    @Put(':id')
    replaceSong(@Param('id' , ParseIntPipe) id : number , @Body() data : {name : string , artist: string}) {
        return this.songsService.replaceSong(id , data)
    }

    @Patch(':id')
    updateSong(@Param('id' , ParseIntPipe) id : number , @Body() data : UpdateSongDto){
        return this.songsService.updateSong(id , data)
    }

    @Delete(':id')
    deleteSong(@Param('id' , ParseIntPipe) id : number ){
        return this.songsService.deleteSong(id)
    }

}
