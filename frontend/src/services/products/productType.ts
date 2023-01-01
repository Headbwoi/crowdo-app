export type IProduct = {
  user: {}
  title: string
  briefIntro: string
  about: string
  amount: Number
  variations?: {
    firstVariation?: {
      name: string
      about: string
      quantity: Number
      pledgeMinimum: Number
    }
    secondVariation?: {
      name: string
      about: string
      quantity: Number
      pledgeMinimum: Number
    }
    thirdVariation?: {
      name: string
      about: string
      quantity: Number
      pledgeMinimum: Number
    }
  }
}
