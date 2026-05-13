/*
  PATRIMONIO IDEAL — script.js
*/

const META_FIRMAS = 50000;
const STORAGE_KEY  = 'pi-firmas-v1';

/**
 * Hash simple unidireccional para anonimizar números de cédula.
 */
function simpleHash(str) {
  let h = 0;
  for (let i = 0; i < str.length; i++) {
    h = (Math.imul(31, h) + str.charCodeAt(i)) | 0;
  }
  return h.toString(36);
}