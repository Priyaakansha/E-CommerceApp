import React from "react";
import Layout from "./../components/Layout/Layout";

const Policy = () => {
  return (
    <Layout title={"Privacy Policy"}>
      <div className="row contactus ">
        <div className="col-md-6 ">
          <img
            src="/images/contactus.jpeg"
            alt="contactus"
            style={{ width: "100%" }}
          />
        </div>
        <div className="col-md-4">
          <br/><br/>
          <p><b>Privacy Policy:</b>

Details data collection, use, storage, and protection.
Describes types of collected data and compliance with privacy laws.</p>
          <p><b>Terms of Service:</b>

Outlines user responsibilities, prohibited activities, and consequences for violations.</p>
          <p><b>Refund and Return Policy:</b>

Explains conditions for returns/exchanges, process, timeframes, and fees.</p>
          <p><b>Shipping and Delivery Policy:</b>

Specifies shipping options, delivery times, costs, and potential delays.</p>
          <p><b>Cancellation Policy:</b>

Covers order cancellation process, timing, and any associated fees.</p>
          <p><b>Payment and Security Policy:</b>

Lists accepted payment methods, payment security measures, and fraud protocols.
</p>
          
        </div>
      </div>
    </Layout>
  );
};

export default Policy;