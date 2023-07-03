export const navigationLinks = [
  {
    label: "Home",
    path: "/",
  },
  {
    label: "Sobre",
    path: "/sobre",
  },
  {
    label: "Blog",
    path: "/blog",
  },
  {
    label: "Todo",
    path: "/todo",
    isDropdown: true,
    dropDownItems: [
      {
        label: "Todo CSR",
        path: "/todocsr",
      },
    ],
  },
];
