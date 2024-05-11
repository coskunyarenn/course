import {StyleSheet, Text, View} from "react-native"
import React from "react"

export default function CoursesSummary({periodName, courses}) {
  const coursesSum = courses.reduce((sum, course) => {
    return sum + course.amount
  }, 0)

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{periodName}</Text>
      <Text style={styles.cost}>{coursesSum + " TL"} </Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    justifyContent: "space-between",
    alignItems: "center",
    flexDirection: "row",
    backgroundColor: "#0D0851",
    paddingHorizontal: 10,
    paddingVertical: 20,
    borderRadius: 10,
  },
  title: {
    fontSize: 14,
    color: "#fff",
  },
  cost: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#fff",
  },
})
