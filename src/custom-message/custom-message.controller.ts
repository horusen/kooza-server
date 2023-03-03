import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { CustomMessageService } from './custom-message.service';
import { CreateCustomMessageDto } from './dto/create-custom-message.dto';
import { UpdateCustomMessageDto } from './dto/update-custom-message.dto';

@Controller('custom-message')
export class CustomMessageController {
  constructor(private readonly customMessageService: CustomMessageService) {}

  @Post()
  create(@Body() createCustomMessageDto: CreateCustomMessageDto) {
    return this.customMessageService.create(createCustomMessageDto);
  }

  @Get()
  findAll() {
    return this.customMessageService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.customMessageService.findOne(id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateCustomMessageDto: UpdateCustomMessageDto,
  ) {
    return this.customMessageService.update(id, updateCustomMessageDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.customMessageService.remove(id);
  }
}
