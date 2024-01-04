export type AddFoodModalProps = {
  onClose: () => void
  visible: boolean
}

export type RootStackParamList = {
  Home: undefined
  AddFood: undefined
}

export type Meal = {
  calories: string
  name: string
  portion: string
  date?: string
}

export type TodayCaloriesProps = {
  total: number | string
  consumed: number | string
  remaining: number | string
  percentage: number
}

export type TodayMealsProps = {
  foods: Meal[]
  onCompleteAddRemove?: () => void
}

export type MealItemProps = Meal & {
  isAbleToAdd?: boolean
  onCompleteAddRemove?: () => void
  itemPosition?: number
}