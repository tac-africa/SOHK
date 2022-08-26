"use strict";
(() => {
var exports = {};
exports.id = 888;
exports.ids = [888];
exports.modules = {

/***/ 7667:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ _app)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
;// CONCATENATED MODULE: ./components/dropdownButton.jsx

/* eslint-disable react/jsx-key */ 

const DropDownButton = ({ isFooter , setMenuState , menuState , label , content , i ,  })=>{
    const { 0: isShown , 1: setIsShown  } = (0,external_react_.useState)(false);
    return(/*#__PURE__*/ (0,jsx_runtime_.jsxs)("li", {
        onMouseOver: ()=>setIsShown(true)
        ,
        onMouseLeave: ()=>setIsShown(false)
        ,
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("button", {
                id: "dropdownButton",
                className: "capitalize hover:bg-blue-300 focus:ring-4 focus:outline-none font-medium rounded-lg text-sm 2xl:text-lg px-4 py-2.5 text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800",
                type: "button",
                children: [
                    label,
                    ' ',
                    !isFooter && /*#__PURE__*/ jsx_runtime_.jsx("svg", {
                        className: "w-4 h-4 ml-2",
                        fill: "none",
                        stroke: "currentColor",
                        viewBox: "0 0 24 24",
                        xmlns: "http://www.w3.org/2000/svg",
                        children: /*#__PURE__*/ jsx_runtime_.jsx("path", {
                            strokeLinecap: "round",
                            strokeLinejoin: "round",
                            strokeWidth: "2",
                            d: "M19 9l-7 7-7-7"
                        })
                    })
                ]
            }),
            isShown && /*#__PURE__*/ jsx_runtime_.jsx("div", {
                id: "dropdownMenu",
                className: ` ${isFooter ? "inline-block " : "block "}  bg-white z-10 absolute divide-gray-100 rounded shadow dark:bg-gray-700 `,
                children: /*#__PURE__*/ jsx_runtime_.jsx("ul", {
                    className: ` ${content[0].name ? "py-1 px-2" : undefined} text-sm divide-y text-gray-700 dark:text-gray-200`,
                    children: content.map(({ name , href  }, i)=>/*#__PURE__*/ jsx_runtime_.jsx("li", {
                            onMouseEnter: ()=>setIsShown(true)
                            ,
                            onMouseLeave: ()=>setIsShown(false)
                            ,
                            children: /*#__PURE__*/ jsx_runtime_.jsx(next_link["default"], {
                                href: href,
                                children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                    onClick: ()=>{
                                        setIsShown(!isShown);
                                        setMenuState(!menuState);
                                    },
                                    className: `capitalize block ${content[0].name ? "px-4 py-2" : undefined} 2xl:text-lg text-[#393E46] hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white `,
                                    children: name
                                })
                            })
                        })
                    )
                })
            })
        ]
    }, i));
};
/* harmony default export */ const dropdownButton = (DropDownButton);

;// CONCATENATED MODULE: ./pages/api/navLinks.js
const data = [
    {
        label: 'Home',
        content: [
            {
                href: ''
            }
        ],
        type: 'nav link'
    },
    {
        label: 'about',
        content: [
            {
                href: '/about_us',
                name: 'About Us'
            },
            {
                href: '/founder',
                name: 'Founder'
            },
            {
                href: '/our_team',
                name: 'Our Team'
            }, 
        ],
        type: 'dropdown button'
    },
    {
        label: 'Activities',
        content: [
            {
                href: '/sports',
                name: 'sports'
            },
            {
                href: '/office_on_the_go',
                name: 'office on the go'
            },
            {
                href: '/brain_gym ',
                name: 'brain gym'
            },
            {
                href: '/tec_hub',
                name: 'tec hub'
            },
            {
                href: '/digital_specialized_training',
                name: 'digital_specialized_training'
            },
            {
                href: '/events',
                name: 'events'
            }, 
        ],
        type: 'dropdown button'
    },
    {
        label: 'contact',
        content: [
            {
                href: 'contact'
            }
        ],
        type: 'nav link'
    },
    {
        label: 'Events',
        content: [
            {
                href: 'tac_events'
            }
        ],
        type: 'button',
        details: {
            variant: 'outline-primary'
        }
    }
];

;// CONCATENATED MODULE: ./components/layout/footer/Footer.jsx

/* eslint-disable react/jsx-key */ 



