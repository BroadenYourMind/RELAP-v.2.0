import React from "react";
import { device } from "src/common/constants/device";
import Container from "src/components/reusable/Container";
import SectionHeader from "src/components/reusable/SectionHeader";
import styled from "styled-components";
import PartnersLogo from "./PartnersLogo";
import PartnersReweiws from "./PartnersReweiws";

const Section = styled.section`
  position: relative;
  z-index: 5;
  background: #f2f2f2;
`;

const Header = styled(SectionHeader)`
  padding-top: 71px;
  margin: 0 auto 64px;

  @media ${device.laptop} {
    margin-bottom: 48px;
  }
`;

const Partners = () => {
  const title = "Officis debitis";
  const text =
    "Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repella.";

  const reweiws = [
    {
      id: 1,
      src: "img/partners/person1.png",
      text: '"Voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis"',
      rewiewerName: "Evelyn Allen",
    },
    {
      id: 2,
      src: "img/partners/person2.png",
      text: '"Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores"',
      rewiewerName: "Malin Quist",
    },
    {
      id: 3,
      src: "img/partners/person3.png",
      text: '"Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci numquam eius"',
      rewiewerName: "Pan Su",
    },
  ];

  const partners = [
    {
      id: 1,
      href: "https://www.canadapages.com/location-doutillage-steustache-inc-sainteutache-qc-4504916777/",
      src: "img/partners/logo/logo-1.svg",
    },
    {
      id: 2,
      href: "https://www.canadapages.com/location-doutillage-steustache-inc-sainteutache-qc-4504916777/",
      src: "img/partners/logo/logo-2.svg",
    },
    {
      id: 3,
      href: "https://www.canadapages.com/location-doutillage-steustache-inc-sainteutache-qc-4504916777/",
      src: "img/partners/logo/logo-3.svg",
    },
    {
      id: 4,
      href: "https://www.canadapages.com/location-doutillage-steustache-inc-sainteutache-qc-4504916777/",
      src: "img/partners/logo/logo-4.svg",
    },
    {
      id: 5,
      href: "https://www.canadapages.com/location-doutillage-steustache-inc-sainteutache-qc-4504916777/",
      src: "img/partners/logo/logo-5.svg",
    },
    {
      id: 6,
      href: "https://www.canadapages.com/location-doutillage-steustache-inc-sainteutache-qc-4504916777/",
      src: "img/partners/logo/logo-6.svg",
    },
  ];

  return (
    <Section>
      <Container>
        <Header title={title} text={text} />
        <PartnersReweiws reweiws={reweiws} />
        <PartnersLogo partners={partners} />
      </Container>
    </Section>
  );
};

export default Partners;
