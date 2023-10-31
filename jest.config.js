module.exports = {
  moduleFileExtensions: [
    // 파일 확장자를 지정하지 않은 경우, jest가 검색할 확장자 목록
    'js',
    'vue'
  ],
  moduleNameMapper: {
    // `~` 같은 경로 별칭을 매핑
    '^~/(.*)$': '<rootDir>/src/$1',
  },
  modulePathIgnorePatterns: [
    // 일치하는 경로에서 모듈을 가져오지 않는다.
    '<rootDir>/node_modules/',
    '<rootDir>/dist',
  ],
  testURL: 'http://localhost', //jsdom 환경에 대한 URL을 설정
  transform: {
    // 정규식과 일치하는 파일의 변환 모듈을 지정
    '^.+\\.vue$': 'vue-jest',
    '^.+\\.js$': 'babel-jest',
  },
  // modulePaths: [
  //   "<rootDir>/src"
  // ],
};