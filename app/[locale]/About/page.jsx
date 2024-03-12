import React from "react";
import "./aboutus.css";
// import teamImage from "../../images/team.jpeg";
// import cultureImage from "../../images/culture.jpg";
import Image from "next/image";
import { useTranslations } from "next-intl";
import NavBar from "@/components/NavBar";

function About() {
  const t = useTranslations("Index");
  return (
    <div className="text-white">
      <NavBar currentScreen={3} />
      <div className="about-us">
        <div className="container">
          <div className="about-content">
            <div className="row">
              <div className="col-md-6">
                <h2>À propos de nous</h2>
                <p>
                  Notre entreprise a été fondée en 2018 avec pour mission de
                  fournir des solutions logicielles innovantes pour simplifier
                  la vie des gens. Nous croyons en la puissance de la
                  technologie pour résoudre les problèmes du monde moderne.
                </p>
                <p>
                  Notre équipe est composée de passionnés de technologie,
                  d&apos;experts en développement logiciel et de designers
                  talentueux. Ensemble, nous travaillons pour créer des produits
                  exceptionnels qui répondent aux besoins de nos clients.
                </p>
              </div>
              <div className="col-md-6">
                <div className="about-image">
                  <img src="/images/team.jpeg" alt="" srcset="" />
                  {/* <Image src={"/images/team.jpeg"} alt="Notre équipe" /> */}
                </div>
              </div>
            </div>
          </div>
          <div className="culture-section">
            <div className="row">
              <div className="col-md-6">
                <div className="culture-image">
                  <img src="/images/culture.jpg" alt="" srcset="" />
                  {/* <Image src={cultureImage} alt="Notre culture" /> */}
                </div>
              </div>
              <div className="col-md-6">
                <h3>Notre culture d&apos;entreprise</h3>
                <p>
                  Chez notre entreprise, nous croyons en des valeurs
                  fondamentales telles que l&apos;intégrité, le respect et
                  l&apos;excellence. Nous encourageons une culture
                  d&apos;innovation, de collaboration et de croissance
                  personnelle.
                </p>
                <p>
                  Nous accordons une grande importance à la responsabilité
                  sociale et environnementale. C&apos;est pourquoi nous
                  soutenons des initiatives locales visant à améliorer la vie de
                  notre communauté et à préserver l&apos;environnement.
                </p>
              </div>
            </div>
          </div>
          <div className="terms-section">
            <h3>Termes des services</h3>
            <div className="row">
              <div className="col-md-6">
                <div className="service">
                  <h4>Utilisation du service</h4>
                  <p>
                    L&apos;accès à notre service est autorisé aux utilisateurs
                    âgés de 18 ans et plus. L&apos;utilisation de ce service est
                    soumise à votre acceptation et au respect des présentes
                    conditions générales.
                    <br />
                    L&apos;utilisation de notre service à des fins illégales ou
                    interdites par les lois en vigueur est strictement interdite
                  </p>
                </div>
              </div>
              <div className="col-md-6">
                <div className="service">
                  <h4>Confidentialité des données</h4>
                  <p>
                    Nous respectons la confidentialité de vos données
                    personnelles et nous nous engageons à les protéger.
                    Consultez notre politique de confidentialité pour en savoir
                    plus sur la manière dont nous collectons, utilisons et
                    protégeons vos données.
                  </p>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-md-6">
                <div className="service">
                  <h4>Responsabilités des utilisateurs</h4>
                  <p>
                    Vous êtes responsable de toutes les activités réalisées sous
                    votre compte et vous vous engagez à ne pas utiliser notre
                    service à des fins illégales ou interdites.
                    <br />
                    Vous acceptez de ne pas publier, télécharger ou transmettre
                    tout contenu qui est diffamatoire, offensant, obscène, ou
                    qui enfreint les droits d&apos;autrui.
                  </p>
                </div>
              </div>
              <div className="col-md-6">
                <div className="service">
                  <h4>Droit applicable et juridiction compétente</h4>
                  <p>
                    Les présentes conditions générales sont régies par les lois
                    de [votre pays]. Tout litige découlant de l&apos;utilisation
                    de notre service sera soumis à la juridiction exclusive des
                    tribunaux de [votre ville].
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
