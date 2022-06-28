import { ConfigModule } from '@nestjs/config';
import { SequelizeModule } from '@nestjs/sequelize';
import { Module } from '@nestjs/common';

import { ProfessionalExperienceController } from './controllers/professional-experience.controller';
import { AdditionalInformationController } from './controllers/additional-information.controller';
import { ProjectPortfolioController } from './controllers/project-portfolio.controller';
import { CertificationController } from './controllers/certification.controller';
import { FormationController } from './controllers/formation.controller';
import { SkillsController } from './controllers/skills.controller';
import { AppController } from './app.controller';

import { AppService } from './app.service';
import { SkillsService } from './services/skills.service';
import { FormationService } from './services/formation.service';
import { CertificationService } from './services/certification.service';
import { ProjectPortfolioService } from './services/project-portfolio.service';
import { AdditionalInformationService } from './services/additional-information.service';
import { ProfessionalExperienceService } from './services/professional-experience.service';

import { ProfessionalExperience } from './models/professional-experience.entity';
import { AdditionalInformation } from './models/additional-information.entity';
import { ProjectPortfolio } from './models/project-portfolio.entity';
import { Certification } from './models/certification.entity';
import { Formation } from './models/formation.entity';
import { Skill } from './models/skill.entity';

@Module({
  imports: [
    ConfigModule.forRoot(),
    SequelizeModule.forRoot({
      dialect: 'mysql',
      host: process.env.DATABASE_URL,
      port: 3306,
      username: process.env.DATABASE_USER,
      password: process.env.DATABASE_PASSWORD,
      database: process.env.DATABASE,
      autoLoadModels: true,
      synchronize: true
    }),
    SequelizeModule.forFeature([
      ProfessionalExperience,
      AdditionalInformation,
      ProjectPortfolio,
      Certification,
      Formation,
      Skill
    ])
  ],
  controllers: [
    ProfessionalExperienceController,
    AdditionalInformationController,
    ProjectPortfolioController,
    CertificationController,
    FormationController,
    SkillsController,
    AppController,
  ],
  providers: [
    AppService,
    SkillsService,
    FormationService,
    CertificationService,
    ProjectPortfolioService,
    AdditionalInformationService,
    ProfessionalExperienceService,
  ],
})
export class AppModule { }