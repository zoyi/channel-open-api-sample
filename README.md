# Channel Open Api Sample
Channel Webhook, Open API samples for node.js

## 프로젝트 환경설정
### Prerequisite
- node express-generator, node-rest-client 설치
```
$ npm install express-generator -g
$ npm install node-rest-client
```
- 프로젝트 초기화
```
$ express PROJECT_NAME
```
- Dependency 설치
```
$ cd PROJECT_NAME
$ npm install
```
- 포트
  - 아래 예시들에서는 3000번 포트를 사용합니다.

## Assign bot
### 개요
- node express boiler plate를 사용하여 유저챗이 열릴 때 특정 단어가 포함되어있으면 자동으로 manager를 해당 유저챗에 assign할 수 있는 node express 구현합니다.  
- 이 예제는 open api와 webhook이 결합된 형태의 예제입니다.

### 순서
- Webhook 등록
  - 우선 channel desk 앱을 실행시켜 '설정 -> Webhook 관리하기 -> 우측 상단의 새 웹훅만들기'를 실행하여 새 웹훅을 만들어 줍니다. 이 때, URL은 'YOUR_IP:3000/assign'과 같이 등록하도록 합니다.
- 위의 프로젝트 환경 설정이 끝났다면, assignBot/routes/index.js 의 내용을 복사 붙여넣기 합니다.
- accessKey, accessSecret를 채워넣습니다.
  - 참고: https://medium.com/channel-korea/webhook-guide-be27fbd748e2
- botName, keyword, managerId을 채워넣습니다.
  - keyword에 따라 managerId를 설정해주는 코드를 따로 구현할 수도 있습니다.

### 실행
- 아래 명령어를 실행 후 지정된 키워드가 메세지에 포함된 새로운 유저챗을 열면 자동으로 assign 되는 것을 확인할 수 있습니다.
```
$ DEBUG=PROJECT_NAME:* npm start
```
