# 지뢰 찾기

> 지뢰찾기 게임을 할 수 있습니다.<br>
> Beginner : 8x8, 8<br>
> Intermediate : 16x16, 16<br>
> Expert : 32x16, 20<br>
> 난이도 커스텀이 가능합니다.

- 사용 스택<br>
  ReactJS / TypeScript / Redux-toolkit / styled-components / react-icons

<br>

<center>

![기본화면](https://velog.velcdn.com/images/938938/post/06e62b7b-744d-4fcc-80fc-42377fa1920f/image.png)

<br>

![실행화면](https://velog.velcdn.com/images/938938/post/d130d046-6818-4f5b-9a4e-1f74edef1537/image.png)

</center>

## 사용방법

1. 먼저 터미널에서 npm install 을 실행, 모듈을 설치해주세요.
2. npm start 를 하면 실행됩니다.
3. 난이도 설정의 버튼을 클릭하거나, 커스텀 후 설정 버튼을 누르면 게임이 시작됩니다.
4. 폭탄을 제외한 칸을 모두 열거나, 폭탄을 터트리면 게임이 끝납니다.
5. 3번 방법을 통해 게임을 다시 시작할 수 있습니다.

```
파일 구조
/src
├── /components
├── /model        # type 파일 관련 폴더
├── /store        # redux-toolkit 관련 폴더
├ App.js
└ index.js
```
