function createWidget() {
    const COLOR = "#00a380";
    everyDotOrgDonateButton.createButton({
      selector: "#edo-donate-btn",
      bgColor: COLOR,
    });
    everyDotOrgDonateButton.createWidget({
      selector: "#edo-donate-btn",
      options: {
        nonprofitSlug: "lafoodbank",
        primaryColor: COLOR,
        showInitialMessage: false,
        completeDonationInNewTab: true,
        defaultFrequency: "once",
        infoPages: [
          {
            key: "faq",
            name: "FAQ",
            source: `## How does this donate button work?
    This button is powered by Every.org, a tax-exempt US 501(c)(3) nonprofit building accessible giving infrastructure to help every person and organization do more good.
          `,
          },
        ],
        currencies: [
          {
            countryCodes: ["US"],
            name: "USD",
            symbol: "$",
            minimumAmount: 10,
          },
        ],
      },
    });
  }
  if (window.everyDotOrgDonateButton) {
    createWidget();
  } else {
    document.querySelector(".edo-donate-btn-js").onload = createWidget;
  }
