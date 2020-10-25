import React, { Component } from "react";
import "./App.css";
import "./AppMobile.css";
import images from "./images";
import { IconContext } from "react-icons";
import { MdApps, MdEmail, MdPhone, MdVpnKey, MdWork } from "react-icons/md";
import {
  FaAward,
  FaGraduationCap,
  FaMedium,
  FaPeopleCarry,
  FaSkype,
  FaUser,
} from "react-icons/fa";
import { GoProject, GoRepoForked } from "react-icons/go";
import moment from "moment";

export default class App extends Component {
  render() {
    return (
      <div className={"viewPort"}>
        {this.renderHeader()}
        {this.renderBody()}
      </div>
    );
  }

  renderHeader = () => {
    return (
      <div className={"viewHeader"}>
        <img alt={"my avatar"} className={"avatar"} src={images.avatar} />

        <div className={"viewInfoHeader"}>
          <span className={"textNameHeader"}>Huynh Dung</span>
          <span className={"textMajorHeader"}>Software Developer</span>
          <span className={"textMajorHeader"}>Ho Chi Minh City, Viet Nam</span>
        </div>

        <div className={"viewContact"}>
          <div className={"viewWrapItemContact"}>
            <div className={"btnItemContact"}>
              <IconContext.Provider value={{ color: "white", size: "15px" }}>
                <MdEmail />
              </IconContext.Provider>
              <a
                href={"mailto:12520082@gm.uit.edu.vn"}
                target="_blank"
                rel="noopener noreferrer"
                style={{ "text-decoration": "none" }}
              >
                <span className={"textItemContact"}>
                  12520082@gm.uit.edu.vn
                </span>
              </a>
            </div>
          </div>

          <div className={"viewWrapItemContact"}>
            <div className={"btnItemContact"}>
              <IconContext.Provider value={{ color: "white", size: "15px" }}>
                <FaSkype />
              </IconContext.Provider>
              <a
                href={"skype:live:12520082?chat"}
                target="_blank"
                rel="noopener noreferrer"
                style={{ "text-decoration": "none" }}
              >
                <span className={"textItemContact"}>live:12520082</span>
              </a>
            </div>
          </div>

          <div className={"viewWrapItemContact"}>
            <div className={"btnItemContact"}>
              <IconContext.Provider value={{ color: "white", size: "15px" }}>
                <MdPhone />
              </IconContext.Provider>
              <span className={"textItemContact"}>0964142239</span>
            </div>
          </div>
        </div>
      </div>
    );
  };

