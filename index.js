
document.addEventListener('DOMContentLoaded', function() {
  const searchButton = document.getElementById('searchButton');
  const playerNameInput = document.getElementById('playerNameInput');
  const resultDiv = document.getElementById('result');

  searchButton.addEventListener('click', async function() {
    const playerName = playerNameInput.value;

    try {
      const response = await axios.get(`https://aoe4world.com/api/v0/players/${playerName}`);
      const playerData = response.data;
    
      const name = playerData.name;
      const country = playerData.country;
      const avatar = playerData.avatars.medium;
      const winStreak = playerData.modes.rm_solo.streak;
      const winRate = playerData.modes.rm_solo.win_rate;
      const highestRating = playerData.modes.rm_solo.max_rating;
      const rank = playerData.modes.rm_solo.rank_level;
      const rankNumber = playerData.modes.rm_solo.rank;
    
      resultDiv.innerHTML = `
        <p>Name: ${name}</p>
        <p>Country: ${country}</p>
        <p>Avatar: <img src="${avatar}" alt="Player Avatar"></p>
        <p>Rank: ${rank} </p>
        <p>${rankNumber} in the world</p>
        <p>${winStreak} win streak</p>
        <p>${winRate}% win rate</p>
        <p>Highest Rating 1v1 rating: ${highestRating}</p>
      `;
    } catch (error) {
      resultDiv.textContent = 'API call failed';
    }
    
  });
});
