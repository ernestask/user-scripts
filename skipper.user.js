// ==UserScript==
// @name         Spotify Track Skipper
// @license      MIT
// @namespace    https://github.com/ernestask
// @version      2025-04-22
// @description  Skip tracks on Spotify at random, but regular intervals
// @author       Ernestas Kulik
// @match        https://open.spotify.com/*
// @icon         https://open.spotify.com/favicon.ico
// @grant        none
// ==/UserScript==

'use strict';

const SELECTOR = 'button[data-testid="control-button-skip-forward"]';

const TIMEOUT_LOWER = 31;
const TIMEOUT_UPPER = 49;

function _getTimeout() {
    return Math.floor(
        Math.random() * (TIMEOUT_UPPER - TIMEOUT_LOWER) + TIMEOUT_LOWER
    ) * 1000;
}

function timeoutCb() {
    const button = document.querySelector(SELECTOR);

    button.click();

    setTimeout(timeoutCb, _getTimeout());
}

setTimeout(timeoutCb, _getTimeout());
