import React from "react";

const AboutSection = () => {
  return (
    <section
      style={{
        textAlign: "center",
        marginTop: "96px",
        "@media (max-width: 991px)": {
          marginTop: "40px",
        },
      }}
    >
      <h2
        style={{
          color: "var(--Light-Colors-Black---Light, #000)",
          font: "500 33px/1.3 DM Sans, -apple-system, Roboto, Helvetica, sans-serif",
        }}
      >
        About
      </h2>
      <p
        style={{
          color: "var(--Light-Colors-Black---Light, #000)",
          font: "400 20px/1.3 DM Sans, -apple-system, Roboto, Helvetica, sans-serif",
          marginTop: "24px",
        }}
      >
        Who we are and why we do what we do!
      </p>
      <p
        style={{
          color: "var(--Light-Colors-Black---Light, #000)",
          font: "400 16px/27px DM Sans, -apple-system, Roboto, Helvetica, sans-serif",
          marginTop: "46px",
          maxWidth: "670px",
          marginLeft: "auto",
          marginRight: "auto",
          "@media (max-width: 991px)": {
            maxWidth: "100%",
            marginTop: "40px",
          },
        }}
      >
        Duis rutrum dictum libero quis rutrum. Etiam sed neque aliquam,
        sollicitudin ante a, gravida arcu. Nam fringilla molestie velit, eget
        pellentesque risus scelerisque a. Nam ac urna maximus, tempor magna et,
        placerat urna. Curabitur eu magna enim. Proin placerat tortor lacus, ac
        sodales lectus placerat quis.
      </p>
    </section>
  );
};

export default AboutSection;