  renderBody = () => {
    let a = moment();
    let b = moment([2017, 9, 26]);

    let years = a.diff(b, "year");
    b.add(years, "years");

    return (
      <div className={"viewBody"}>
        {/*Education*/}
        <div className={"viewWrapItemBody"}>
          <div className={"viewWrapTitleItemBody"}>
            <IconContext.Provider value={{ color: "#f99930", size: "20px" }}>
              <FaGraduationCap />
            </IconContext.Provider>
            <span className={"textTitleItemBody"}>Education</span>
          </div>
          <div className={"viewWrapContentItemBody"}>
            <span className={"textContentItemBody"}>
              University of Information Technology (UIT)
            </span>
            <span className={"textContentItemBody2"}>2012 - 2017</span>
            <span className={"textContentItemBody1"}>
              Major: Communications and Computer Networks
            </span>
          </div>
        </div>
        <div className={"breakLine"} />
        {/*Career Profile*/}
        <div className={"viewWrapItemBody"}>
          <div className={"viewWrapTitleItemBody"}>
            <IconContext.Provider value={{ color: "#f99930", size: "20px" }}>
              <FaUser />
            </IconContext.Provider>
            <span className={"textTitleItemBody"}>Career Profile</span>
          </div>
          <div className={"viewWrapContentItemBody"}>
            <span
              className={"textContentItemBody1"}
            >{`Software developer with ${years} years experience. I work with React Native, Flutter and NodeJS`}</span>
            <span className={"textContentItemBody1"}>
              Having ability to build the backend with common functions, full
              basic flow to communicate between backend and client
            </span>
            <span className={"textContentItemBody1"}>
              Learning new languages or platforms quickly with a positive
              attitude. Can join in all process of product development from
              initialize to store release
            </span>
          </div>
        </div>

        <div className={"breakLine"} />

        {/*Work Experience*/}
        <div className={"viewWrapItemBody"}>
          <div className={"viewWrapTitleItemBody"}>
            <IconContext.Provider value={{ color: "#f99930", size: "20px" }}>
              <MdWork />
            </IconContext.Provider>
            <span className={"textTitleItemBody"}>Experience</span>
          </div>
          <div className={"viewWrapContentItemBody"}>
            <span className={"textContentItemBody"}>
              Software Developer Intern Avalon Solution Viet Nam
            </span>
            <span className={"textContentItemBody2"}>
              May 2017 - August 2017
            </span>
            <div style={{ height: "10px" }} />
            <span className={"textContentItemBody"}>
              Software Developer at Hanbiro Korean
            </span>
            <span className={"textContentItemBody2"}>
              December 2017 - Present
            </span>
          </div>
        </div>

        <div className={"breakLine"} />

        {/*My product*/}
        <div className={"viewWrapItemBody"}>
          <div className={"viewWrapTitleItemBody"}>
            <IconContext.Provider value={{ color: "#f99930", size: "20px" }}>
              <MdApps />
            </IconContext.Provider>
            <span className={"textTitleItemBody"}>My Product</span>
          </div>
          <div className={"viewWrapContentItemBody"}>
            <span className={"textContentItemBody"}>Listar</span>

            <span className={"textContentItemBody1"}>
              Listar is mobile React Native app template for classified
              directory listing industry. This suitable for many kind of mobile
              directory listing like store locator, tourists or city guide,
              event & attraction places, property directory.
            </span>

            <a
              className={"textContentItemBody1"}
              href={
                "https://codecanyon.net/item/listar-react-native-directory-listing-app-template/24829545"
              }
              target="_blank"
              rel="noopener noreferrer"
            >
              https://codecanyon.net/item/listar-react-native-directory-listing-app-template/24829545
            </a>
            <div style={{ height: "10px" }} />
            <span className={"textContentItemBody"}>Listar Pro</span>

            <span className={"textContentItemBody1"}>
              Listar Pro is a mobile directory listing app for classified
              directory listing industry. It uses React Native framework and
              work with WordPress backend. It’s suitable for many kinds of
              mobile directory listing like store locator, tourists or city
              guide, event & attraction places, property directory.
            </span>

            <a
              className={"textContentItemBody1"}
              href={
                "https://codecanyon.net/item/listar-pro-mobile-directory-listing-app-for-react-native-wordpress/29024132"
              }
              target="_blank"
              rel="noopener noreferrer"
            >
              https://codecanyon.net/item/listar-pro-mobile-directory-listing-app-for-react-native-wordpress/29024132
            </a>
            <div style={{ height: "10px" }} />
            <span className={"textContentItemBody"}>Listar Flux</span>

            <span className={"textContentItemBody1"}>
              Listar Flux is mobile directory listing app template for
              classified directory listing industry. It uses Flutter Framework
              by Google for development. It’s suitable for many kind of mobile
              directory listing like store locator, tourists or city guide,
              event & attraction places, property directory.
            </span>

            <a
              className={"textContentItemBody1"}
              href={
                "https://codecanyon.net/item/listar-flux-mobile-directory-listing-app-template-for-flutter/25559387"
              }
              target="_blank"
              rel="noopener noreferrer"
            >
              https://codecanyon.net/item/listar-flux-mobile-directory-listing-app-template-for-flutter/25559387
            </a>
            <div style={{ height: "10px" }} />
            <span className={"textContentItemBody"}>Listar Flux Pro</span>

            <span className={"textContentItemBody1"}>
              Listar FluxPro is a mobile directory listing app for classified
              directory listing industry. It uses Flutter Framework by Google
              and work with WordPress backend. It’s suitable for many kinds of
              mobile directory listing like store locator, tourists or city
              guide, event & attraction places, property directory.
            </span>

            <a
              className={"textContentItemBody1"}
              href={
                "https://codecanyon.net/item/listar-fluxpro-mobile-directory-listing-app-for-flutter-wordpress/28292407"
              }
              target="_blank"
              rel="noopener noreferrer"
            >
              https://codecanyon.net/item/listar-fluxpro-mobile-directory-listing-app-for-flutter-wordpress/28292407
            </a>
            <div style={{ height: "10px" }} />
            <span className={"textContentItemBody"}>Felix Travel</span>

            <span className={"textContentItemBody1"}>
              Felix Travel is a mobile React Native app template for universal
              travel application or booking industry. The template supports many
              kinds of booking modules like hotel reservation, tour booking, car
              rental, flight booking, cruise booking, shuttle bus and event
              booking.
            </span>

            <a
              className={"textContentItemBody1"}
              href={
                "https://codecanyon.net/item/felix-travel-complete-react-native-travel-app-template/24277209"
              }
              target="_blank"
              rel="noopener noreferrer"
            >
              https://codecanyon.net/item/felix-travel-complete-react-native-travel-app-template/24277209
            </a>
          </div>
        </div>

        <div className={"breakLine"} />

        {/*Repository*/}
        <div className={"viewWrapItemBody"}>
          <div className={"viewWrapTitleItemBody"}>
            <IconContext.Provider value={{ color: "#f99930", size: "20px" }}>
              <GoRepoForked />
            </IconContext.Provider>
            <span className={"textTitleItemBody"}>Repository</span>
          </div>
          <div className={"viewWrapContentItemBody"}>
            <span className={"textContentItemBody"}>Github</span>
            <a
              className={"textContentItemBody1"}
              href={"https://github.com/wem2017"}
              target="_blank"
              rel="noopener noreferrer"
            >
              https://github.com/wem2017
            </a>
          </div>
        </div>

        <div className={"breakLine"} />

        {/*Key Skills*/}
        <div className={"viewWrapItemBody"}>
          <div className={"viewWrapTitleItemBody"}>
            <IconContext.Provider value={{ color: "#f99930", size: "20px" }}>
              <MdVpnKey />
            </IconContext.Provider>
            <span className={"textTitleItemBody"}>Key Skills</span>
          </div>
          <div className={"viewWrapContentItemBody"}>
            <span className={"textContentItemBody"}>Mobile</span>
            <div className={"viewWrapChildContent"}>
              <span className={"textContentItemBody1"}>
                &#9679; React Native - good
              </span>
              <span className={"textContentItemBody1"}>
                &#9679; Flutter - good
              </span>
              <span className={"textContentItemBody1"}>
                &#9679; iOS - basic
              </span>
            </div>
            <span className={"textContentItemBody"}>Front-End</span>
            <div className={"viewWrapChildContent"}>
              <span className={"textContentItemBody1"}>
                &#9679; ReactJS - intermediate
              </span>
              <span className={"textContentItemBody1"}>
                &#9679; HTML/CSS - intermediate
              </span>
              <span className={"textContentItemBody1"}>
                &#9679; AngularJS - basic
              </span>
            </div>
            <span className={"textContentItemBody"}>Back-End</span>
            <div className={"viewWrapChildContent"}>
              <span className={"textContentItemBody1"}>
                &#9679; NodeJS - intermediate
              </span>
              <span className={"textContentItemBody1"}>
                &#9679; PHP - basic
              </span>
            </div>
            <span className={"textContentItemBody"}>Database</span>
            <div className={"viewWrapChildContent"}>
              <span className={"textContentItemBody1"}>
                &#9679; SQLite - intermediate
              </span>
              <span className={"textContentItemBody1"}>
                &#9679; MySQL - basic
              </span>
            </div>
            <span className={"textContentItemBody"}>Other</span>
            <div className={"viewWrapChildContent"}>
              <span className={"textContentItemBody1"}>&#9679; Git - good</span>
              <span className={"textContentItemBody1"}>
                &#9679; Firebase with Cloud Fucntion/Database/Cloud Messaging -
                intermediate
              </span>
              <span className={"textContentItemBody1"}>
                &#9679; ElectronJS Desktop Cross-Platform - intermediate
              </span>
              <span className={"textContentItemBody1"}>
                &#9679; Socket IO - intermediate
              </span>
              <span className={"textContentItemBody1"}>
                &#9679; Apache/Nginx Web Server - basic
              </span>
              <span className={"textContentItemBody1"}>
                &#9679; Google Cloud - basic
              </span>
              <span className={"textContentItemBody1"}>
                &#9679; CI/CD Docker - basic
              </span>
              <span className={"textContentItemBody1"}>
                &#9679; Unit/Function/Automation Test - basic
              </span>
            </div>
          </div>
        </div>

        {/*Project*/}
        <div className={"breakLine"} />

        <div className={"viewWrapItemBody"}>
          <div className={"viewWrapTitleItemBody"}>
            <IconContext.Provider value={{ color: "#f99930", size: "20px" }}>
              <GoProject />
            </IconContext.Provider>
            <span className={"textTitleItemBody"}>Projects</span>
          </div>
          <div className={"viewWrapContentItemBody"}>
            <span className={"textContentItemBody"}>React Native</span>
            <div className={"viewWrapChildContent"}>
              <span className={"textContentItemBody1"}>
                &#9679; Emartmall (contribution rate 50%) - Application that
                allows shopping for products of the Korean supermarket Emart.
              </span>
              <span className={"textContentItemBody1"}>
                &#9679; Hanbiro HR (internal app, contribution rate 70%) -
                Hanbiro HR App is the fastest and easiest way to manage your
                vacation, attendance status and statistics from commute
                management. You can easily use your HR-releasted functions in
                one hand mobile.
              </span>
            </div>
            <span className={"textContentItemBody"}>ElectronJS</span>
            <div className={"viewWrapChildContent"}>
              <span className={"textContentItemBody1"}>
                &#9679; HanbiroTalk2 (internal app, contribution rate 30%) -
                Electron Desktop Application Hanbiro Talk feature provides
                internal online chat within the company. The data will be stored
                on Big Data Server and synchronized in real-time.
              </span>
            </div>
            <span className={"textContentItemBody"}>Web RTC</span>
            <div className={"viewWrapChildContent"}>
              <span className={"textContentItemBody1"}>
                &#9679; The Web Application is a part of video call HanbiroTalk2
                (internal app, contribution rate 50%) - Quest video conference
                and Screen share
              </span>
            </div>
          </div>
        </div>
      </div>
    );
  };
}
