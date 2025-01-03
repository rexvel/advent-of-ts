enum Gift {
  Coal = 0b00000,
  Train = 0b00001 << 0b00000,
  Bicycle = 0b00001 << 0b00001,
  SuccessorToTheNintendoSwitch = 0b00001 << 0b00010,
  TikTokPremium = 0b01000,
  Vape = 0b00001 << 0b00100,

  Traditional = Train | Bicycle,

  OnTheMove = Coal | Bicycle | TikTokPremium | Vape,

  OnTheCouch = (Coal | TikTokPremium | Vape | SuccessorToTheNintendoSwitch) & ~Bicycle
}
