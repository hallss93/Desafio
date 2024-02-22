/**
 * It returns an object with the browser name and version number.
 * @param {string} str - string - The string to convert to lowercase.
 * @returns An object with two properties: browser and version.
 */
const toLowerCase = (str: string) => {
  return str.toLowerCase();
};
export interface BrowserDetect {
  browser: string;
  version: string;
}
/**
 * It returns an object with the browser name and version number if the user agent string matches one
 * of the known browsers, otherwise it returns an object with the browser name set to "Unknown" and the
 * version number set to an empty string.
 * @param {string} userAgent - string
 * @returns An object with two properties: browser and version.
 */
export const RequestDetectBrowser = (userAgent: string): BrowserDetect => {
  try {
    if (userAgent.indexOf('Opera') != -1) {
      return {
        browser: 'Opera',
        version: toLowerCase(userAgent).match(/(opera)\/([\d-,.]*)/)[2],
      };
    } else if (userAgent.indexOf('OPR') != -1) {
      return {
        browser: 'Opera',
        version: toLowerCase(userAgent).match(/(opr)\/([\d-,.]*)/)[2],
      };
    } else if (userAgent.indexOf('Chrome') != -1) {
      return {
        browser: 'Chrome',
        version: toLowerCase(userAgent).match(/(chrome)\/([\d-,.]*)/)[2],
      };
    } else if (userAgent.indexOf('Safari') != -1) {
      return {
        browser: 'Safari',
        version: toLowerCase(userAgent).match(/(safari)\/([\d-,.]*)/)[2],
      };
    } else if (userAgent.indexOf('Firefox') != -1) {
      return {
        browser: 'Firefox',
        version: toLowerCase(userAgent).match(/(firefox)\/([\d-,.]*)/)[2],
      };
    } else {
      return {
        browser: 'Unknown',
        version: '',
      };
    }
  } catch (e) {
    return {
      browser: 'Unknown',
      version: '',
    };
  }
};
