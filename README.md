# 지뢰 찾기

> 지뢰찾기 게임을 할 수 있습니다.<br>
> Beginner : 8x8, 8<br>
> Intermediate : 16x16, 16<br>
> Expert : 32x16, 20<br>
> 난이도 커스텀이 가능합니다.<br>
> [폭탄 보이기] 체크박스를 이용하여 폭탄의 위치를 확인할 수 있습니다.

- 사용 스택<br>
  ReactJS / TypeScript / Redux-toolkit / styled-components / react-icons

<br>

![기본화면](https://velog.velcdn.com/images/938938/post/40d9a9cf-83ba-4b80-844a-97126805384a/image.png)
[기본화면]<br>
난이도 설정 버튼을 클릭하여 게임을 시작할 수 있습니다.<br>
커스텀 난이도의 경우, 세로와 가로는 2칸 미만으로, 지뢰 수는 세로와 가로칸을 곱한 수 이상으로 설정할 수 없습니다.<br>

<br>

![진행화면](https://velog.velcdn.com/images/938938/post/b30361f2-2f77-4715-8aa0-e476b67531f8/image.png)
[진행화면]<br>
게임 시작 후 화면입니다.<br>
게임이 시작하면 타이머가 시작됩니다.<br>

</center>

## 사용방법

1. 먼저 터미널에서 npm install 을 실행, 모듈을 설치해주세요.
2. npm start 를 하면 실행됩니다.
3. 난이도 설정의 버튼을 클릭하거나, 커스텀 후 설정 버튼을 누르면 게임이 시작됩니다.
4. 오른클릭을 통해 해당 칸을 깃발로 설정하거나 깃발 설정을 취소 할 수 있습니다.
5. 폭탄을 제외한 칸을 모두 열거나, 폭탄을 터트리면 게임이 끝납니다.
6. 3번 방법을 통해 게임을 다시 시작할 수 있습니다.

```
파일 구조
/src
├── /components
├── /model        # type 파일 관련 폴더
├── /store        # redux-toolkit 관련 폴더
├ App.js
└ index.js
```
