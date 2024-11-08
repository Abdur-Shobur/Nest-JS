import { ApiProperty } from '@nestjs/swagger';

export class CreateBaseDto {
  @ApiProperty()
  name: string;

  @ApiProperty()
  age: number;

  @ApiProperty()
  breed: string;
}
