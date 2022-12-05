// @ts-check
// 타입스크립트 파일한테 자바스크립트 파일을 확인하라고 알리는것
// 파일을 자바스크립트 인데 타입스크립트에 보호를 받고 싶으면 JSDoc를 사용하면 끝 !
// 함수 위에 적어야함
/**
 * init the project
 * @param {object} config
 * @param {boolean} config.debug
 * @param {string} config.url
 * @returns boolean
 */
export function init(config) {
    return true;
}
/**
 * exit the program
 * @param {number} code
 * @returns number
 */
export function exit(code) {
    return code + 1;
}
