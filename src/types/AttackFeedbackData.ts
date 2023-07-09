export type AttackFeedbackData = {
  position: {
    x: number,
    y: number,
  },
  currentPlayer: number,
  status: 'miss' | 'killed' | 'shot'
};
