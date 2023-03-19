import { BusinessType } from 'src/business-type/entities/business-type.entity';
import { ApiResponseInterceptor } from './../shared/interceptors/api-response.interceptor';
import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  UseInterceptors,
} from '@nestjs/common';
import { BusinessTypeService } from './business-type.service';
import { CreateBusinessTypeDto } from './dto/create-business-type.dto';
import { UpdateBusinessTypeDto } from './dto/update-business-type.dto';
import { Public } from 'src/shared/decorators/public.decorator';

@Controller('business-type')
export class BusinessTypeController {
  constructor(private readonly businessTypeService: BusinessTypeService) {}

  @Post()
  create(@Body() createBusinessTypeDto: CreateBusinessTypeDto) {
    return this.businessTypeService.create(createBusinessTypeDto);
  }

  @Public()
  @Get()
  findAll() {
    return this.businessTypeService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.businessTypeService.findOne(id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateBusinessTypeDto: UpdateBusinessTypeDto,
  ) {
    return this.businessTypeService.update(id, updateBusinessTypeDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.businessTypeService.remove(id);
  }
}
