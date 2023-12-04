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
;// CONCATENATED MODULE: ./src/controllers/githubApi.ts
/* provided dependency */ var fetch = __webpack_require__(1515);
async function fetchRepositories(){const accessToken="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";const repoResponse=await fetch("https://api.github.com/user/repos",{headers:{Authorization:`Bearer ${accessToken}`}});if(!repoResponse.ok){throw new Error("Failed to fetch repositories");}const repositories=await repoResponse.json();return repositories;}
;// CONCATENATED MODULE: ./src/pages/index.tsx
// import * as React from "react"
/*
import type { HeadFC, PageProps } from "gatsby"
import React, { useEffect, useState } from "react";
import { authenticateToGitHub } from "../controllers/githubApi";

interface Repository {
  id: number;
  node_id: string;
  name: string;
  full_name: string;
  license: {
    key: string;
    name: string;
    url: string | null;
    spdx_id: string | null;
    node_id: string;
    html_url?: string | undefined;
  } | null;
    description: string | null;
}

const IndexPage: React.FC<PageProps> = () => {
  const [repositories, setRepositories] = useState<Repository[]>([]);

  useEffect(() => {
    authenticateToGitHub().catch(console.error);
  }, []);

  return (
    <main className="flex items-center justify-center h-screen bg-black">
      <div className="max-w-md mx-auto p-4">
        {repositories.map((repo) => (
          <div key={repo.id} className="mb-4">
            <h3 className="text-white text-xl font-bold">{repo.name}</h3>
            <p className="text-gray-300">{repo.description}</p>
          </div>
        ))}
      </div>
    </main>
  );
};

export default IndexPage;

export const Head: HeadFC = () => <title>Jono Lane</title>;
*/



const IndexPage = () => {
  const {
    0: repositories,
    1: setRepositories
  } = (0,index_js_.useState)([]);
  (0,index_js_.useEffect)(() => {
    const getRepositories = async () => {
      try {
        const repositories = await fetchRepositories();
        setRepositories(repositories);
      } catch (error) {
        console.error(error);
      }
    };
    getRepositories();
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