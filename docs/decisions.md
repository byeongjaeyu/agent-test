# 결정 기록

> 확정된 기술 결정. **한 번 적힌 결정은 뒤집지 않는다.**
> 바꿔야 한다면 기존 줄을 지우지 말고 새 줄로 덮어쓰며 이유를 남긴다.

| 날짜 | 결정 | 이유 |
|---|---|---|
| 2026-07-31 | 앱 코드는 `app/` 패키지, 테스트는 `tests/` 에 위치. 의존성은 `requirements.txt`(fastapi, uvicorn, pytest, httpx)로 관리 | 최소 FastAPI 앱 구조를 단순하고 표준적으로 유지하기 위함 |
| 2026-07-31 | 기존 파이썬 테스트(`tests/`) 삭제. 프런트엔드는 `frontend/` 에 Vite + React(JS, `npm create vite@latest -- --template react`)로 신규 작성, 백엔드 연동 없이 로컬 state(useState)만으로 todo CRUD 구현 | 사용자 요청에 따라 가장 단순한 로컬 상태 기반 todo 앱으로 전환 |
