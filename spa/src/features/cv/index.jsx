import CV from "react-cv";
import landingPhoto from "../../resources/landingPhoto.png";

export const ArthurCurriculum = () => {
  return (
    <CV
      personalData={{
        name: "Arthur Illa",
        title: "Junior Fullstack Developer",
        image: landingPhoto,
        contacts: [
          { type: "email", value: "arthur-illa@hotmail.com" },
          { type: "phone", value: "(21) 97144-6787" },
          { type: "location", value: "Petrópolis/RJ" },
          { type: "website", value: "bit.ly/arthurResume" },
          {
            type: "linkedin",
            value: "linkedin.com/in/arthurIlla",
          },
          { type: "github", value: "github.com/OkuraCB" },
        ],
      }}
      sections={[
        {
          type: "text",
          title: "Profile",
          icon: "usertie",
          content: `Hi! Nice to meet you! I'm Arthur Illa. <br />
                    I don't know exactly why I've started to learn how to make code, but since this point I've made my own TV, a website for my mom to manage 
                    giveaways, this resume (Fun fact: it's running on my TV) and so much more!<br />
                    I'm fluent with english and have experience working with **Typescript**, **Javascript**, **Python**, **ReactJS** and **NestJS** 
                    (some projects below). I'm studying towards my bachelor's degree in Computer Engineering and specializing myself in **RUST**.`,
        },
        {
          type: "common-list",
          title: "Experience",
          icon: "rocket",
          items: [
            {
              title: "Competitive Programming",
              authority: "OBI - Maratona de Programação",
              authorityMeta: "Competitor",
              authorityWebSite: "https://maratona.sbc.org.br/",
              rightSide: "2019 - 2023",
            },
            {
              title: "Rock, Paper and Scissors efficiency study.",
              authority: "RPSContest",
              authorityMeta: "Researcher",
              authorityWebSite: "http://www.rpscontest.com/",
              rightSide: "2021 - 2022",
            },
            {
              title: "Orange Business Services",
              authority: "Fullstack Developer",
              authorityWebSite: "https://www.orange-business.com/br",
              rightSide: "2022 - Nowadays",
            },
          ],
        },
        {
          type: "projects-list",
          title: "Projects",
          icon: "tasks",
          groups: [
            {
              sectionHeader: "Personal",
              description: "Some of my personal projects.",
              items: [
                {
                  title: "Rifas Illa",
                  projectUrl: "https://bit.ly/rifailla",
                  description:
                    "A system for my mom to manage her giveaways.<br />_email: guest@guest.com_<br />_password: guest_",
                },
                {
                  title: "Spindafy",
                  //projectUrl: "Em breve...",
                  description:
                    "A genetic algorithm implementation to transform photos into combinations of the Spinda Pokémon.",
                },
              ],
            },
            {
              sectionHeader: "Orange Business Services",
              description: "Projects done for the company.",
              items: [
                {
                  title: "IT Room Inventory",
                  description:
                    "A system to facilitate the assignment of equipment for the employees.",
                },
                {
                  title: "BookingsAPI",
                  projectUrl: "https://github.com/OkuraCB/Bookings",
                  description: "An API to manage scheduled meetings.",
                },
                {
                  title: "Juan/Ruan",
                  projectUrl: "https://github.com/OkuraCB/JuanRuan",
                  description: "A time zone converter.",
                },
                {
                  title: "Oceano",
                  projectUrl: "https://github.com/OkuraCB/Oceano",
                  description:
                    "A translator with voice functionality and log history.",
                },
              ],
            },
          ],
        },
        {
          type: "common-list",
          title: "Education",
          icon: "graduation",
          items: [
            {
              title: "High School with accent in Telecomunications",
              authority: "CEFET/RJ",
              authorityMeta: "Finished",
              authorityWebSite: "https://www.cefet-rj.br/index.php/petropolis",
              rightSide: "2019 - 2022",
            },
            {
              title: "Computer Engineering Bachelor's Degree",
              authority: "CEFET/RJ",
              authorityMeta: "Not finished yet",
              authorityWebSite: "https://e-computacao.com.br/",
              rightSide: "2022 - 2024",
            },
            {
              title: "Discourse analysis",
              authority: "CEFET/RJ",
              authorityMeta: "Researcher",
              authorityWebSite: "https://www.cefet-rj.br/index.php/petropolis",
              rightSide: "2021 - Atualmente",
            },
          ],
        },
        {
          type: "tag-list",
          title: "Skills",
          icon: "cubes",
          items: [
            "Typescript",
            "Javascript",
            "Python",
            "RUST",
            "ReactJS",
            "NestJS",
            "Linux",
            "Git",
            "Redes",
          ],
        },
      ]}
      branding={false}
    />
  );
};
