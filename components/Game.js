import React, { useState } from 'react';
import { View, Text, Button } from 'react-native';

const Game = () => {
  const [coins, setCoins] = useState(21);

  const handlePlayerMove = (numCoins) => {
    const aiPick = (coins - numCoins) % 5 || 1;
    setCoins(coins - numCoins - aiPick);
    if (coins - numCoins - aiPick === 0) {
      alert('AI wins!');
    }
  };

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Coins left: {coins}</Text>
      <View style={{ flexDirection: 'row', marginTop: 20 }}>
        <Button title="1" onPress={() => handlePlayerMove(1)} />
        <Button title="2" onPress={() => handlePlayerMove(2)} />
        <Button title="3" onPress={() => handlePlayerMove(3)} />
        <Button title="4" onPress={() => handlePlayerMove(4)} />
      </View>
    </View>
  );
};

export default Game;
