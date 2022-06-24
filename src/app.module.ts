import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { SequelizeModule } from '@nestjs/sequelize';

import { AppController } from './app.controller';

import { AppService } from './app.service';

import { SkillsModule } from './modules/skills.module';
import { FormationModule } from './modules/formation.module';
import { CertificationModule } from './modules/certification.module';
import { ProjectPortfolioModule } from './modules/project-portfolio.module';
import { AdditionalInformationModule } from './modules/additional-information.module';
import { ProfessionalExperienceModule } from './modules/professional-experience.module';

@Module({
  imports: [
    SkillsModule,
    FormationModule,
    CertificationModule,
    ProjectPortfolioModule,
    AdditionalInformationModule,
    ProfessionalExperienceModule,

    ConfigModule.forRoot(),
    // SequelizeModule.forRoot({
    //   dialect: 'mysql',
    //   host: process.env.DATABASE_URL,
    //   port: 3306,
    //   username: process.env.DATABASE_USER,
    //   password: process.env.DATABASE_PASSWORD,
    //   database: process.env.DATABASE,
    //   autoLoadModels: true,
    //   synchronize: true
    // })
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }