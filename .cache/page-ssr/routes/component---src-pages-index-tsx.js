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
// EXTERNAL MODULE: ./node_modules/@octokit/rest/dist-web/index.js + 13 modules
var dist_web = __webpack_require__(8651);
// EXTERNAL MODULE: ./node_modules/@octokit/auth-oauth-app/dist-src/index.js + 23 modules
var dist_src = __webpack_require__(7580);
;// CONCATENATED MODULE: ./src/controllers/githubApi.ts


async function authenticateToGitHub() {
  const auth = (0,dist_src/* createOAuthAppAuth */.p)({
    clientId: "f4dd4b030b4403ade3cb",
    clientSecret: "39f3bf3502df43c59aa044284659bc75449411d2"
  });
  const authentication = await auth({
    type: "oauth-user",
    onVerification: () => {
      // Handle the verification process here if needed
    }
  });
  console.log("Authentication successful");
  const octokit = new dist_web/* Octokit */.v({
    auth: authentication.token
  });

  // Use the authenticated Octokit instance to make API requests
  const response = await octokit.repos.listForAuthenticatedUser();
  console.log(response.data);
}
authenticateToGitHub().catch(console.error);


// using personal access token that has a rate limit
/*
import { Octokit } from "@octokit/rest";

const octokit = new Octokit({
    auth: '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',
});

async function getRepositories() {
    const response = await octokit.repos.listForAuthenticatedUser();
    return response.data;
}

export { getRepositories };
*/
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
    const fetchData = async () => {
      try {
        const repos = await authenticateToGitHub();
        if (repos !== undefined && repos !== null) {
          setRepositories(repos);
        }
      } catch (error) {
        console.error("Error fetching repositories:", error);
      }
    };
    fetchData();
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