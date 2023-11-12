// ==UserScript==
// @name         ChatGPT Extension
// @namespace    http://chat.openai.com/
// @version      0.1
// @description  Press enter to start a new line, and ctrl+enter to send.(On mac, cmd+enter to send).
// @description  Press / to focus on the prompt textarea.
// @author       Takumu Nakajima
// @match        https://chat.openai.com/c/*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    const promptTextarea = document.getElementById('prompt-textarea');

    document.addEventListener('keydown', (event) => {
      if (event.key === '/' && !event.target.matches('input, textarea')) {
        event.preventDefault();

        if (promptTextarea) {
          promptTextarea.focus();
        }
      }
    });

    promptTextarea.addEventListener('keydown', (e) => {
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