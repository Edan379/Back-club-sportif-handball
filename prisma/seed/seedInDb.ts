import { JwtService } from '@nestjs/jwt';
import { AuthService } from '../../src/auth/auth.service';
import { PrismaService } from '../prisma.service';
import { UserRoleEnum } from '@prisma/client';
import { CreateEventDto } from 'src/event/dto/create-event.dto';

const prisma = new PrismaService();
const jwtService = new JwtService();
const authService = new AuthService(jwtService, prisma);

interface Admin {
  firstname: string;
  lastname: string;
  email: string;
  password: string;
  role: UserRoleEnum;
}

interface NewsInDb {
  title: string;
  content: string;
  creator_id:number;
}

//Admin à insérer dans la base de données
const admins: Admin[] = [
  {
    firstname: "Élise",
    lastname: "Lefebvre",
    email: "elise.lefebvre@hotmail.com",
    password: "azerty01",
    role: "ADMIN"
  },
  {
    firstname: "Jean",
    lastname: "Dupont",
    email: "jean.dupont@example.com",
    password: "password02",
    role: "ADMIN"
  },
  {
    firstname: "Marie",
    lastname: "Curie",
    email: "marie.curie@example.com",
    password: "password03",
    role: "ADMIN"
  },
  {
    firstname: "Paul",
    lastname: "Durand",
    email: "paul.durand@example.com",
    password: "password04",
    role: "ADMIN"
  }
];

//actualités à insérer dans la base de données
const newsSeeded : NewsInDb[]= [{
  title: "Victoire Éclatante en Demi-Finale du Championnat Régional !",
  content: "Notre équipe masculine a brillé lors de la demi-finale du championnat régional, remportant une victoire écrasante contre nos rivaux de longue date. Avec un score final de 32-18, les joueurs ont démontré une cohésion et une détermination exceptionnelles.",
  creator_id: 4
},
{
  title: "Nouvelle Recrue : Présentation de notre Nouveau Gardien de But",
  content: "Nous sommes ravis d'accueillir notre nouvelle recrue, Thomas Lefebvre, qui rejoint le club en tant que gardien de but. Thomas, âgé de 24 ans, a précédemment joué pour l'équipe de Montpellier où il a été élu meilleur gardien de but de la saison.",
  creator_id: 3
},
{
  title: "Tournoi de Handball pour Jeunes : Inscrivez-vous !",
  content: "Nous organisons un tournoi de handball destiné aux jeunes joueurs de 10 à 14 ans le samedi 15 juin. Ce tournoi est une excellente opportunité pour les jeunes talents de se faire remarquer et de passer une journée pleine de sport et de fun.",
  creator_id: 3
},
{
  title: "Soirée de Gala : Célébrons la Saison avec Style",
  content: "Pour clôturer cette saison exceptionnelle, nous organiserons une soirée de gala le vendredi 30 juin au Grand Hôtel de la Ville. C'est l'occasion de célébrer nos réussites, de remercier nos bénévoles, et de passer une soirée agréable avec tous les membres du club.",
  creator_id: 2
},
{
  title: "Retour sur la Saison : Les Moments Forts et les Meilleurs Joueurs",
  content: "La saison touche à sa fin, et il est temps de faire le point sur les moments forts qui ont marqué notre année. Du match spectaculaire contre nos rivaux à la victoire en coupe, nous avons connu de nombreux moments mémorables.",
  creator_id: 1
},
{
  title: "Programme d’Entraînement d’Été : Préparez-vous pour la Prochaine Saison",
  content: "Avec l’été qui approche, nous avons mis en place un programme d’entraînement spécial pour préparer nos joueurs pour la prochaine saison. Ce programme inclura des sessions de renforcement physique, des ateliers techniques, et des matches amicaux.",
  creator_id: 1
}
]