function Footer() {
    const { 0: menuState1 , 1: setMenuState  } = (0,external_react_.useState)(false);
    const toggleButton = (0,external_react_.useCallback)(()=>{
        setMenuState((menuState)=>!menuState
        );
    }, []);
    return(/*#__PURE__*/ jsx_runtime_.jsx("div", {
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
            className: "pt-12 pb-12 text-white bg-sweet_blue",
            children: [
                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    className: "container mx-auto sm:px-4 max-w-full ",
                    children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: "container mt-md-5",
                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                            className: "flex flex-wrap ",
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                    className: "md:w-1/3 pr-4 pl-4",
                                    children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                        className: "flex",
                                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                            className: "max-w-xs",
                                            children: [
                                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                    children: [
                                                        /*#__PURE__*/ jsx_runtime_.jsx("h3", {
                                                            className: "font-bold text-xl text-white",
                                                            children: "ABOUT US"
                                                        }),
                                                        /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                                            className: ""
                                                        })
                                                    ]
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                    className: "",
                                                    children: /*#__PURE__*/ jsx_runtime_.jsx(next_link["default"], {
                                                        href: "/",
                                                        children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                            style: {
                                                                color: 'white'
                                                            },
                                                            children: "READ MORE"
                                                        })
                                                    })
                                                })
                                            ]
                                        })
                                    })
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                    className: "md:w-1/3 pr-4 pl-4",
                                    children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                        className: "",
                                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                            className: "",
                                            children: [
                                                /*#__PURE__*/ jsx_runtime_.jsx("h3", {
                                                    className: "font-bold text-xl text-white uppercase",
                                                    children: "Quicklinks"
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx("ul", {
                                                    children: data === null || data === void 0 ? void 0 : data.map(({ label , content , type , details  }, i)=>label != 'donate' ? /*#__PURE__*/ jsx_runtime_.jsx(dropdownButton, {
                                                            label: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
                                                                children: [
                                                                    ' ',
                                                                    content.length > 1 && /*#__PURE__*/ jsx_runtime_.jsx(jsx_runtime_.Fragment, {
                                                                        children: " ⯈ "
                                                                    }),
                                                                    ' ',
                                                                    label
                                                                ]
                                                            }),
                                                            content: content,
                                                            setMenuState: setMenuState,
                                                            menuState: menuState1,
                                                            isFooter: true
                                                        }) : undefined
                                                    )
                                                })
                                            ]
                                        })
                                    })
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                    className: "md:w-1/3 pr-4 pl-4",
                                    children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                        className: "flex flex-wrap ",
                                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                            className: " xl:w-full pr-4 pl-4",
                                            children: [
                                                /*#__PURE__*/ jsx_runtime_.jsx("h3", {
                                                    className: "w-full mt-0 mb-0 pt-0 pb-2 pl-0 pr-0 font-bold text-xl text-white uppercase",
                                                    children: "get in touch"
                                                }),
                                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                    className: "",
                                                    children: [
                                                        /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                                            className: "text-sm mb-1 text-white"
                                                        }),
                                                        /*#__PURE__*/ jsx_runtime_.jsx("hr", {
                                                            className: "w-4/5"
                                                        })
                                                    ]
                                                }),
                                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                    className: "",
                                                    children: [
                                                        /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                                            className: "text-sm mb-1 text-white",
                                                            children: "TAC Community Hub: No.1 Sleekseed Crescent, Chikakore District, Kubwa, Abuja"
                                                        }),
                                                        /*#__PURE__*/ jsx_runtime_.jsx("hr", {
                                                            className: "w-4/5"
                                                        })
                                                    ]
                                                }),
                                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                    className: "",
                                                    children: [
                                                        /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                                            className: "text-sm mb-1 text-white",
                                                            children: "phone: +234 706 224 7581"
                                                        }),
                                                        /*#__PURE__*/ jsx_runtime_.jsx("hr", {
                                                            className: "w-4/5"
                                                        })
                                                    ]
                                                }),
                                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                    className: "",
                                                    children: [
                                                        /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                                            className: "text-sm mb-1 text-white",
                                                            children: "email: secretariat@tacafrica.org"
                                                        }),
                                                        /*#__PURE__*/ jsx_runtime_.jsx("hr", {
                                                            className: "w-4/5"
                                                        })
                                                    ]
                                                })
                                            ]
                                        })
                                    })
                                })
                            ]
                        })
                    })
                }),
                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    className: "flex justify-center my-6",
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx(next_link["default"], {
                            href: 'https://m.facebook.com/pg/TACinAfrica/posts',
                            children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                target: "_blank",
                                rel: "noreferrer",
                                children: /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                    className: "mx-4 fa fa-brands fa-facebook fa-2x text-white"
                                })
                            })
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx(next_link["default"], {
                            href: 'https://www.instagram.com/tac.africa',
                            children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                target: "_blank",
                                rel: "noreferrer",
                                children: /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                    className: "mx-4 fa fa-brands fa-instagram fa-2x text-white"
                                })
                            })
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx(next_link["default"], {
                            href: 'https://ng.linkedin.com/company/tacafrica',
                            children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                target: "_blank",
                                rel: "noreferrer",
                                children: /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                    className: "mx-4 fa fa-brands fa-linkedin fa-2x text-white"
                                })
                            })
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx(next_link["default"], {
                            href: 'https://twitter.com/Tacafrica2',
                            children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                target: "_blank",
                                rel: "noreferrer",
                                children: /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                    className: "mx-4 fa fa-brands fa-twitter fa-2x text-white "
                                })
                            })
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx(next_link["default"], {
                            href: 'https://www.youtube.com/channel/UCsOPBwlkXfJspo22MJcC8NA',
                            children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                target: "_blank",
                                rel: "noreferrer",
                                children: /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                    className: "mx-2 fa fa-brands fa-youtube fa-2x text-white "
                                })
                            })
                        })
                    ]
                })
            ]
        })
    }));
};

