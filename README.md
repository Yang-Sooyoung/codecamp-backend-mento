### 🧰 codecamp-backend-mento

>Node.js와 NestJS 기반의 백엔드 실습 프로젝트입니다.  
>RESTful API 설계부터 인증, 결제, 파일 업로드, 배포까지 다양한 기능을 포함한 실전형 백엔드 개발 환경을 구축합니다.

</br>

### 기술 스택

- **Language**: TypeScript (Node.js)
- **Framework**: Express, NestJS
- **Database**: PostgreSQL
- **ORM**: TypeORM
- **Authentication**: JWT, OAuth (Google, Kakao)
- **DevOps**: Docker, GitHub Actions (CI/CD)
- **Documentation**: Swagger
- **Testing**: Jest

</br>

### 프로젝트 구조

```bash
codecamp-backend-mento/
│
├── express/             # 기본 Node.js/Express 실습
├── nestjs/              # NestJS 기반 프로젝트
├── docker/              # Docker 설정 파일
├── prisma/              # Prisma ORM 사용 시 (옵션)
├── scripts/             # 초기화/마이그레이션 스크립트 등
└── README.md
````

</br>

### 실행 방법

### Express 프로젝트 실행

```bash
cd express
npm install
npm run start:dev
```

### NestJS 프로젝트 실행

```bash
cd nestjs
npm install
npm run start:dev
```

### JSON Server (모의 API)

```bash
npx json-server --watch db.json --port 3001
```

### Docker 환경 실행

```bash
docker-compose up --build -d
```

### Swagger 문서

NestJS 앱 구동 후 브라우저에서 아래 주소로 접속하면 API 명세 확인 가능:

```
http://localhost:3000/api-docs
```

</br>

#### 🙋‍♀️ 만든 사람

- 👩‍💻 이름: 양수영 (Yang Sooyoung)
- 🔗 GitHub: [@Yang-Sooyoung](https://github.com/Yang-Sooyoung)

<br/>

