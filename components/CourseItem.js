import {Pressable, StyleSheet, Text, View} from "react-native"
import React from "react"
import {getFormattedDate} from "../helper/date"

export default function CourseItem({amount, date, description, id}) {
  return (
    <Pressable>
      <View style={styles.courseContainer}>
        <View>
          <Text style={styles.description}>{description}</Text>
          <Text>{getFormattedDate(date)}</Text>
        </View>
        <View style={styles.priceContainer}>
          <Text style={styles.price}>{amount + "TL"}</Text>
        </View>
      </View>
    </Pressable>
  )
}

const styles = StyleSheet.create({
  courseContainer: {
    justifyContent: "space-between",
    alignItems: "center",
    flexDirection: "row",
    backgroundColor: "lightblue",
    paddingHorizontal: 20,
    paddingVertical: 8,
    borderRadius: 10,
    marginVertical: 8,
    elevation: 4,
    shadowRadius: 5,
    shadowColor: "black",
    shadowOffset: {width: 1, height: 1},
    shadowOpacity: 0.5,
  },
  description: {
    fontSize: 16,
    fontWeight: "bold",
    marginBottom: 5,
  },
  priceContainer: {
    backgroundColor: "white",
  },
  price: {},
})