;// CONCATENATED MODULE: ./context/modalContext.js

const ModalContext = /*#__PURE__*/ (0,external_react_.createContext)();

;// CONCATENATED MODULE: ./components/layout/nav_bar/NavBar.jsx

/* eslint-disable @next/next/no-img-element */ 



const NavBar = ()=>{
    const { 0: menuState1 , 1: setMenuState  } = (0,external_react_.useState)(false);
    const toggleButton = (0,external_react_.useCallback)(()=>{
        setMenuState((menuState)=>!menuState
        );
    }, []);
    const navBarStyles = {
        backdropFilter: 'blur(0px) saturate(100%)',
        WebkitBackdropFilter: 'blur(0px) saturate(100%)',
        background: ' rgba(255, 255, 255, 0.22)',
        border: '1px solid rgba(209, 213, 219, 0.3)'
    };
    return(/*#__PURE__*/ jsx_runtime_.jsx("nav", {
        className: ` px-2 sm:px-4 py-2.5 ${menuState1 && 'h-screen'} lg:h-full`,
        style: {
            ...navBarStyles
        },
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
            className: "xl:px-12 flex flex-wrap justify-between items-center mx-auto",
            children: [
                /*#__PURE__*/ jsx_runtime_.jsx(next_link["default"], {
                    href: '/',
                    children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                        children: /*#__PURE__*/ jsx_runtime_.jsx("img", {
                            src: "/SOHK_logo.png",
                            className: "mr-3 h-20 ",
                            alt: "tac Logo"
                        }, data.label)
                    }, data.label)
                }, data.label),
                /*#__PURE__*/ jsx_runtime_.jsx("button", {
                    onClick: toggleButton,
                    "data-collapse-toggle": "mobile-menu",
                    type: "button",
                    className: "inline-flex items-center p-2 ml-3 text-sm text-gray-500 rounded-lg lg:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600",
                    "aria-controls": "mobile-menu",
                    "aria-expanded": "false",
                    children: /*#__PURE__*/ jsx_runtime_.jsx("span", {
                        className: "visible lg:hidden",
                        style: {
                            zIndex: '100'
                        },
                        onClick: toggleButton,
                        children: /*#__PURE__*/ jsx_runtime_.jsx("button", {
                            className: [
                                'hamburger hamburger--collapse ',
                                menuState1 && 'is-active', 
                            ].join(' '),
                            onClick: toggleButton,
                            type: "button",
                            children: /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                className: "hamburger-box text-sweet_blue",
                                children: /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                    className: "hamburger-inner text-sweet_blue"
                                }, data.label)
                            }, data.label)
                        }, data.label)
                    }, data.label)
                }, data.label),
                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    className: `${menuState1 == true ? '' : 'hidden'}  md:isvisible w-full lg:block lg:w-auto`,
                    id: "mobile-menu",
                    children: /*#__PURE__*/ jsx_runtime_.jsx("ul", {
                        className: "flex flex-col mt-4 lg:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium",
                        children: data === null || data === void 0 ? void 0 : data.map(({ label , content , type , details  }, i)=>/*#__PURE__*/ jsx_runtime_.jsx(jsx_runtime_.Fragment, {
                                children: content.length > 1 ? /*#__PURE__*/ jsx_runtime_.jsx(jsx_runtime_.Fragment, {
                                    children: /*#__PURE__*/ jsx_runtime_.jsx(dropdownButton, {
                                        label: label,
                                        content: content,
                                        setMenuState: setMenuState,
                                        menuState: menuState1
                                    })
                                }) //dropdown
                                 : label == 'contact' ? /*#__PURE__*/ jsx_runtime_.jsx(next_link["default"], {
                                    href: "#contact",
                                    children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                        children: /*#__PURE__*/ jsx_runtime_.jsx("button", {
                                            type: "button",
                                            className: "capitalize text-black bg-[#FFC600] hover:text-[#FFC600] hover:bg-black border border-primary focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-sm 2xl:text-lg px-5 py-2.5 text-center mr-2 mb-2",
                                            children: label
                                        }, data.label)
                                    }, data.label)
                                }) : label == 'Events' ? /*#__PURE__*/ jsx_runtime_.jsx(next_link["default"], {
                                    href: "/tac_events",
                                    children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                        children: /*#__PURE__*/ jsx_runtime_.jsx("button", {
                                            type: "button",
                                            className: "capitalize mt-80 lg:mt-0 py-2.5 px-5 mr-2 mb-2 text-sm 2xl:text-lg font-medium text-gray-900 focus:outline-none rounded-full border border-gray-200 hover:text-[#FFC600] hover:bg-black focus:z-10 focus:ring-4 focus:ring-gray-200",
                                            children: label
                                        }, data.label)
                                    }, data.label)
                                }) : /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                    children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                        href: label == 'Home' ? '/' : '#contact',
                                        className: "capitalize block py-2 pr-4 pl-3 text-gray-700 border-b 2xl:text-lg border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700",
                                        children: label
                                    }, i)
                                })
                            })
                        )
                    }, data.label)
                }, data.label)
            ]
        }, data.label)
    }));
};
/* harmony default export */ const nav_bar_NavBar = (NavBar);

