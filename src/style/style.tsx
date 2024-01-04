import { StyleSheet } from 'react-native'

export const styleHeader = StyleSheet.create({
  container: {
    flexDirection: 'row'
  },
  leftContainer: {
    flex: 1,
    justifyContent: 'center'
  },
  rightContainer: {
    flex: 1,
  },
  name: {
    fontSize: 14,
    fontWeight: 'bold'
  },
  subtitle: {
    fontSize: 12,
    color: '#808080'
  },
  profileImage: {
    width: 40,
    height: 40,
    borderRadius: 24
  },
  arrowContainer: {
    marginLeft: -12,
  },
})

export const styleHome = StyleSheet.create({
  container: {
    padding: 12,
    backgroundColor: '#FFF',
    flex: 1
  },
  caloriesContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 24
  },
  leftContainer:{
    flex: 1,
    justifyContent: 'center',
  },
  rightContainer: {
    flex: 1,
    alignItems: 'flex-end',
    justifyContent: 'center',
  },
  caloriesLegend: {
    fontSize: 20,
  }
})

export const styleFood = StyleSheet.create({
  container: {
    padding: 12,
    backgroundColor: '#FFF',
    flex: 1
  },
  addFoodContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 24
  },
  legendContainer: {
    flex: 1
  },
  addFoodBtnContainer: {
    flex: 1,
    alignItems: 'flex-end'
  },
  addFoodLegend: {
    fontSize: 20
  },
  searchContainer: {
    flexDirection: 'row',
  },
  inputContainer: {
    flex: 1,
    marginLeft: -12
  },
  searchBtnTitle: {
    color: '#000',
    fontSize: 14
  },
  content: {

  }
})

export const styleModal = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0,0,0,0.5)'
  },
  content: {
    width: '75%',
    backgroundColor: '#FFF',
    padding: 18,
    borderRadius: 20,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  closeContainer: {
    alignItems: 'flex-end',
  },
  formItem: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  inputContainer : {
    flex: 2,
  },
  legendContainer: {
    flex: 1,
  },
  legend: {
    fontWeight: '500'
  },
  buttonContainer: {
    alignItems: 'flex-end',
  }
})

export const styleMeal = StyleSheet.create({
  container: {
    backgroundColor: '#ade8af',
    borderRadius: 12,
    padding: 12,
    marginBottom: 12,
    flexDirection: 'row'
  },
  leftContainer: {
    flex: 1,
    justifyContent: 'center'
  },
  rightContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'flex-end'
  },
  name: {
    fontSize: 18,
    fontWeight: '500',
  },
  portion: {
    fontSize: 13,
    fontWeight: '500',
    color: '#808080'
  },
  calories: {
    fontSize: 18,
  },
  iconButton: {
    marginBottom: -8,
  }
})

export const styleCalories = StyleSheet.create({
  container: {
    flexDirection: 'row'
  },
  leftContainer: {
    flex: 1
  },
  rightContainer: {
    flex: 1,
    justifyContent: 'center'
  },
  rightItem: {
    flexDirection: 'row',
    marginBottom: 8
  },
  rightItemLegend: {
    flex: 1
  },
  rightItemValue: {
    flex: 1,
    textAlign: 'right'
  },
  today: {
    fontSize: 20,
    fontWeight: '500',
    marginBottom: 14
  }
})

export const styleTodayMeal = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 24
  },
  title: {
    fontSize: 16,
  },
  content: {
    marginVertical: 16,
  },
})