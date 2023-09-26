import React from "react";
import { useEffect, useState } from "react";

import style from "./Cards.css";
import background from "./Asset/background.jpg";
import { FaFacebookF, FaTwitter, FaInstagram, FaGithub } from "react-icons/fa6";
import User from "./Asset/man.png";

function Cards() {
  const [posts, setposts] = useState(null);
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((data) => data.json())
      .then((data) => {
        setposts(data);
      });
  }, []);

  return (
    <>
      <div className="container">
        <div class="row">
          {posts ? (
            <>
              {posts.map((post) => {
                return (
                  <>
                    <div class="col">
                      <div className="wrapper mt-5 puff-in-center">
                        <div className="box">
                          <div className="profile-img tilt-in-tl puff-in-center1">
                            <img src={User} alt="" srcset="" />
                          </div>
                          <h2 className="puff-in-center2">
                            {post.name}
                            <span>City : {post.address.city}</span>
                          </h2>
                          <p className="puff-in-center2">
                            Front-End Developer @<br />
                            {post.company.name}
                          </p>
                          <p className="btn-area puff-in-center2">
                            <a href={post.website}>Website</a>
                            <a className="ex" href="#">
                              Projects
                            </a>
                          </p>
                          <div className="socials slide-in-blurred-top">
                            <a href="#" className="a1">
                              <i>
                                <FaFacebookF />
                              </i>
                            </a>
                            <a
                              href="https://twitter.com/_heismanish"
                              className="a2"
                            >
                              <i>
                                <FaTwitter />{" "}
                              </i>
                            </a>
                            <a
                              href="https://in.pinterest.com/heisharsh"
                              className="a3"
                            >
                              <i>
                                <FaGithub />
                              </i>
                            </a>
                            <a
                              href="https://www.instagram.com/heismanish/"
                              className="a4"
                            >
                              <i>
                                <FaInstagram />
                              </i>
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </>
                );
              })}
            </>
          ) : (
            <div class="spinner">
              <div></div>
              <div></div>
              <div></div>
              <div></div>
              <div></div>
            </div>
          )}
        </div>
      </div>
    </>
  );
}

export default Cards;