// événements à insérer dans la base de données
const eventsSeeded : CreateEventDto[] = [{
  title: "Tournoi Annuel de Handball",
  content: "Venez participer à notre tournoi annuel de handball. Une journée de compétition, de plaisir et de rencontres avec d'autres équipes de la région.",
  adress: "Gymnase du Parc, 123 Rue du Stade, Ville",
  type: 'ENTRAINEMENT',
  start_time: new Date('2024-05-15T09:00:00Z'),
  end_time: new Date('2024-05-15T17:00:00Z'),
  creator_id: 1,
  match_id: null,
},
{
  title: "Journée Portes Ouvertes",
  content: "Nous ouvrons les portes de notre club pour vous faire découvrir nos installations et rencontrer nos entraîneurs. Une excellente occasion pour les nouveaux venus de se familiariser avec notre club.",
  adress: "Complexe Sportif, 45 Avenue des Sports, Ville",
  type: "ENTRAINEMENT",
  start_time: new Date('2024-06-10T14:00:00Z'),
  end_time: new Date('2024-06-10T18:00:00Z'),
  creator_id: 3,
  match_id: null,
},
{
  title: "Séance d'Entraînement Spécial",
  content: "Une séance d'entraînement spéciale avec des exercices techniques avancés pour tous les joueurs de notre équipe. Ne manquez pas cette opportunité de perfectionner vos compétences.",
  adress: "Gymnase du Club, 78 Boulevard des Champions, Ville",
  type: 'APERO',
  start_time: new Date('2024-07-22T18:00:00Z'),
  end_time: new Date('2024-07-22T20:00:00Z'),
  creator_id: 2,
  match_id: null,
},
{
  title: "Soirée de Gala de Fin de Saison",
  content: "Célébrez la fin de la saison avec nous lors de notre soirée de gala. Une soirée élégante avec dîner, remises de prix et divertissements pour tous les membres et supporters du club.",
  adress: "Hôtel de Ville, 12 Place des Festivités, Ville",
  type: 'APERO',
  start_time: new Date('2024-08-20T19:00:00Z'),
  end_time: new Date('2024-08-20T23:00:00Z'),
  creator_id: 4,
  match_id: null,
},
{
  title: "Camp d'Été pour Jeunes",
  content: "Un camp d'été spécialement conçu pour les jeunes joueurs, avec des sessions d'entraînement, des jeux et des activités amusantes pour développer leurs compétences et passer du bon temps.",
  adress: "Centre de Loisirs, 56 Route des Camps, Ville",
  type: 'ENTRAINEMENT',
  start_time: new Date('2024-08-01T09:00:00Z'),
  end_time: new Date('2024-08-07T17:00:00Z'),
  creator_id: 2,
  match_id: null,
},
{
  title: "Match Amical Contre l'Équipe Rivale",
  content: "Un match amical très attendu contre notre équipe rivale. Venez soutenir notre équipe dans ce duel palpitant et encouragez nos joueurs.",
  adress: "Stade Municipal, 90 Rue des Sports, Ville",
  type: 'APERO',
  start_time: new Date('2024-09-10T16:00:00Z'),
  end_time: new Date('2024-09-10T18:00:00Z'),
  creator_id: 1,
  match_id: null,
}];

// Fonction pour créer un administrateur
const createAdmin = async (admin: Admin) => {
  // Hacher le mot de passe
  admin.password = await authService.hashPassword(admin.password);
  
  // Interroger la base de données pour créer l'administrateur
  await prisma.users.create({ data: admin });

  console.log(`Admin ${admin.email} created successfully.`);
}

const createAllAdmins = async () => {
  for (const admin of admins) {
    await createAdmin(admin);
  }
  console.log('All admins created successfully.');
}

const seedNews = async () => {
  for (const news of newsSeeded) {
    await prisma.news.create({
      data:news
    })
  }
  console.log('All news created successfully.');
}

const seedEvents = async () => {
  for (const event of eventsSeeded) {
    await prisma.event.create({
      data:event
    })
  }
  console.log('All events created successfully.');
}

// Exécution des fonctions dans l'ordre
const seedDatabase = async () => {
  try {
    await createAllAdmins(); // Création des administrateurs
    await seedNews(); // Création des actualités
    await seedEvents(); //Création des evènements
  } catch (error) {
    console.error('An error occurred:', error);
  } finally {
    await prisma.$disconnect();
  }
}

seedDatabase();
