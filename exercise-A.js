const PlayerService = {
  getPlayerTeamId: async playerId => {
    try {
      const { id } = await fetch(`/player/${playerId}/team`);
      return id;
    } catch (error) {
      console.error(`Error getting player team id: ${error}`);
    }
  },
  getPlayers: async teamId => {
    try {
      const playersList = await fetch(`/team/${teamId}/player`);
      return playersList;
    } catch (error) {
      console.error(`Error getting players list: ${error}`);
    }
  }
};

const PlayerDetailsController = {
  playerId: 8,
  showTeammatesClick: async () => {
    try {
      const teamId = await PlayerService.getPlayerTeamId(playerId);
      const playerList = await PlayerService.getPlayers(teamId);
      // Render playerList
      return playerList;
    } catch (error) {
      console.error(`Error showing teammates ${error}`);
    }
  }
};
