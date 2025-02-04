import { Module } from '@nestjs/common';
import { UserAccessHistoriesService } from './user-access-histories.service';
import { UserAccessHistories } from 'src/database/entities/user/userAccessHistories.entity';
import { JwtModule } from '@nestjs/jwt';
import { TypeOrmModule } from '@nestjs/typeorm';
import { MulterUploadModule } from 'src/utils/multer-helper';

@Module({
  imports: [
    JwtModule.register({}),
    TypeOrmModule.forFeature([UserAccessHistories]),
    MulterUploadModule],
  controllers: [],
  providers: [UserAccessHistoriesService],
})
export class UserAccessHistoriesModule { }
