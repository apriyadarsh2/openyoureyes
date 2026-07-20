import mockData from "@/data/mock_responses.json";

export const ENDPOINTS = {
  politicians:
    mockData["GET /api/v1/politicians/search?page=1&limit=20"],

  constituencies:
    mockData["GET /api/v1/constituencies"],

  wealth:
    mockData["GET /api/v1/leaderboards/wealth?limit=10"],

  criminal:
    mockData["GET /api/v1/leaderboards/criminal?limit=10"],

  margin:
    mockData["GET /api/v1/leaderboards/margins?year=2024&limit=10"],

  health:
    mockData["GET /api/v1/health"],

    
};