;// CONCATENATED MODULE: ./components/layout/Layout.jsx

/* eslint-disable react/jsx-key */ // import NavBar from '../layout/nav_bar/NavBar'




function Layout({ children  }) {
    const { 0: modalState , 1: setModalState  } = (0,external_react_.useState)(false);
    return(/*#__PURE__*/ (0,jsx_runtime_.jsxs)(ModalContext.Provider, {
        value: [
            modalState,
            setModalState
        ],
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx(nav_bar_NavBar, {}),
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                style: {
                    minHeight: '90vh'
                },
                children: children
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(Footer, {})
        ]
    }));
};

// EXTERNAL MODULE: ./node_modules/next/dynamic.js
var dynamic = __webpack_require__(5152);
// EXTERNAL MODULE: ./node_modules/react-loading-skeleton/dist/skeleton.css
var skeleton = __webpack_require__(6593);
;// CONCATENATED MODULE: external "nextjs-progressbar"
const external_nextjs_progressbar_namespaceObject = require("nextjs-progressbar");
var external_nextjs_progressbar_default = /*#__PURE__*/__webpack_require__.n(external_nextjs_progressbar_namespaceObject);
;// CONCATENATED MODULE: ./pages/_app.js

/* eslint-disable react/jsx-key */ 

// import 'bootstrap/dist/css/bootstrap.css'

 //! do not remove
// import '../styles/layout/navbarHover.css'





const flowbite = (0,dynamic["default"])(null, {
    loadableGenerated: {
        modules: [
            "_app.js -> " + "flowbite"
        ]
    },
    ssr: false
});
(0,dynamic["default"])(null, {
    loadableGenerated: {
        modules: [
            "_app.js -> " + "tw-elements"
        ]
    },
    ssr: false
});
function MyApp({ Component , pageProps  }) {
    return(/*#__PURE__*/ (0,jsx_runtime_.jsxs)(Layout, {
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx((external_nextjs_progressbar_default()), {}),
            /*#__PURE__*/ jsx_runtime_.jsx(Component, {
                ...pageProps
            })
        ]
    }));
}
/* harmony default export */ const _app = (MyApp);


/***/ }),

/***/ 562:
/***/ ((module) => {

module.exports = require("next/dist/server/denormalize-page-path.js");

/***/ }),

/***/ 4014:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/i18n/normalize-locale-path.js");

/***/ }),

/***/ 8524:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/is-plain-object.js");

/***/ }),

/***/ 5832:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/loadable.js");

/***/ }),

/***/ 8020:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/mitt.js");

/***/ }),

/***/ 4964:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router-context.js");

/***/ }),

/***/ 9565:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/get-asset-path-from-route.js");

/***/ }),

/***/ 4365:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/get-middleware-regex.js");

/***/ }),

/***/ 1428:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/is-dynamic.js");

/***/ }),

/***/ 1292:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/parse-relative-url.js");

/***/ }),

/***/ 979:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/querystring.js");

/***/ }),

/***/ 6052:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/resolve-rewrites.js");

/***/ }),

/***/ 4226:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/route-matcher.js");

/***/ }),

/***/ 5052:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/route-regex.js");

/***/ }),

/***/ 9232:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/utils.js");

/***/ }),

/***/ 6689:
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ 997:
/***/ ((module) => {

module.exports = require("react/jsx-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [730,664,759], () => (__webpack_exec__(7667)));
module.exports = __webpack_exports__;

})();