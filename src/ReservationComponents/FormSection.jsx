import React from "react";
import "./FormSection.css";
import LogoIconReserv from "../images/LogoReserv.png";
import FormItem from "./FormItem";

export default function FormSection() {
  return (
    <div className="section-form">
      <img src={LogoIconReserv} className="logo-reservation-section" alt="" />

      <div>
      <FormItem/>
      </div>
    </div>
  );
}
