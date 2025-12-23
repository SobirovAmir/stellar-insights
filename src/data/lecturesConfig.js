// src/data/lecturesConfig.js

const lecturesConfig = [
  {
    id: 1,
    title: "ASTRONOMICAL IMAGE PROCESSING",
    theory: true,
    slides: "/lectures/lecture1/main.pdf", // есть презентация
    references: [
      "/lectures/lecture1/ref1.pdf",
      "/lectures/lecture1/ref2.pdf",
    ],
    video: false,
    test: true,
  },
  {
    id: 2,
    title: "INTRODUCTION TO THE UNIX OPERATING SYSTEM. GENERAL INFORMATION ABOUT THE UNIX OPERATING SYSTEM, WORKING WITHIN IT",
    theory: true,
    slides: "/lectures/lecture2/main.pdf", // нет презентации
    references: [
      "/lectures/lecture2/ref1.pdf",
    ], // нет references
    video: false,
    test: true,
  },
  {
    id: 3,
    title: "CCD RECEIVERS. PRINCIPLES OF OPERATION OF A CCD RECEIVER",
    theory: true,
    slides: "/lectures/lecture3/main.pdf",
    references: [
      "/lectures/lecture3/ref1.pdf",
      "/lectures/lecture3/ref2.pdf",
      "/lectures/lecture3/ref3.pdf",
      "/lectures/lecture3/ref4.pdf",
      "/lectures/lecture3/ref5.pdf",
    ],
    video: false,
    test: true,
  },
  {
    id: 4,
    title: "PRIMARY ANALYSIS OF IMAGES. IRAF IMAGE ANALYSIS SOFTWARE PACKAGE, ITS STRUCTURE",
    theory: true,
    slides: "/lectures/lecture4/main.pdf",
    references: [
      "/lectures/lecture4/ref1.pdf",
      "/lectures/lecture4/ref2.pdf",
      "/lectures/lecture4/ref3.pdf",
    ],
    video: false,
    test: true,
  },
  {
    id: 5,
    title: "PRELIMINARY ANALYSIS OF ASTRONOMICAL IMAGES",
    theory: true,
    slides: null,
    references: [
      "/lectures/lecture5/ref1.pdf",
      "/lectures/lecture5/ref2.pdf",
      "/lectures/lecture5/ref3.pdf",
      "/lectures/lecture5/ref4.pdf",
      "/lectures/lecture5/ref5.pdf",
      "/lectures/lecture5/ref6.pdf",
      "/lectures/lecture5/ref7.pdf",
    ],
    video: false,
    test: true,
  },
  {
    id: 6,
    title: "PHOTOMETRIC METHODS AND PROGRAMS",
    theory: true,
    slides: "/lectures/lecture6/main.pdf",
    references: [
      "/lectures/lecture6/ref1.pdf",
      "/lectures/lecture6/ref2.pdf",
      "/lectures/lecture6/ref3.pdf",
      "/lectures/lecture6/ref4.pdf",
    ],
    video: false,
    test: true,
  },
  {
    id: 7,
    title: "MASTERING THE USE OF THE GALFIT PROGRAM",
    theory: true,
    slides: null,
    references: [
      "/lectures/lecture7/ref1.pdf",
      "/lectures/lecture7/ref2.pdf",
      "/lectures/lecture7/ref3.pdf",
    ],
    video: false,
    test: true,
  },
  {
    id: 8,
    title: "PHOTOMETRY OF POINT IMAGES IN DENSE AREAS WITH ALLSTAR",
    theory: true,
    slides: null,
    references: [
      "/lectures/lecture8/ref1.pdf",
      "/lectures/lecture8/ref2.pdf",
      "/lectures/lecture8/ref3.pdf",
    ],
    video: false,
    test: true,
  },
  
];

export default lecturesConfig;