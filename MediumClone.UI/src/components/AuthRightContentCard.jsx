import React from "react";
import profilePhoto from "../assets/Default_pfp.svg.png";
import { Link } from "react-router-dom";
export default function AuthRightContentCard() {
  return (
    <>
      <div className="right-content-card">
        <div className="right-content-card-header">
          <img src={profilePhoto} alt="" />
          <span>Simon Dillon</span>
          <span>
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
              <path
                d="M15.16 8c0 .65-.46 1.14-.86 1.57-.23.25-.47.5-.56.72-.1.22-.09.55-.1.88 0 .6-.01 1.3-.48 1.78-.48.48-1.16.5-1.75.5-.32 0-.65.01-.86.1-.2.07-.46.33-.7.57-.42.41-.9.88-1.54.88s-1.12-.47-1.54-.88a2.87 2.87 0 0 0-.7-.58c-.22-.09-.54-.08-.87-.09-.59 0-1.27-.02-1.74-.5s-.48-1.17-.49-1.78c0-.33-.01-.67-.1-.88-.07-.2-.32-.47-.55-.71-.4-.44-.87-.93-.87-1.58s.46-1.14.87-1.58c.23-.24.47-.5.56-.71.09-.22.08-.55.09-.88 0-.6.02-1.3.49-1.78s1.15-.5 1.74-.5c.33 0 .66-.01.86-.1.2-.08.47-.33.7-.57.43-.41.91-.88 1.55-.88.63 0 1.12.47 1.54.88.24.24.49.48.7.58.22.09.54.08.86.09.6 0 1.27.02 1.75.5.47.48.48 1.17.49 1.78 0 .33 0 .67.09.88.08.2.33.47.56.71.4.44.86.93.86 1.58z"
                fill="#437AFF"
              ></path>
              <path
                d="M7.33 10.5c.2 0 .38.08.52.22.13.14.21.33.21.53 0 .07.03.13.07.18a.24.24 0 0 0 .35 0 .25.25 0 0 0 .07-.18c0-.2.08-.39.22-.53a.73.73 0 0 1 .52-.22h1.96c.13 0 .25-.05.34-.15a.5.5 0 0 0 .15-.35V6a.5.5 0 0 0-.15-.35.48.48 0 0 0-.34-.15H9.78c-.33 0-.64.13-.87.37-.23.23-.36.55-.36.88v2.5c0 .07-.02.13-.07.18a.24.24 0 0 1-.35 0 .25.25 0 0 1-.07-.18v-2.5c0-.33-.13-.65-.36-.88a1.21 1.21 0 0 0-.86-.37H5.37a.48.48 0 0 0-.35.15.5.5 0 0 0-.14.35v4c0 .13.05.26.14.35.1.1.22.15.35.15h1.96z"
                fill="#fff"
              ></path>
            </svg>{" "}
            <span>in Fanfare</span>
          </span>
        </div>
        <p className="right-content-card-body">Why I Love "Barbenheimer"</p>
      </div>
      <div className="right-content-card">
        <div className="right-content-card-header">
          <img src={profilePhoto} alt="" />
          <span>Rita McGrath</span>
          <span>
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
              <path
                d="M15.16 8c0 .65-.46 1.14-.86 1.57-.23.25-.47.5-.56.72-.1.22-.09.55-.1.88 0 .6-.01 1.3-.48 1.78-.48.48-1.16.5-1.75.5-.32 0-.65.01-.86.1-.2.07-.46.33-.7.57-.42.41-.9.88-1.54.88s-1.12-.47-1.54-.88a2.87 2.87 0 0 0-.7-.58c-.22-.09-.54-.08-.87-.09-.59 0-1.27-.02-1.74-.5s-.48-1.17-.49-1.78c0-.33-.01-.67-.1-.88-.07-.2-.32-.47-.55-.71-.4-.44-.87-.93-.87-1.58s.46-1.14.87-1.58c.23-.24.47-.5.56-.71.09-.22.08-.55.09-.88 0-.6.02-1.3.49-1.78s1.15-.5 1.74-.5c.33 0 .66-.01.86-.1.2-.08.47-.33.7-.57.43-.41.91-.88 1.55-.88.63 0 1.12.47 1.54.88.24.24.49.48.7.58.22.09.54.08.86.09.6 0 1.27.02 1.75.5.47.48.48 1.17.49 1.78 0 .33 0 .67.09.88.08.2.33.47.56.71.4.44.86.93.86 1.58z"
                fill="#437AFF"
              ></path>
              <path
                d="M7.33 10.5c.2 0 .38.08.52.22.13.14.21.33.21.53 0 .07.03.13.07.18a.24.24 0 0 0 .35 0 .25.25 0 0 0 .07-.18c0-.2.08-.39.22-.53a.73.73 0 0 1 .52-.22h1.96c.13 0 .25-.05.34-.15a.5.5 0 0 0 .15-.35V6a.5.5 0 0 0-.15-.35.48.48 0 0 0-.34-.15H9.78c-.33 0-.64.13-.87.37-.23.23-.36.55-.36.88v2.5c0 .07-.02.13-.07.18a.24.24 0 0 1-.35 0 .25.25 0 0 1-.07-.18v-2.5c0-.33-.13-.65-.36-.88a1.21 1.21 0 0 0-.86-.37H5.37a.48.48 0 0 0-.35.15.5.5 0 0 0-.14.35v4c0 .13.05.26.14.35.1.1.22.15.35.15h1.96z"
                fill="#fff"
              ></path>
            </svg>{" "}
            <span></span>
          </span>
        </div>
        <p className="right-content-card-body">
          Thinking Wrong: How to Trick our Brains into Being More Innovative
        </p>
      </div>
      <div className="right-content-card">
        <div className="right-content-card-header">
          <img src={profilePhoto} alt="" />
          <span>Elin Dieme in The Taoist Online</span>
          <span></span>
        </div>
        <p className="right-content-card-body">
          How Sylvia Plath’s “The Fig Tree” Changed My Perspective on Life
        </p>
      </div>
      <Link>See the full list</Link>
    </>
  );
}
