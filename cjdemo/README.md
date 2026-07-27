# CJ AI 콘텐츠 포트폴리오 데모

이 폴더는 기존 카카오뱅크 포트폴리오와 분리된 `/cjdemo` 전용 정적 페이지입니다.

## 프로젝트 구성

1. 웹툰 AI 숏애니메이션
2. Antiframe
3. AI 드라마

숏애니는 공개 가능한 Google Drive 영상으로 재생하고, Antiframe은 실제 UI 이미지와 API 없는 정적 인터랙티브 데모를 사용합니다. AI 드라마는 제작 완료 후 결과 영상과 제작 자료를 연결합니다.

원본 제작 소스와 대용량 영상은 공개 저장소에 복사하지 않습니다. 포트폴리오에 사용할 수 있는 선별 자료만 `assets/projects`에 둡니다.

## 상세 글

- `content/posts/01-webtoon-ai-short-animation.md`
- `content/posts/02-antiframe.md`
- `content/posts/02-cinematic-layer-in-layer.md`

제목, 태그, 상태와 미디어 경로는 `src/app.js`의 `projects`에서 수정합니다.
