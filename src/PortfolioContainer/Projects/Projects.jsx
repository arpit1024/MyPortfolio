import "./Projects.css";
import ScreenHeading from "../../utilities/ScreenHeading/ScreenHeading";
import Animations from "../../utilities/Animations";
import ScrollService from "../../utilities/ScrollService";

export const Projects = (props) => {
  console.log(props);

  let fadeInScreenHandler = (screen) => {
    if (screen.fadeInScreen !== props.id) return;
    Animations.animations.fadeInScreen(props.id);
  };

  const fadeInSubscription =
    ScrollService.currentScreenFadeIn.subscribe(fadeInScreenHandler);

  return (
    <div className="top-container-projects" id={props.id || ""}>
      <ScreenHeading title={"Projects"} subHeading={"Some Highlights"} />
      <div className="projects-container">
        <div className="project-parent">
          <div className="projects-sub-container">
            <div className="project2-container">
              <div className="image-container">
                <img
                  className="img2"
                  src="https://porfolio-arpit-arpitshrivastava764-gmailcom.vercel.app/meesho.png"
                  alt=""
                />
              </div>
              <div className="project-title">Mesho Clone</div>
              <div className="project-description">
                Meesho is an indian e-commerce company, headquartered in
                Bangalore, India. An Ecommerce website for selling fashion and
                lifestyle products.
              </div>
              <div className="tech-stack">
                <img
                  src="https://www.pinclipart.com/picdir/middle/537-5374089_react-js-logo-clipart.png"
                  alt=""
                />
                <img
                  src="https://code9developers.github.io/Integration/res/images/logos/logo-mongodb-png-mongodb-logo-anything-but-the-simplest-of-web-applications-requires-a-database-to-store-and-serve-content-from-choosing-the-right-database-and-structuring-413.png"
                  alt=""
                />
                <img
                  src="https://porfolio-arpit-arpitshrivastava764-gmailcom.vercel.app/express.png"
                  alt=""
                />
                <img
                  src="https://www.technoscore.com/images/services/node-js-icon.png"
                  alt=""
                />
                <img
                  src="https://porfolio-arpit-arpitshrivastava764-gmailcom.vercel.app/bootstrap.png"
                  alt=""
                />
                <img
                  className="herokuImg"
                  src="https://api.slack.com/img/api/hosting_heroku.png"
                  alt=""
                />
              </div>
              <div className="deploy-btns">
                <a href="https://meesho-clone.vercel.app/" target="_blank">
                  <button className="projBtn1">Demo</button>
                </a>
                <a
                  href="https://github.com/arpit1024/meesho-clone"
                  target="_blank"
                >
                  <button className="projBtn2">Code</button>
                </a>
              </div>
            </div>
            <div className="project2-container">
              <div className="image-container">
                <img
                  className="img2"
                  src="https://img2.hkrtcdn.com/7579/bnr_757891_o.png"
                  alt=""
                />
              </div>
              <div className="project-title">Healthkart Clone</div>
              <div className="project-description">
                HealthKart- A great place for people serious about health and
                fitness. HealthKart is your ideal platform for all nutrition,
                health and fitness products. We serve millions of customers
                through our dedicated online and offline.
              </div>
              <div className="tech-stack">
                <img
                  src="https://th.bing.com/th/id/R.f7c6c46d9ada84db77d452b3d65fdab5?rik=2NOie%2f5B5NuRQw&riu=http%3a%2f%2ffindicons.com%2ffiles%2ficons%2f2420%2fcoded%2f512%2fpage_html.png&ehk=mzeV4Cda%2fIwJnj39TZeY3%2b6Cq1%2f3BeLVuArOmZzK8PA%3d&risl=&pid=ImgRaw&r=0"
                  alt=""
                />
                <img
                  src="https://th.bing.com/th/id/R.e029f7fc333bf90439647699277948f1?rik=ZJXSV0z4T%2fe1hg&riu=http%3a%2f%2fwww.newdesignfile.com%2fpostpic%2f2011%2f12%2fcss-style-sheet_99610.png&ehk=fPCEt4xqr5CMLYaP5RKrifQ3H6I1EQPo0eypqbAn0ac%3d&risl=&pid=ImgRaw&r=0"
                  alt=""
                />
                <img
                  src="https://zetta-solutions.net/images/logos/javascript.png"
                  alt=""
                />
                <img
                  src="https://www.technoscore.com/images/services/node-js-icon.png"
                  alt=""
                />
                <img
                  src="https://code9developers.github.io/Integration/res/images/logos/logo-mongodb-png-mongodb-logo-anything-but-the-simplest-of-web-applications-requires-a-database-to-store-and-serve-content-from-choosing-the-right-database-and-structuring-413.png"
                  alt=""
                />
                <img
                  className="herokuImg"
                  src="https://api.slack.com/img/api/hosting_heroku.png"
                  alt=""
                />
              </div>
              <div className="deploy-btns">
                <a
                  href="https://hemantjayas.github.io/HealthKart/index.html"
                  target="_blank"
                >
                  <button className="projBtn1">Demo</button>
                </a>
                <a
                  href="https://github.com/hemantjayas/HealthKart"
                  target="_blank"
                >
                  <button className="projBtn2">Code</button>
                </a>
              </div>
            </div>
            <div className="project1-container">
              <div className="image-container">
                <img
                  className="img1"
                  src="https://xp.io/storage/sD33yqv.png"
                  alt=""
                />
              </div>
              <div className="project-title">JioMart Clone</div>
              <div className="project-description">
                JioMart is an online grocery store that aims to provide 50,000+
                grocery products such as fashion, home essentials, and lifestyle
                products, at competitive discounts and express delivery at your
                doorstep
              </div>
              <div className="tech-stack">
                <img
                  src="https://th.bing.com/th/id/R.f7c6c46d9ada84db77d452b3d65fdab5?rik=2NOie%2f5B5NuRQw&riu=http%3a%2f%2ffindicons.com%2ffiles%2ficons%2f2420%2fcoded%2f512%2fpage_html.png&ehk=mzeV4Cda%2fIwJnj39TZeY3%2b6Cq1%2f3BeLVuArOmZzK8PA%3d&risl=&pid=ImgRaw&r=0"
                  alt=""
                />
                <img
                  src="https://th.bing.com/th/id/R.e029f7fc333bf90439647699277948f1?rik=ZJXSV0z4T%2fe1hg&riu=http%3a%2f%2fwww.newdesignfile.com%2fpostpic%2f2011%2f12%2fcss-style-sheet_99610.png&ehk=fPCEt4xqr5CMLYaP5RKrifQ3H6I1EQPo0eypqbAn0ac%3d&risl=&pid=ImgRaw&r=0"
                  alt=""
                />
                <img
                  src="https://zetta-solutions.net/images/logos/javascript.png"
                  alt=""
                />
              </div>
              <div className="deploy-btns">
                <a
                  href="https://vaibhavkothiyal.github.io/jiomartClone.github.io/html/Index.html"
                  target="_blank"
                >
                  <button className="projBtn1">Demo</button>
                </a>
                <a
                  href="https://github.com/vaibhavkothiyal/jiomartClone.github.io"
                  target="_blank"
                >
                  <button className="projBtn2">Code</button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
