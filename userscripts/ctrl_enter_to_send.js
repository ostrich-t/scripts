// ==UserScript==
// @name         ctrl+Enter to send
// @namespace    http://chat.openai.com/
// @version      0.1
// @description  Press enter to start a new line, and ctrl+enter to send.(On mac, cmd+enter to send).
// @author       Takumu Nakajima
// @match        https://chat.openai.com/c/*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    document.querySelector('textarea')
      .addEventListener('keydown', (e) => {
      if (window.navigator.userAgent.indexOf("Mac") != -1) {
        if (e.code == "Enter" && !e.metaKey) {
          e.stopPropagation();
        }
      } else {
        if (e.code == "Enter" && !e.ctrlKey) {
          e.stopPropagation();
        }
      }
    });
})();