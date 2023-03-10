# :: 원티드 프리온보딩 챌린지 프론트엔드 코스 사전과제

## 📚 기술스택

![HTML5](https://img.shields.io/badge/html5-%23E34F26.svg?style=for-the-badge&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/css3-%231572B6.svg?style=for-the-badge&logo=css3&logoColor=white)
![TypeScript](https://img.shields.io/badge/typescript-%23007ACC.svg?style=for-the-badge&logo=typescript&logoColor=white)
![React](https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB)
![React Query](https://img.shields.io/badge/-React%20Query-FF4154?style=for-the-badge&logo=react%20query&logoColor=white)

| 라이브러리           | 용도                                                                                |
| -------------------- | ----------------------------------------------------------------------------------- |
| **React Query**      | 서버 상태 관리를 위해 사용하였습니다.                                               |
| **emotion**          | CSS in JS 방식으로 CSS를 작성하기 위해 사용하였습니다.                              |
| **antd**             | 편리한 UI 작업을 위하여 antd UI 라이브러리를 사용하였습니다.                        |
| **react-router-dom** | 페이지 이동 처리 및 중첩 라우팅 사용을 위하여 react-router-dom v6를 사용하였습니다. |
| **axios**            | 비동기 HTTP 통신 처리를 위해 사용하였습니다.                                        |
| **typescript**       | type 안정성과 더 나은 개발 디버깅을 위해 사용하였습니다.                            |

# 클라이언트 구현 과제 안내

## 실행 방법

```bash
# CLONE REPOSITORY
git clone https://github.com/qkrwltn8976/wanted-pre-onboarding-challenge-fe-1.git
cd wanted-pre-onboarding-challenge-fe-1

# INSTALLATION & COMPILATION
npm install
npm run build

# START SERVER & STOP SERVER
npm run start
npm run stop
```

## Assignment 1 - Login / SignUp

- /auth 경로에 로그인 / 회원가입 기능을 개발합니다
  - 로그인, 회원가입을 별도의 경로로 분리해도 무방합니다
  - [x] 최소한 이메일, 비밀번호 input, 제출 button을 갖도록 구성해주세요
- 이메일과 비밀번호의 유효성을 확인합니다
  - [x] 이메일 조건 : 최소 `@`, `.` 포함
  - [x] 비밀번호 조건 : 8자 이상 입력
  - [x] 이메일과 비밀번호가 모두 입력되어 있고, 조건을 만족해야 제출 버튼이 활성화 되도록 해주세요
- 로그인 API를 호출하고, 올바른 응답을 받았을 때 루트 경로로 이동시켜주세요
  - [x] 응답으로 받은 토큰은 로컬 스토리지에 저장해주세요
  - [x] 다음 번에 로그인 시 토큰이 존재한다면 루트 경로로 리다이렉트 시켜주세요
  - [x] 어떤 경우든 토큰이 유효하지 않다면 사용자에게 알리고 로그인 페이지로 리다이렉트 시켜주세요

## Assignment 2 - Todo List

- Todo List API를 호출하여 Todo List CRUD 기능을 구현해주세요
  - [x] 목록 / 상세 영역으로 나누어 구현해주세요
  - [x] Todo 목록을 볼 수 있습니다.
  - [x] Todo 추가 버튼을 클릭하면 할 일이 추가 됩니다.
  - [x] Todo 수정 버튼을 클릭하면 수정 모드를 활성화하고, 수정 내용을 제출하거나 취소할 수 있습니다.
  - [x] Todo 삭제 버튼을 클릭하면 해당 Todo를 삭제할 수 있습니다.
- 한 화면 내에서 Todo List와 개별 Todo의 상세를 확인할 수 있도록 해주세요.
  - [x] 새로고침을 했을 때 현재 상태가 유지되어야 합니다.
  - [x] 개별 Todo를 조회 순서에 따라 페이지 뒤로가기를 통하여 조회할 수 있도록 해주세요.
- 한 페이지 내에서 새로고침 없이 데이터가 정합성을 갖추도록 구현해주세요

  - [x] 수정되는 Todo의 내용이 목록에서도 실시간으로 반영되어야 합니다

## 개선사항

- [ ] 삭제, 업데이트 등 파괴적 동작을 할 때 유지의 확인 필요
- [x] tsconfig에 strict 옵션 적용
- [x] 타입 가드 및 타입 추론을 사용해 any, 타입 단언을 모두 없애기
- [x] 보다 좁은 타입으로 정의 (ex. string → as const or union)
- [x] react query QueryClient 설정 추가 global error 토스트 메시지 처리
- [x] 로그아웃 기능

## :open_file_folder: 폴더 구조

```sh
📦src
 ┣ 📂apis
 ┣ 📂components
 ┃ ┣ 📂Auth
 ┃ ┃ ┣ 📂Views
 ┃ ┃ ┃ ┣ 📜LoginView.tsx
 ┃ ┃ ┃ ┗ 📜RegisterView.tsx
 ┃ ┃ ┣ 📜Login.tsx
 ┃ ┃ ┗ 📜Register.tsx
 ┃ ┣ 📂Common
 ┃ ┃ ┣ 📂Layout
 ┃ ┃ ┃ ┣ 📂Views
 ┃ ┃ ┃ ┃ ┣ 📜HeaderView.tsx
 ┃ ┃ ┃ ┃ ┗ 📜LayoutView.tsx
 ┃ ┃ ┃ ┣ 📜Header.tsx
 ┃ ┃ ┃ ┗ 📜Layout.tsx
 ┃ ┃ ┗ 📂hocs
 ┃ ┃ ┃ ┗ 📜withAuth.tsx
 ┃ ┗ 📂Todo
 ┃ ┃ ┣ 📂Views
 ┃ ┃ ┃ ┣ 📜TodoFormView.tsx
 ┃ ┃ ┃ ┣ 📜TodoListView.tsx
 ┃ ┃ ┃ ┗ 📜TodoModalView.tsx
 ┃ ┃ ┣ 📜TodoForm.tsx
 ┃ ┃ ┣ 📜TodoLayout.tsx
 ┃ ┃ ┣ 📜TodoList.tsx
 ┃ ┃ ┗ 📜TodoModal.tsx
 ┣ 📂constants
 ┣ 📂hooks
 ┃ ┣ 📂commons
 ┃ ┃ ┗ 📜useInput.ts
 ┃ ┗ 📂queries
 ┃ ┃ ┣ 📜useAuth.ts
 ┃ ┃ ┗ 📜useTodos.ts
 ┣ 📂pages
 ┃ ┣ 📂Auth
 ┃ ┗ 📂Main
 ┣ 📂router
 ┃ ┗ 📜router.tsx
 ┣ 📂styles
 ┣ 📂types
 ┣ 📂utils
 ┣ 📜App.tsx
 ┗ 📜index.tsx
```
