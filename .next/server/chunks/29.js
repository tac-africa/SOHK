"use strict";
exports.id = 29;
exports.ids = [29];
exports.modules = {

/***/ 6029:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ heroBanner)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "react-bootstrap"
var external_react_bootstrap_ = __webpack_require__(358);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
;// CONCATENATED MODULE: ./components/layout/nav_bar/miniNav.jsx

/* eslint-disable react/jsx-key */ 

const MiniNav = ({ activeLink  })=>{
    return(/*#__PURE__*/ (0,jsx_runtime_.jsxs)(external_react_bootstrap_.Container, {
        fluid: true,
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx(external_react_bootstrap_.Container, {
                children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    className: "hidden md:block",
                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: "flex justify-between uppercase text-xs mt-8",
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                        children: /*#__PURE__*/ jsx_runtime_.jsx(next_link["default"], {
                                            href: "/",
                                            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("a", {
                                                style: {
                                                    color: '#144388'
                                                },
                                                children: [
                                                    'Home  ',
                                                    "\xa0 >"
                                                ]
                                            })
                                        })
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                        children: /*#__PURE__*/ jsx_runtime_.jsx(next_link["default"], {
                                            href: "/about_us",
                                            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("a", {
                                                style: {
                                                    color: '#144388'
                                                },
                                                children: [
                                                    "About us",
                                                    " \xa0 >"
                                                ]
                                            })
                                        })
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                        children: /*#__PURE__*/ jsx_runtime_.jsx(next_link["default"], {
                                            href: "/about_us",
                                            children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                children: activeLink
                                            })
                                        })
                                    })
                                ]
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                children: /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                    children: /*#__PURE__*/ jsx_runtime_.jsx(next_link["default"], {
                                        href: "/",
                                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("a", {
                                            children: [
                                                'become a volunteer' + ' ',
                                                "\xa0 ",
                                                /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                    style: {
                                                        fontWeight: 'bold'
                                                    },
                                                    children: " ⧁ "
                                                })
                                            ]
                                        })
                                    })
                                })
                            })
                        ]
                    })
                })
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("hr", {
                className: "w-full h-px text-gray-600 mb-16"
            })
        ]
    }));
};
/* harmony default export */ const miniNav = (MiniNav);

;// CONCATENATED MODULE: ./components/layout/nav_bar/heroBanner.jsx

/* eslint-disable @next/next/no-img-element */ /* eslint-disable react/jsx-key */ 
const HeroBanner = ({ backgroundImg , text , activeLink  })=>{
    return(/*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: 'h-40vh bg-fixed bg-center bg-cover bg-no-repeat',
                style: {
                    // linear-gradient(rgba(5, 0, 32, 0.697), rgba(5, 0, 32, 0.697)), 
                    backgroundImage: `url(${backgroundImg})`
                },
                children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    className: "flex items-center justify-center h-full",
                    children: /*#__PURE__*/ jsx_runtime_.jsx("h2", {
                        className: "text-white font-bold capitalize"
                    })
                })
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(miniNav, {
                activeLink: activeLink
            })
        ]
    }));
};
/* harmony default export */ const heroBanner = (HeroBanner);


/***/ })

};
;