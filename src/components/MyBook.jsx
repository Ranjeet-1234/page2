import HTMLFlipBook from "react-pageflip";
import Page from "./Page";
import Cover from "./pages/Cover/Cover";
import coverImg from "../assets/cover1.jpg";
import EndImg from "../assets/last-page.png";
import FirstPage from "./pages/Hero/FirstPage";
import Skills from "./pages/Skills/Skills";
import Services from "./pages/Services/Services";
import About from "./pages/About/About";
import Projects from "./pages/Projects/Projects.jsx";

import ProjectImg1 from "../assets/projects/car-rental.jpg";
import ProjectImg2 from "../assets/projects/restaurant.jpg";
import ProjectImg3 from "../assets/projects/ecommerce.jpg";
import ProjectImg4 from "../assets/projects/travel-website.jpg";

const ProjectData = [
  {
    name: "Car Rental website",
    description: "Complete Responsive website using React js and Tailwind CSS",
    image: ProjectImg1,
    previewLink: "https://car-rental-tcj.netlify.app/",
  },
  {
    name: "Restaurant website",
    description: "Complete Responsive website using React js and Tailwind CSS",
    image: ProjectImg2,
    previewLink: "https://foodies-zone.netlify.app/",
  },
];
const ProjectData2 = [
  {
    name: "Ecommerce website",
    description: "Complete Responsive website using React js and Tailwind CSS",
    image: ProjectImg3,
    previewLink: "https://shopsy-tcj.netlify.app/",
  },
  {
    name: "Travel website",
    description: "Complete Responsive website using React js and Tailwind CSS",
    image: ProjectImg4,
    previewLink: "https://travel-tcj.netlify.app/",
  },
];

function MyBook(props) {
  return (
    <HTMLFlipBook width={600} height={700} showCover="true">
      <Page number={1}>
        <Cover coverImg={coverImg}  />
      </Page>
      <Page number={2}>
        <FirstPage />
      </Page>
      <Page number={3}>
        <Services planet="Sun"/>
      </Page>
      <Page number={4}>
        <Services planet="Mars"/>
      </Page>
      <Page number={5}>
        <Services planet="Jupiter"/>
      </Page>
      <Page number={6}>
        <Services planet="Venus"/>
      </Page>
      <Page number={7}>
        <Services planet="Saturn"/>
      </Page>
      <Page number={8}>
        <About />
      </Page>
      {/* <Page number={9}>
        <Projects ProjectData={ProjectData} />
      </Page>
      <Page number={10}>
        <Projects ProjectData={ProjectData2} />
      </Page> */}
      <Page number={9}>
        <Cover coverImg={EndImg}  />
      </Page>
    </HTMLFlipBook>
  );
}

export default MyBook;
