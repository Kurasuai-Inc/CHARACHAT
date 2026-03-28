# @charachat/api

API responsibilities:

- lightweight chat thread/message storage
- CHARAHOME-derived auth validation
- direct conversation turn execution
- optional CHARADESK attention handoff

## Endpoints

- `GET /health`
- `GET /threads`
- `POST /threads`
- `GET /threads/:threadId/messages`
- `POST /threads/:threadId/messages`
- `GET /desk/availability`
