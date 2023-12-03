"use strict";
exports.id = 691;
exports.ids = [691];
exports.modules = {

/***/ 301:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  Head: () => (/* binding */ Head),
  "default": () => (/* binding */ pages)
});

// EXTERNAL MODULE: external "/Users/jonathanlane/Documents/Development/Jono Lane/node_modules/react/index.js"
var index_js_ = __webpack_require__(4410);
var index_js_default = /*#__PURE__*/__webpack_require__.n(index_js_);
// EXTERNAL MODULE: ./node_modules/@octokit/rest/dist-web/index.js + 37 modules
var dist_web = __webpack_require__(1736);
;// CONCATENATED MODULE: ./src/controllers/githubApi.ts
const octokit=new dist_web/* Octokit */.v({auth:'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'});async function getRepositories(){const response=await octokit.repos.listForAuthenticatedUser();return response.data;}
;// CONCATENATED MODULE: ./src/pages/index.tsx
// import * as React from "react"



const IndexPage = () => {
  const {
    0: repositories,
    1: setRepositories
  } = (0,index_js_.useState)([]);
  (0,index_js_.useEffect)(() => {
    const fetchRepositories = async () => {
      const repos = await getRepositories();
      setRepositories(repos);
      console.log(repos);
    };
    fetchRepositories();
  }, []);
  return /*#__PURE__*/index_js_default().createElement("main", {
    className: "flex items-center justify-center h-screen bg-black"
  }, /*#__PURE__*/index_js_default().createElement("div", {
    className: "max-w-md mx-auto p-4"
  }, repositories.map(repo => /*#__PURE__*/index_js_default().createElement("div", {
    key: repo.id,
    className: "mb-4"
  }, /*#__PURE__*/index_js_default().createElement("h3", {
    className: "text-white text-xl font-bold"
  }, repo.name), /*#__PURE__*/index_js_default().createElement("p", {
    className: "text-gray-300"
  }, repo.description)))));
};
/* harmony default export */ const pages = (IndexPage);
const Head = () => /*#__PURE__*/index_js_default().createElement("title", null, "Jono Lane");

/***/ })

};
;
//# sourceMappingURL=component---src-pages-index-tsx.js.map