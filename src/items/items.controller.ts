import { Controller, Get, Post, Put, Delete, Body, Param } from '@nestjs/common';
import { CreateItemDto } from './dto/create-item.dto';
import { ItemsService } from './items.service';
import { Item } from './interfaces/item.interface';



@Controller('items')
export class ItemsController {
    constructor(private readonly itemsService: ItemsService) { }

    @Get()
    getAll(): Promise<Item[]> {
        return this.itemsService.findAll();
    }

    @Get(':id')
    async getOne(@Param('id') id): Promise<Item> {
        return this.itemsService.findOne(id);
    }

    @Post()
    create(@Body() createItemDto: CreateItemDto): Promise<Item> {
        return this.itemsService.create(createItemDto);
    }

    @Delete(':id')
    deleteItem(@Param('id') id): Promise<Item> {
        return this.itemsService.delete(id);
    }

    @Put(':id')
    updateItem(@Body() updateItemDto: CreateItemDto, @Param('id') id): Promise<Item> {
        return this.itemsService.update(id, updateItemDto);
    }




}
