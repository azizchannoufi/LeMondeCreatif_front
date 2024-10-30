/**
 * This code was generated by Builder.io.
 */
import React from "react";

const CouponSection = () => {
  return (
    <>
      <div
        style={{
          color: "var(--Light-Colors-Black---Light, #000)",
          font: "400 16px/2 DM Sans, sans-serif",
        }}
      >
        Returning customer?{" "}
        <span style={{ color: "rgba(0,0,0,1)" }}>Click here to login</span>
      </div>
      <div
        style={{
          color: "var(--Light-Colors-Black---Light, #000)",
          marginTop: "26px",
          font: "400 16px/2 DM Sans, sans-serif",
        }}
      >
        Have a coupon?{" "}
        <span style={{ color: "rgba(0,0,0,1)" }}>
          Click here to enter your code
        </span>
      </div>
      <div
        style={{
          border: "1px solid var(--Light-Colors-Gray---Light, #d8d8d8)",
          marginTop: "34px",
          width: "580px",
          maxWidth: "100%",
          padding: "24px 24px 40px",
          "@media (max-width: 991px)": {
            padding: "0 20px",
          },
        }}
      >
        <div
          style={{
            gap: "20px",
            display: "flex",
            "@media (max-width: 991px)": {
              flexDirection: "column",
              alignItems: "stretch",
              gap: "0px",
            },
          }}
        >
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              lineHeight: "normal",
              width: "68%",
              marginLeft: "0px",
              "@media (max-width: 991px)": {
                width: "100%",
              },
            }}
          >
            <div
              style={{
                display: "flex",
                flexGrow: "1",
                flexDirection: "column",
                alignItems: "start",
                fontFamily: "DM Sans, sans-serif",
                color: "var(--Light-Colors-Dark-gray---Light, #707070)",
                fontWeight: "400",
                "@media (max-width: 991px)": {
                  marginTop: "29px",
                },
              }}
            >
              <div
                style={{
                  fontSize: "16px",
                  lineHeight: "2",
                  alignSelf: "stretch",
                }}
              >
                If you have a coupon code, please apply it below.
              </div>
              <div
                style={{
                  fontSize: "12px",
                  lineHeight: "2",
                  marginTop: "61px",
                  "@media (max-width: 991px)": {
                    marginTop: "40px",
                  },
                }}
              >
                Coupon Code
              </div>
              <div
                style={{
                  backgroundColor: "#d8d8d8",
                  marginTop: "20px",
                  width: "336px",
                  maxWidth: "100%",
                  height: "1px",
                  border: "1px solid rgba(216, 216, 216, 1)",
                }}
              />
            </div>
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              lineHeight: "normal",
              width: "32%",
              marginLeft: "20px",
              "@media (max-width: 991px)": {
                width: "100%",
              },
            }}
          >
            <button
              style={{
                borderRadius: "4px",
                border: "1px solid var(--Light-Colors-Black---Light, #000)",
                background: "var(--Light-Colors-Black---Light, #000)",
                backgroundColor: "var(--Light-Colors-Black---Light, #000)",
                marginTop: "64px",
                flexGrow: "1",
                color: "var(--Light-Colors-White---Light, #fff)",
                width: "100%",
                padding: "16px 24px",
                font: "700 16px DM Sans, sans-serif",
                "@media (max-width: 991px)": {
                  marginTop: "40px",
                  padding: "0 20px",
                },
              }}
            >
              APPLY COUPON
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default CouponSection;