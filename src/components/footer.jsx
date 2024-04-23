import React from "react";
import { styles } from "../util/style";
import { star } from "../assets";
import { footerLinks, media } from "../util/constants";
function Footer() {
  return (
    <div className={`${styles.flexCenter} ${styles.paddingY} flex-col`}>
      <div className={`${styles.flexStart} sm:flex-row flex-col mb-8 w-full`}>
        <div className="flex-1 flex flex-col justify-start mr-10">
          <img src={star} alt="logo" className="w-[250px] h-[72px] " />
          <p className={`${styles.paragraph} mt-4 max-w-[550px]`}>
            A new way to make payments easy and secure
          </p>
        </div>

        <div className="flex-[1.5] w-full flex flex-row justify-between flex-wrap md:mt-0 mt-10">
          {footerLinks.map((link) => (
            <div
              key={link.title}
              className="flex flex-col ss:my0 my-4 min[150px]"
            >
              <h4 className="font-montserrat font-medium text-[18px] leading-[27px] text-white">
                {link.title}
              </h4>
              {footerLinks.map((link, idx) => (
                <ul className="list-none mt-4" key={idx}>
                  {link.links &&
                    link.links.map((item) => (
                      <li
                        key={item.name}
                        className="font-montserrat font-normal text-[16px] leading-[24px] text-lightWhite hover:text-secondary cursor-pointer "
                      >
                        {item.name}
                      </li>
                    ))}
                </ul>
              ))}
            </div>
          ))}
        </div>
      </div>
      <div className="w-full flex justify-between items-center md:flex-row flex-col pt-6 border-t border-emerald-200">
        <p className="font-montserrat font-normal text-center text-18 text-white">
          Copyright 2024 DEV. All Right Reserved
        </p>
        <div className="flex flex-row md:mt-0 mt-6">
          {media.map((social, idx) => (
            <img
              key={social.id}
              src={social.icon}
              className={`w-[21px] h-[21px] object-contain cursor-pointer ${
                idx !== media.length - 1 ? "mr-6" : "mr-0"
              } `}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Footer;
